function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")              // sépare les accents
    .replace(/[\u0300-\u036f]/g, "") // supprime les accents
    .replace(/\s+/g, " ")          // espaces multiples → 1 espace
    .trim();
}


const phishingRules = {
  urgencyKeywords: [
    "urgent",
    "immediatement",
    "expire dans",
    "action requise",
    "compte suspendu",
    "verifiez maintenant",
    "vite",
  ],
  suspiciousDomains: [
    "paypa1.com",
    "amaz0n.fr",
    "arnazon.com",
    "yah0O",
    "noreply-security.tk",
    "micr0soft.com",
    "goog1e.com"
  ],
  redFlags: [
    "cliquez ici",
    "cliquez sur ce lien",
    "connexion securisee",
    "mot de passe expire",
    "vous avez gagne",
    "felicitations",
    "code de carte bleue",
    "carte bleue",
    "payer pour proteger",
    "payer pour proteger vos donnees"  // ← version sans accent
  ],
  legitimateSenders: [
    "impots.gouv.fr",
    "pole-emploi.fr",
    "banque-france.fr"
  ]
};


function analyzeEmail(email) {
  let suspicionScore = 0;
  const reasons = [];

  const { subject, body, from } = email;

  const subjectNorm = normalizeText(subject);
  const bodyNorm = normalizeText(body);
  const contentNorm = subjectNorm + " " + bodyNorm;


  // 1. Mots d'urgence (some)
  if (
    phishingRules.urgencyKeywords.some(
      (word) => contentNorm.includes(word)
    )
  ) {
    suspicionScore += 20;
    reasons.push("Urgence suspecte détectée");
  }
  

  // 2. Domaines suspects (filter)
  const badDomains = phishingRules.suspiciousDomains.filter((domain) =>
    from.includes(domain)
  );
  suspicionScore += badDomains.length * 10;
  if (badDomains.length) {
    reasons.push(`Domaines suspects détectés : ${badDomains.join(", ")}`);
  }

  const flags = phishingRules.redFlags.filter((flag) =>
    contentNorm.includes(flag)
  );
  suspicionScore += flags.length * 20;
  if (flags.length) {
    reasons.push(`Signaux rouges trouvés : ${flags.slice(0, 3).join(", ")}`);
  }

  // 4. Expéditeur légitime ou non (some)
  const senderDomain = from.split("@")[1]?.toLowerCase() || "";
  const isLegitimate = phishingRules.legitimateSenders.some(
    (legit) => senderDomain === legit || senderDomain.endsWith(`.${legit}`)
  );

  if (!isLegitimate) {
    suspicionScore += 10;
    reasons.push("Expéditeur non reconnu comme légitime");
  }

  const score = Math.min(suspicionScore, 100);
  const level =
    score < 30 ? "faible" :
    score < 70 ? "moyen" :
    "élevé";

  return {
    score,
    level,
    reasons
  };
}

// --- Intégration DOM ---

function testPhishing() {
  const from = document.getElementById("email-from").value;
  const subject = document.getElementById("email-subject").value;
  const body = document.getElementById("email-body").value;

  const email = { from, subject, body };
  const result = analyzeEmail(email);

  const container = document.getElementById("phishing-result");

  container.innerHTML = `
    <p><strong>Score de suspicion :</strong> ${result.score}/100 (${result.level})</p>
    ${
      result.reasons.length
        ? `<ul>${result.reasons.map((r) => `<li>${r}</li>`).join("")}</ul>`
        : `<p>Aucun signe de phishing détecté.</p>`
    }
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("analyze-email-btn");
  if (btn) {
    btn.addEventListener("click", testPhishing);
  }
});
