const questions = [
    // ---------- EASY (1–8) ----------
    {
        question: "Tu reçois un email qui semble venir de la DRH avec une pièce jointe “nouvelle_paye.pdf”, mais tu ne t’y attendais pas. Que fais-tu en premier ?",
        answers: [
            "Ouvrir la pièce jointe pour voir de quoi il s’agit",
            "Transférer l’email à tous tes collègues",
            "Répondre en envoyant tes informations personnelles",
            "Vérifier l’adresse de l’expéditeur et demander confirmation par un autre canal officiel",
        ],
        correctIndex: 3,
        difficulty: "easy",
        explanation: "Quand un email inattendu contient une pièce jointe ou une demande sensible, il faut d’abord vérifier sa légitimité par un canal officiel (téléphone interne, adresse connue) au lieu d’ouvrir directement la pièce jointe."
    },
    {
        question: "Quel est le comportement le plus sûr pour gérer tes mots de passe professionnels ?",
        answers: [
            "Utiliser le même mot de passe partout pour ne pas l’oublier",
            "Noter tes mots de passe sur un post-it dans ton tiroir",
            "Utiliser un gestionnaire de mots de passe et des mots de passe uniques",
            "Donner ton mot de passe à ton manager “au cas où”",
        ],
        correctIndex: 2,
        difficulty: "easy",
        explanation: "Des mots de passe uniques et complexes, stockés dans un gestionnaire, réduisent fortement l’impact d’un vol ou d’une fuite et évitent de les laisser traîner sur des supports physiques."
    },
    {
        question: "Tu dois t’absenter de ton poste quelques minutes dans un open space. Que dois-tu faire ?",
        answers: [
            "Rien, tu reviens vite",
            "Verrouiller ta session (Windows+L / Ctrl+L)",
            "Demander à un collègue de surveiller ton écran",
            "Baisser la luminosité de l’écran",
        ],
        correctIndex: 1,
        difficulty: "easy",
        explanation: "Verrouiller ta session évite qu’une personne non autorisée utilise ton poste pour lire ou modifier des données, ou agir en ton nom."
    },
    {
        question: "Quel est l’objectif principal d’une politique de mots de passe imposée par l’entreprise (longueur, complexité, renouvellement) ?",
        answers: [
            "Embeter les employés",
            "Vendre plus de logiciels de sécurité",
            "Accélérer la connexion au réseau",
            "Améliorer la sécurité des comptes et limiter les accès non autorisés",
        ],
        correctIndex: 3,
        difficulty: "easy",
        explanation: "Ces règles rendent les mots de passe plus difficiles à deviner ou à casser automatiquement, et réduisent donc les risques d’accès non autorisé aux systèmes."
    },
    {
        question: "Tu vois une personne inconnue entrer dans les locaux derrière toi sans badger. Que dois-tu faire ?",
        answers: [
            "Laisser passer, ce n’est pas ton problème",
            "Lui tenir la porte pour être poli",
            "Lui demander poliment de badger ou de passer par l’accueil",
            "Lui prêter ton badge",
        ],
        correctIndex: 2,
        difficulty: "easy",
        explanation: "Le contrôle d’accès physique est essentiel : chaque personne doit badger ou passer par l’accueil pour éviter qu’un individu non autorisé entre dans les locaux."
    },
    {
        question: "Travailler sur des documents confidentiels sur un écran visible depuis un espace public (train, café) présente surtout quel risque ?",
        answers: [
            "Avoir mal aux yeux",
            "Se faire voler son ordinateur immédiatement",
            "Qu’une personne regarde ton écran et récupère des informations sensibles",
            "Aucune, si tu es connecté au Wi-Fi",
        ],
        correctIndex: 2,
        difficulty: "easy",
        explanation: "Le “shoulder surfing” consiste à regarder l’écran d’un autre : des informations sensibles peuvent être récupérées simplement en observant ton poste."
    },
    {
        question: "Quelle est la meilleure option pour envoyer un fichier contenant des données sensibles à un collègue ?",
        answers: [
            "Via les outils de partage sécurisés fournis par l’entreprise",
            "Via ta messagerie personnelle",
            "Via une clé USB prêtée par quelqu’un que tu connais peu",
            "En le publiant sur un réseau social privé",
        ],
        correctIndex: 0,
        difficulty: "easy",
        explanation: "Les outils de partage fournis par l’entreprise sont configurés pour sécuriser les échanges (droits d’accès, chiffrement, journalisation), contrairement aux solutions personnelles."
    },
    {
        question: "Que dois-tu faire si tu penses avoir cliqué sur un lien malveillant au travail ?",
        answers: [
            "Éteindre ton écran",
            "Continuer à travailler normalement",
            "Supprimer l’historique du navigateur",
            "Déconnecter ton poste du réseau si possible et prévenir immédiatement le support/IT",
        ],
        correctIndex: 3,
        difficulty: "easy",
        explanation: "Isoler ton poste du réseau et prévenir rapidement l’IT permet de limiter la propagation éventuelle d’un malware et d’analyser la situation."
    },

    // ---------- MEDIUM (9–17) ----------
    {
        question: "Tu reçois un SMS “livraison en attente” sur ton téléphone pro avec un lien. Tu n’attends pas de colis. Meilleure réaction ?",
        answers: [
            "Ne pas cliquer, supprimer le message ou le signaler selon la procédure interne",
            "Cliquer pour vérifier ce que c'est",
            "Transférer le SMS à des collègues pour demander leur avis",
            "Répondre en donnant ton adresse complète",
        ],
        correctIndex: 0,
        difficulty: "medium",
        explanation: "Les SMS de livraison sont un vecteur courant de smishing (phishing par SMS). Ne pas cliquer et le signaler évite d’ouvrir un faux site ou de télécharger un contenu malveillant."
    },
    {
        question: "Pourquoi est-il dangereux de partager des captures d’écran de ton outil métier sur les réseaux sociaux ?",
        answers: [
            "Ça peut faire planter l’outil",
            "Tu risques de montrer des données internes ou personnelles sans t’en rendre compte",
            "Les collègues seront jaloux",
            "Cela consomme trop de bande passante",
        ],
        correctIndex: 1,
        difficulty: "medium",
        explanation: "Une capture peut afficher des noms, des montants, des identifiants ou des informations stratégiques qui ne doivent pas sortir du cadre professionnel."
    },
    {
        question: "Tu utilises parfois ton ordinateur perso pour consulter ton mail pro. Quelle affirmation est la plus correcte ?",
        answers: [
            "C’est toujours interdit",
            "C’est sans risque, car le mail est chiffré",
            "C’est recommandé pour aller plus vite",
            "C’est possible uniquement si ton appareil perso est à jour et sécurisé, selon la politique de l’entreprise",
        ],
        correctIndex: 3,
        difficulty: "medium",
        explanation: "Un appareil personnel non sécurisé peut être compromis et servir de point d’entrée vers les systèmes de l’entreprise, d’où l’importance de respecter la politique interne."
    },
    {
        question: "Tu reçois un appel d’une personne se présentant comme “support informatique” qui te demande ton mot de passe pour “tester une mise à jour”. Que dois-tu faire ?",
        answers: [
            "Lui donner ton mot de passe, c’est le support",
            "Lui donner un mot de passe approximatif",
            "Refuser poliment et signaler l’appel à l’équipe sécurité / IT",
            "Lui demander de rappeler plus tard",
        ],
        correctIndex: 2,
        difficulty: "medium",
        explanation: "Un vrai support ne demande jamais ton mot de passe. C’est typiquement une tentative d’ingénierie sociale pour prendre le contrôle de ton compte."
    },
    {
        question: "Pourquoi les mises à jour automatiques des logiciels et du système sont-elles importantes sur ton poste de travail ?",
        answers: [
            "Pour ajouter de nouvelles fonctionnalités amusantes",
            "Pour perdre les membres de l'entreprise qui ne comprennent pas les changements",
            "Pour corriger des failles de sécurité et réduire les risques d’attaque",
            "Pour réduire la consommation d’énergie",
        ],
        correctIndex: 2,
        difficulty: "medium",
        explanation: "Les mises à jour contiennent souvent des correctifs pour des vulnérabilités déjà connues des attaquants ; ne pas les appliquer laisse la porte ouverte."
    },
    {
        question: "Tu dois emporter des documents sensibles en déplacement. Quel comportement est le plus approprié ?",
        answers: [
            "Les envoyer sur ta boîte mail personnelle pour y accéder partout",
            "Les copier sur une clé USB",
            "Les imprimer",
            "Utiliser les solutions sécurisées de stockage chiffré fournies par l’entreprise",
        ],
        correctIndex: 3,
        difficulty: "medium",
        explanation: "Les solutions de stockage chiffré d’entreprise sont prévues pour limiter les risques en cas de perte ou de vol du support ou de l’appareil."
    },
    {
        question: "Quel est le bon réflexe si tu observes sur ton PC un comportement inhabituel (fenêtres qui s’ouvrent seules, lenteurs soudaines, antivirus désactivé) ?",
        answers: [
            "Informer immédiatement l’IT / sécurité en décrivant les symptômes",
            "Redémarrer l'ordinateur et espérer que ça passe",
            "Installer un antivirus gratuit trouvé sur Internet",
            "Supprimer quelques fichiers au hasard",
        ],
        correctIndex: 0,
        difficulty: "medium",
        explanation: "Les équipes IT / sécurité doivent être alertées pour analyser et isoler la machine si nécessaire, plutôt que d’appliquer des solutions improvisées."
    },
    {
        question: "Quelle phrase décrit le mieux ta responsabilité en cybersécurité en tant que collaborateur ?",
        answers: [
            "La cybersécurité est uniquement l’affaire de l’IT",
            "Je dois rester vigilant, car mes actions ont un impact direct sur la sécurité de l’entreprise",
            "Je n’ai aucune responsabilité, je ne suis pas informaticien",
            "Je ne suis responsable que de mes données personnelles",
        ],
        correctIndex: 1,
        difficulty: "medium",
        explanation: "Beaucoup d’incidents viennent de gestes du quotidien (clic, partage, mots de passe) : chacun a une part de responsabilité, pas seulement l’IT."
    },
    {
        question: "Tu reçois une invitation à une visioconférence avec un lien d’un outil inconnu, envoyée depuis une adresse externe douteuse. Que fais-tu ?",
        answers: [
            "Cliquer pour voir ce que c’est",
            "Transférer l’invitation à toute l’équipe",
            "Accepter la réunion mais couper ta caméra",
            "Vérifier auprès de l’organisateur supposé par un canal sûr",
        ],
        correctIndex: 3,
        difficulty: "medium",
        explanation: "Vérifier la légitimité de l’invitation via un canal connu permet d’éviter les liens vers de faux sites ou des téléchargements malveillants."
    },

    // ---------- HARD (18–25) ----------
    {
        question: "Une collègue te demande de lui prêter ton compte (identifiant/mot de passe) juste pour “terminer un dossier avant la deadline”. Quel est le risque principal si tu acceptes ?",
        answers: [
            "Elle pourrait effacer tous tes emails",
            "Tu violes les politiques internes et tu seras tenu responsable de toute action faite avec ton compte",
            "Tu ne pourras plus te reconnecter ensuite",
            "Le système va automatiquement bloquer ton compte",
        ],
        correctIndex: 1,
        difficulty: "hard",
        explanation: "Les comptes sont individuels : tout ce qui est fait avec ton identifiant est tracé à ton nom, même si quelqu’un d’autre l’utilise."
    },
    {
        question: "Tu dois utiliser un Wi-Fi public dans un hôtel pour te connecter à des outils de l’entreprise. Quelle combinaison est la plus appropriée ?",
        answers: [
            "Utiliser ton VPN et éviter les actions très sensibles si possible",
            "Se connecter directement",
            "Désactiver le pare-feu pour que ça fonctionne mieux",
            "Utiliser un réseau Wi-Fi dont le nom ressemble à celui de l’entreprise",
        ],
        correctIndex: 0,
        difficulty: "hard",
        explanation: "Le VPN d’entreprise chiffre ton trafic et réduit les risques d’interception sur un réseau Wi‑Fi public potentiellement compromis."
    },
    {
        question: "L’entreprise a mis en place la double authentification (MFA) pour certains outils. Pourquoi est-il risqué de valider systématiquement les notifications d’authentification sur ton téléphone sans vérifier la connexion associée ?",
        answers: [
            "Tu risques de manquer des appels",
            "Cela ralentit le réseau",
            "Tu peux valider une requête non faite par toi",
            "Tu seras déconnecté plus souvent",
        ],
        correctIndex: 2,
        difficulty: "hard",
        explanation: "Si tu acceptes chaque notification sans vérifier, tu peux sans le vouloir approuver une connexion lancée par un attaquant qui connaît déjà ton mot de passe."
    },
    {
        question: "Tu remarques que des fichiers partagés dans un espace collaboratif (SharePoint, Drive, etc.) sont accessibles par des personnes qui n’en ont pas besoin. Quel est le meilleur comportement ?",
        answers: [
            "Ne rien dire, ce n’est pas grave",
            "Signaler le problème au responsable du projet pour ajuster les droits",
            "Télécharger les documents pour les sauvegarder avant qu’ils ne soient supprimés",
            "Supprimer toi-même les fichiers",
        ],
        correctIndex: 1,
        difficulty: "hard",
        explanation: "Le principe du moindre privilège impose que seuls les utilisateurs qui en ont besoin aient accès aux fichiers ; il faut corriger les droits plutôt qu’ignorer le problème."
    },
    {
        question: "Un prestataire externe te demande par email un export de données clients “pour un audit”, mais tu n’as jamais entendu parler de cet audit. Meilleure réaction ?",
        answers: [
            "Envoyer les données si le prestataire semble sérieux",
            "Répondre en demandant quelles données ils préfèrent",
            "Envoyer un fichier de test avec quelques vrais clients",
            "Vérifier auprès de ton manager ou de la personne responsable du contrat avant tout partage de données",
        ],
        correctIndex: 3,
        difficulty: "hard",
        explanation: "Toute demande de données doit passer par les responsables internes (manager, juridique, DPO…) pour vérifier la légitimité de l’audit et le cadre contractuel."
    },
    {
        question: "Tu constates que ton collègue laisse régulièrement sa session ouverte sur un poste commun avec des applications sensibles affichées. Que fais-tu ?",
        answers: [
            "Profiter pour jeter un œil à ses dossiers",
            "Ignorer, chacun fait comme il veut",
            "Verrouiller sa session si possible et lui rappeler la bonne pratique, ou en parler à ton responsable si cela persiste",
            "Changer son mot de passe pour lui faire une blague",
        ],
        correctIndex: 2,
        difficulty: "hard",
        explanation: "Rappeler la bonne pratique (et si besoin le signaler) aide à réduire le risque qu’une personne malveillante exploite cette situation."
    },
    {
        question: "Tu as cliqué sur un lien de phishing et saisi tes identifiants, puis tu réalises l’erreur. Quelle est la meilleure séquence d’actions ?",
        answers: [
            "Fermer la fenêtre et espérer que rien ne se passe",
            "Prévenir immédiatement l’IT/sécurité, changer ton mot de passe et suivre leurs instructions",
            "Changer juste ton mot de passe dans quelques jours",
            "Envoyer un email à tous pour dire “attention au phishing” sans rien faire d’autre",
        ],
        correctIndex: 1,
        difficulty: "hard",
        explanation: "Prévenir rapidement et changer ton mot de passe permet aux équipes de couper les accès, surveiller les connexions suspectes et limiter l’impact de la fuite."
    },
    {
        question: "Tu es souvent en déplacement et tu copies tes fichiers de travail sur une clé USB non chiffrée “pour plus de praticité”. Quel risque sous-estimé cela crée pour l’entreprise ?",
        answers: [
            "Ton poste sera plus lent",
            "La clé peut être perdue ou volée et exposer des données sensibles sans aucun contrôle",
            "Les fichiers ne seront plus lisibles",
            "La clé USB se déchargera rapidement",
        ],
        correctIndex: 1,
        difficulty: "hard",
        explanation: "Une clé non chiffrée perdue dans un train, un taxi ou un café est une fuite directe de données, difficile voire impossible à tracer ou à contrôler."
    },
];

