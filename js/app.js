function setText(el, value) {
  if (!el) return;
  el.textContent = value ?? "—";
}

function formatPercent(value) {
  if (typeof value !== "number" || Number.isNaN(value)) return "—";
  return `${Math.round(value)}%`;
}

function strengthToRobustness(strength) {
  if (strength === "rouge") return "Faible";
  if (strength === "orange") return "Moyen";
  if (strength === "vert") return "Fort";
  return "—";
}

function getNewsFromCache() {
  try {
    const raw = localStorage.getItem("cybershield_news");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function formatFRDate(isoDate) {
  try {
    const d = new Date(isoDate);
    return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit", year: "numeric" });
  } catch {
    return "—";
  }
}

function categoryLabel(category) {
  const labels = {
    malware: "Malware",
    vulnerability: "Vulnérabilité",
    "data-breach": "Fuite de données",
    ransomware: "Ransomware",
    phishing: "Phishing",
    threat: "Menace",
    other: "Autre",
  };
  return labels[category] || "Autre";
}

function severityColor(severity) {
  const s = String(severity || "").toLowerCase();
  if (s === "critical") return "critical";
  if (s === "high") return "high";
  if (s === "medium") return "medium";
  return "low";
}

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = Array.from(document.querySelectorAll(".tab-btn[data-tab]"));
  const panels = Array.from(document.querySelectorAll(".tab-panel[data-tab-panel]"));
  const navButtons = Array.from(document.querySelectorAll("[data-tab-nav]"));

  if (!tabButtons.length || !panels.length) return;

  let activeTab = "home";

  function renderHome() {
    const quizAverageEl = document.getElementById("home-quiz-average");
    const quizSubEl = document.getElementById("home-quiz-sub");

    const passwordRobustEl = document.getElementById("home-password-robustness");
    const passwordSubEl = document.getElementById("home-password-sub");

    const phishingRateEl = document.getElementById("home-phishing-rate");
    const phishingSubEl = document.getElementById("home-phishing-sub");

    const newsListEl = document.getElementById("home-news-list");
    const newsUpdatedEl = document.getElementById("home-news-updated");

    const state = typeof cyberReportData !== "undefined" ? cyberReportData : null;

    // Quiz (moyenne persistée)
    if (state?.quizStats && state.quizStats.attempts > 0 && typeof state.quizStats.totalScore === "number") {
      const avg = state.quizStats.totalScore / state.quizStats.attempts; // 0..100
      setText(quizAverageEl, `${Math.round(avg)}/100`);
      setText(quizSubEl, `Moyenne sur ${state.quizStats.attempts} tentative(s)`);
    } else {
      setText(quizAverageEl, "—");
      setText(quizSubEl, "Aucune tentative enregistrée");
    }

    // Mot de passe (robustesse dernière analyse)
    if (state?.lastPasswordAnalysis) {
      const s = state.lastPasswordAnalysis.strength;
      setText(passwordRobustEl, strengthToRobustness(s));
      setText(
        passwordSubEl,
        `Score: ${state.lastPasswordAnalysis.score}/100 • Entropie: ${state.lastPasswordAnalysis.entropy} bits`
      );
    } else {
      setText(passwordRobustEl, "—");
      setText(passwordSubEl, "Aucune analyse de mot de passe pour l'instant");
    }

    // Phishing (stats persistées)
    if (state?.phishingStats && state.phishingStats.totalAnalyzed > 0) {
      const total = state.phishingStats.totalAnalyzed;
      const high = state.phishingStats.highRiskCount;
      const rate = (high / total) * 100;
      setText(phishingRateEl, `${high}/${total} (${formatPercent(rate)})`);
      setText(phishingSubEl, "Phishing détecté (moyen + élevé)");
    } else {
      setText(phishingRateEl, "—");
      setText(phishingSubEl, "Aucun e-mail analysé pour l'instant");
    }

    // News (cache localStorage)
    const cachedNews = getNewsFromCache()
      .slice()
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    if (!newsListEl || !newsUpdatedEl) return;

    if (!cachedNews.length) {
      newsUpdatedEl.textContent = "Aucune actualité en cache";
      newsListEl.innerHTML = "<p class='home-empty'>—</p>";
      return;
    }

    const latest = cachedNews[0];
    newsUpdatedEl.textContent = `Dernière mise en cache : ${formatFRDate(latest.date)}`;

    const top = cachedNews.slice(0, 3);
    newsListEl.innerHTML = top
      .map((a) => {
        const sevClass = severityColor(a.severity);
        return `
          <div class="home-news-item">
            <div class="home-news-title">${a.title || "Sans titre"}</div>
            <div class="home-news-meta">
              <span class="home-news-cat">${categoryLabel(a.category)}</span>
              <span class="home-news-sev ${sevClass}">${a.severity || "low"}</span>
              <span class="home-news-date">${formatFRDate(a.date)}</span>
            </div>
          </div>
        `;
      })
      .join("");
  }

  function setActiveTab(tabId) {
    activeTab = tabId;

    tabButtons.forEach((btn) => {
      const isActive = btn.dataset.tab === tabId;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.dataset.tabPanel === tabId;
      panel.classList.toggle("active", isActive);
    });

    if (tabId === "home") renderHome();
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.dataset.tab;
      if (!tabId) return;
      setActiveTab(tabId);
      window.location.hash = tabId;
    });
  });

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.dataset.tabNav;
      if (!tabId) return;
      setActiveTab(tabId);
      window.location.hash = tabId;
    });
  });

  window.addEventListener("hashchange", () => {
    const tabId = window.location.hash.replace("#", "");
    if (!tabId) return;
    setActiveTab(tabId);
  });

  const initialTab = window.location.hash.replace("#", "") || "home";
  setActiveTab(initialTab);

  // Mise à jour live si modules mettent à jour l'état.
  window.addEventListener("cybershield:stateUpdated", () => {
    if (activeTab === "home") renderHome();
  });

  // Les news sont chargées par dashboard.js et stockées en cache localStorage.
  // On met a jour Home quand le cache change.
  window.addEventListener("cybershield:newsUpdated", () => {
    if (activeTab === "home") renderHome();
  });

  // Render initial (si cache déjà présent).
  renderHome();
});
