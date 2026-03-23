// Données globales utilisées par tous les modules pour le rapport
const cyberReportData = {
    lastPasswordAnalysis: null,   // { score, entropy, strength, date }
    phishingStats: {              // { totalAnalyzed, highRiskCount }
      totalAnalyzed: 0,
      highRiskCount: 0
    },
    quizStats: null,              // { lastScore, bestScore, attempts } – à remplir plus tard
    lastUpdated: null
  };
  
  // --- Fonctions utilitaires pour mettre à jour les données ---
  
  // À appeler depuis ton module mot de passe quand tu obtiens un résultat
  // result attendu : { score, strength, entropy, ... }
  function updatePasswordReport(result) {
    cyberReportData.lastPasswordAnalysis = {
      score: result.score,
      strength: result.strength,
      entropy: result.entropy,
      date: new Date().toISOString()
    };
    cyberReportData.lastUpdated = new Date().toISOString();
  }
  
  // À appeler depuis ton module phishing (testPhishing) après analyzeEmail
  // result attendu : { score, level, reasons }
  function updatePhishingReport(result) {
    cyberReportData.phishingStats.totalAnalyzed += 1;
    if (result.level === "élevé") {
      cyberReportData.phishingStats.highRiskCount += 1;
    }
    cyberReportData.lastUpdated = new Date().toISOString();
  }
  
  // À appeler plus tard depuis le quiz
  // stats exemple : { lastScore: 70, bestScore: 90, attempts: 4 }
  function updateQuizReport(stats) {
    cyberReportData.quizStats = {
      lastScore: stats.lastScore,
      bestScore: stats.bestScore,
      attempts: stats.attempts,
      date: new Date().toISOString()
    };
    cyberReportData.lastUpdated = new Date().toISOString();
  }
  
  // --- Génération du texte de rapport lisible ---
  
  function buildReportText() {
    const data = cyberReportData;
  
    // Mot de passe
    let passwordPart = "Aucun mot de passe analysé pour l'instant.";
    if (data.lastPasswordAnalysis) {
      const p = data.lastPasswordAnalysis;
      passwordPart =
        `Dernier mot de passe testé : score ${p.score}/100 (${p.strength}), ` +
        `entropie ${p.entropy} bits.\n` +
        `Analyse réalisée le ${new Date(p.date).toLocaleString("fr-FR")}.`;
    }
  
    // Phishing
    let phishingPart = "Aucun e-mail analysé pour l'instant.";
    if (data.phishingStats.totalAnalyzed > 0) {
      const total = data.phishingStats.totalAnalyzed;
      const high = data.phishingStats.highRiskCount;
      const rate = Math.round((high / total) * 100);
      phishingPart =
        `E‑mails analysés : ${total}.\n` +
        `Phishing fortement suspect : ${high} (${rate} %).`;
    }
  
    // Quiz (optionnel pour l'instant)
    let quizPart = "Aucun quiz complété pour l'instant.";
    if (data.quizStats) {
      const q = data.quizStats;
      quizPart =
        `Dernier score de quiz : ${q.lastScore}/100.\n` +
        `Meilleur score : ${q.bestScore}/100 en ${q.attempts} tentatives.`;
    }
  
    const lastUpdatedText = data.lastUpdated
      ? new Date(data.lastUpdated).toLocaleString("fr-FR")
      : "n/a";
  
    const reportText = `
  CyberShield – Rapport de sécurité
  
  Résumé global
  Dernière mise à jour : ${lastUpdatedText}
  
  === Module mot de passe ===
  ${passwordPart}
  
  === Détecteur de phishing ===
  ${phishingPart}
  
  === Quiz de sensibilisation ===
  ${quizPart}
  `.trim();
  
    return reportText;
  }
  
  // --- Affichage dans un modal (HTML) ---
  
  function openReportModal() {
    const modal = document.getElementById("report-modal");
    const contentEl = document.getElementById("report-content");
    if (!modal || !contentEl) return;
  
    const text = buildReportText();
    contentEl.textContent = text;
    modal.classList.add("open");
  }
  
  function closeReportModal() {
    const modal = document.getElementById("report-modal");
    if (!modal) return;
    modal.classList.remove("open");
  }
  
  // --- Export JSON ---
  
  function exportReportJSON() {
    const blob = new Blob(
      [JSON.stringify(cyberReportData, null, 2)],
      { type: "application/json" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cybershield-report.json";
    a.click();
    URL.revokeObjectURL(url);
  }
  
  // --- Impression (vue imprimable simple) ---
  
  function printReport() {
    const text = buildReportText();
    const printWindow = window.open("", "_blank", "width=800,height=600");
    if (!printWindow) return;
  
    printWindow.document.write(`
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Rapport CyberShield</title>
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
              padding: 20px;
              line-height: 1.6;
            }
            pre {
              white-space: pre-wrap;
              font-family: "JetBrains Mono", "Fira Code", Consolas, monospace;
            }
            h1 {
              font-size: 1.6rem;
              margin-bottom: 1rem;
            }
          </style>
        </head>
        <body>
          <h1>CyberShield – Rapport de sécurité</h1>
          <pre>${text.replace(/</g, "&lt;")}</pre>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  }
  
  // --- Wiring boutons une fois le DOM chargé ---
  
  document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("open-report-btn");
    const closeBtn = document.getElementById("close-report-btn");
    const exportBtn = document.getElementById("export-report-btn");
    const printBtn = document.getElementById("print-report-btn");
  
    if (openBtn) openBtn.addEventListener("click", openReportModal);
    if (closeBtn) closeBtn.addEventListener("click", closeReportModal);
    if (exportBtn) exportBtn.addEventListener("click", exportReportJSON);
    if (printBtn) printBtn.addEventListener("click", printReport);
  });
  