// ===========
// CONFIG QUIZ
// ===========

const QUESTIONS_PER_GAME = 10;
const TIME_PER_QUESTION = 20;
const BASE_POINTS = 100;
const STREAK_BONUS_FACTOR = 1.5;
const LS_KEY_TOP5 = "cyber_quiz_top5";

let gameQuestions = [];
let currentIndex = 0;
let score = 0;
let streak = 0;
let timerInterval = null;
let timeLeft = TIME_PER_QUESTION;
let answersDisabled = false;
let sessionResults = [];

const difficultySelect = document.getElementById("difficultySelect");
const startBtn = document.getElementById("startBtn");
startBtn.addEventListener("click", () => {
    const diff = difficultySelect.value || null;
    startGame(diff);
});
const quizSection = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const timerEl = document.getElementById("timer");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const resultsEl = document.getElementById("results");

// ======================
// UTILITAIRES
// ======================
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function pickRandomQuestions(allQuestions, count) {
    const shuffled = shuffleArray(allQuestions);
    return shuffled.slice(0, count);
}

function startTimer(onTimeout) {
    clearInterval(timerInterval);
    timeLeft = TIME_PER_QUESTION;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            onTimeout();
        }
    }, 1000);
}

function updateTimerDisplay() {
    timerEl.textContent = `Temps restant : ${timeLeft}s`;
}

// ======================
// AFFICHAGE QUESTION
// ======================
function showQuestion() {
    answersDisabled = false;
    feedbackEl.innerHTML = "";
    nextBtn.disabled = true;

    const q = gameQuestions[currentIndex];
    questionEl.textContent = `${currentIndex + 1}/${gameQuestions.length} - ${q.question}`;

    answersEl.innerHTML = "";
    q.answers.forEach((answer, idx) => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.className = "answer-btn";
        btn.addEventListener("click", () => handleAnswer(idx));
        answersEl.appendChild(btn);
    });

    startTimer(() => handleAnswer(null, true));
}

// ======================
// GESTION RÉPONSE
// ======================
function handleAnswer(selectedIndex, isTimeout = false) {
    if (answersDisabled) return;
    answersDisabled = true;
    clearInterval(timerInterval);

    const q = gameQuestions[currentIndex];
    const buttons = Array.from(answersEl.querySelectorAll("button"));

    let isCorrect = selectedIndex === q.correctIndex;

    buttons.forEach((btn, idx) => {
        if (idx === q.correctIndex) {
            btn.style.backgroundColor = "#2ecc71";
        } else if (idx === selectedIndex && idx !== q.correctIndex) {
            btn.style.backgroundColor = "#e74c3c";
        }
        btn.disabled = true;
    });

    if (isCorrect) {
        streak++;          
        score += 1;        
    } else {
        streak = 0;
    }

    q.wasCorrect = isCorrect;

    const explanation = q.explanation || "Ce choix reflète la bonne pratique recommandée dans les politiques de sécurité de l’entreprise.";
    const baseMsg = isCorrect
        ? "Bonne réponse !"
        : (isTimeout ? "Temps écoulé." : "Mauvaise réponse.");

    feedbackEl.innerHTML = `
        <p>${baseMsg}</p>
        <p>La bonne réponse était "${q.answers[q.correctIndex]}"</p>
        <p>${explanation}</p>
        <p>Score actuel : ${score} / ${gameQuestions.length}</p>
        <p>Streak : ${streak}</p>
    `;

    nextBtn.disabled = false;
}

// ======================
// FIN DE PARTIE
// ======================
function computeCategoryStats() {
    const stats = {};
    gameQuestions.forEach(q => {
        if (!q.category) return;
        if (!stats[q.category]) {
            stats[q.category] = { total: 0, wrong: 0 };
        }
        stats[q.category].total++;
        if (q.wasCorrect === false) {
            stats[q.category].wrong++;
        }
    });
    return stats;
}

function buildRecommendations(categoryStats) {
    if (!categoryStats || Object.keys(categoryStats).length === 0) {
        return "<li>Poursuis les bonnes pratiques, tu es sur la bonne voie.</li>";
    }

    const items = [];
    for (const [cat, { wrong }] of Object.entries(categoryStats)) {
        if (wrong === 0) continue;
        let label;
        switch (cat) {
            case "phishing":
                label = "Renforcer la vigilance face aux emails, SMS et liens suspects (phishing).";
                break;
            case "password":
                label = "Revoir les bonnes pratiques de mots de passe et d’authentification (MFA).";
                break;
            case "wifi":
                label = "Se former sur l’usage sécurisé du Wi-Fi public et du VPN.";
                break;
            case "devices":
                label = "Améliorer la gestion sécurisée des postes, écrans et déplacements.";
                break;
            case "data":
                label = "Revoir les règles de protection et de partage des données sensibles.";
                break;
            case "incident":
                label = "Mieux connaître la procédure de réaction en cas d’incident de sécurité.";
                break;
            case "physical":
                label = "Renforcer les réflexes de sécurité physique (badge, visiteurs, portes).";
                break;
            case "culture":
                label = "Approfondir la culture cybersécurité et les responsabilités de chacun.";
                break;
            default:
                label = `Approfondir les bonnes pratiques sur le thème : ${cat}.`;
        }
        items.push(`<li>${label}</li>`);
    }

    if (items.length === 0) {
        return "<li>Poursuis les bonnes pratiques, tu es sur la bonne voie.</li>";
    }
    return items.join("");
}

// ======================
// LOCALSTORAGE TOP 5
// ======================
function getTop5ScoresFromStorage() {
    const raw = localStorage.getItem(LS_KEY_TOP5);
    if (!raw) return [];
    try {
        const arr = JSON.parse(raw);
        return Array.isArray(arr) ? arr : [];
    } catch {
        return [];
    }
}

function saveTop5Scores(scores) {
    localStorage.setItem(LS_KEY_TOP5, JSON.stringify(scores));
}

function updateTop5(currentTop5, newScore) {
    const all = [...currentTop5, newScore].sort((a, b) => b - a);
    return all.slice(0, 5);
}

function endGame() {
    questionEl.textContent = "";
    answersEl.innerHTML = "";
    timerEl.textContent = "";
    feedbackEl.textContent = "";
    nextBtn.style.display = "none";
    quizSection.style.display = "none";

    sessionResults.push(score);
    const sortedSession = [...sessionResults].sort((a, b) => b - a);
    const rank = sortedSession.indexOf(score) + 1;

    const categoryStats = computeCategoryStats();
    const recommendations = buildRecommendations(categoryStats);

    const top5 = getTop5ScoresFromStorage();
    const updatedTop5 = updateTop5(top5, score);
    saveTop5Scores(updatedTop5);

    const top5Html = updatedTop5
        .map(s => `<li>${s} pts</li>`)
        .join("");

    resultsEl.innerHTML = `
        <h2>Résultats</h2>
        <p>Score final : <strong>${score}</strong>/10</p>
        <h3>Top 5 des scores (ce navigateur)</h3>
        <ol>${top5Html}</ol>
        <h3>Recommandations personnalisées</h3>
        <ul>${recommendations}</ul>
    `;
    resultsEl.style.display = "block";
}

// ======================
// DÉROULEMENT
// ======================
nextBtn.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= gameQuestions.length) {
        endGame();
    } else {
        showQuestion();
    }
});

function startGame(selectedDifficulty = null) {
    score = 0;
    streak = 0;
    currentIndex = 0;
    sessionResults = [];
    nextBtn.style.display = "inline-block";
    resultsEl.style.display = "none";
    quizSection.style.display = "block";

    let pool = questions;
    if (selectedDifficulty) {
        pool = questions.filter(q => q.difficulty === selectedDifficulty);
    }

    gameQuestions = pickRandomQuestions(pool, QUESTIONS_PER_GAME);
    showQuestion();
}

startBtn.addEventListener("click", () => {
    const diff = difficultySelect.value || null;
    startGame(diff);
});