class CyberSecurityDashboard {
    constructor() {
        this.newsData = [];
        this.filteredNews = [];
        this.apiKey = 'demo-key'; // Clé de démonstration pour NewsAPI
        this.initEventListeners();
        this.loadNews();
    }

    initEventListeners() {
        const categoryFilter = document.getElementById('category-filter');
        const refreshBtn = document.getElementById('refresh-btn');

        if (categoryFilter) {
            categoryFilter.addEventListener('change', () => this.filterNews());
        }

        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => this.loadNews());
        }
    }

    async loadNews() {
        const loadingElement = document.getElementById('loading');
        const newsContainer = document.getElementById('news-container');
        const errorMessage = document.getElementById('error-message');

        try {
            loadingElement.style.display = 'block';
            newsContainer.style.display = 'none';
            errorMessage.style.display = 'none';

            // Simulation d'appel API (remplacer par vrai appel API)
            await this.simulateAPICall();
            
            this.filteredNews = [...this.newsData];
            this.displayNews();
            this.calculateAlertLevel();
            
        } catch (error) {
            console.error('Erreur lors du chargement des actualités:', error);
            this.showError('Impossible de charger les actualités. Veuillez réessayer plus tard.');
        } finally {
            loadingElement.style.display = 'none';
        }
    }

    async simulateAPICall() {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Données de démonstration sur la cybersécurité
        this.newsData = [
            {
                title: "Nouvelle vulnérabilité critique découverte dans Apache Struts",
                source: "CVE Database",
                date: new Date().toISOString(),
                summary: "Une vulnérabilité de type RCE a été identifiée permettant une exécution de code à distance.",
                category: "vulnerability",
                severity: "critical"
            },
            {
                title: "Ransomware LockBit 3.0 cible les entreprises françaises",
                source: "ANSSI",
                date: new Date(Date.now() - 3600000).toISOString(),
                summary: "Une vague d'attaques ransomware touche le secteur santé en France.",
                category: "ransomware",
                severity: "high"
            },
            {
                title: "Campagne de phishing massive contre les banques européennes",
                source: "CSIRT",
                date: new Date(Date.now() - 7200000).toISOString(),
                summary: "Des e-mails frauduleux imitant des services bancaires ont été détectés.",
                category: "phishing",
                severity: "medium"
            },
            {
                title: "Mise à jour de sécurité urgente pour Windows 11",
                source: "Microsoft",
                date: new Date(Date.now() - 10800000).toISOString(),
                summary: "Correctifs pour plusieurs failles zero-day exploitées activement.",
                category: "vulnerability",
                severity: "high"
            },
            {
                title: "Fuite de données chez un fournisseur de cloud majeur",
                source: "DataBreaches.net",
                date: new Date(Date.now() - 14400000).toISOString(),
                summary: "Plusieurs millions d'enregistrements clients exposés suite à une erreur de configuration.",
                category: "data-breach",
                severity: "high"
            },
            {
                title: "Nouveau malware bancaire détecté sur Android",
                source: "Kaspersky",
                date: new Date(Date.now() - 18000000).toISOString(),
                summary: "Un trojan vole les identifiants bancaires via des applications légitimes modifiées.",
                category: "malware",
                severity: "medium"
            },
            {
                title: "Alerte : Faille dans les routeurs Cisco enterprise",
                source: "Cisco Security",
                date: new Date(Date.now() - 21600000).toISOString(),
                summary: "Vulnérabilité permettant un déni de service sur les équipements réseau.",
                category: "vulnerability",
                severity: "medium"
            },
            {
                title: "Opération de démantèlement d'un botnet international",
                source: "Europol",
                date: new Date(Date.now() - 25200000).toISOString(),
                summary: "Coopération internationale aboutit à l'arrestation des administrateurs d'Emotet.",
                category: "threat",
                severity: "low"
            },
            {
                title: "Attaque DDoS record contre des services gouvernementaux",
                source: "CERT",
                date: new Date(Date.now() - 28800000).toISOString(),
                summary: "Plusieurs sites ministériels indisponibles suite à une attaque massive.",
                category: "threat",
                severity: "medium"
            },
            {
                title: "Nouvelle technique d'attaque par supply chain découverte",
                source: "Mandiant",
                date: new Date(Date.now() - 32400000).toISOString(),
                summary: "Des compromissions via des mises à jour logicielles légitimes ont été identifiées.",
                category: "threat",
                severity: "high"
            }
        ];
    }

    async callNewsAPI() {
        // Implémentation réelle avec NewsAPI.org (nécessite clé API)
        const url = `https://newsapi.org/v2/everything?q=cybersecurity&language=fr&sortBy=publishedAt&pageSize=10&apiKey=${this.apiKey}`;
        
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erreur API');
        }
        
        const data = await response.json();
        
        return data.articles.map(article => ({
            title: article.title,
            source: article.source.name,
            date: article.publishedAt,
            summary: article.description || 'Aucun résumé disponible',
            category: this.categorizeArticle(article.title, article.description),
            severity: this.assessSeverity(article.title, article.description)
        }));
    }

    categorizeArticle(title, description) {
        const content = (title + ' ' + description).toLowerCase();
        
        if (content.includes('ransomware') || content.includes('ransom')) return 'ransomware';
        if (content.includes('vulnerability') || content.includes('vulnérabilité') || content.includes('cve')) return 'vulnerability';
        if (content.includes('phishing') || content.includes('hameçonnage')) return 'phishing';
        if (content.includes('malware') || content.includes('virus') || content.includes('trojan')) return 'malware';
        if (content.includes('breach') || content.includes('fuite') || content.includes('data')) return 'data-breach';
        if (content.includes('attack') || content.includes('attaque') || content.includes('threat')) return 'threat';
        
        return 'other';
    }

    assessSeverity(title, description) {
        const content = (title + ' ' + description).toLowerCase();
        
        if (content.includes('critical') || content.includes('critique') || content.includes('zero-day')) return 'critical';
        if (content.includes('high') || content.includes('élevé') || content.includes('urgent')) return 'high';
        if (content.includes('medium') || content.includes('moyen')) return 'medium';
        
        return 'low';
    }

    filterNews() {
        const categoryFilter = document.getElementById('category-filter');
        const selectedCategory = categoryFilter.value;
        
        if (selectedCategory === 'all') {
            this.filteredNews = [...this.newsData];
        } else {
            this.filteredNews = this.newsData.filter(article => article.category === selectedCategory);
        }
        
        this.displayNews();
    }

    displayNews() {
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = '';
        
        this.filteredNews.slice(0, 10).forEach(article => {
            const articleElement = this.createArticleElement(article);
            newsContainer.appendChild(articleElement);
        });
        
        newsContainer.style.display = 'grid';
    }

    createArticleElement(article) {
        const articleDiv = document.createElement('div');
        articleDiv.className = `news-article ${article.severity}`;
        
        const date = new Date(article.date);
        const formattedDate = date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        articleDiv.innerHTML = `
            <div class="article-header">
                <span class="article-category">${this.getCategoryLabel(article.category)}</span>
                <span class="article-severity ${article.severity}">${this.getSeverityLabel(article.severity)}</span>
            </div>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-summary">${article.summary}</p>
            <div class="article-footer">
                <span class="article-source">${article.source}</span>
                <span class="article-date">${formattedDate}</span>
            </div>
        `;
        
        return articleDiv;
    }

    getCategoryLabel(category) {
        const labels = {
            'malware': 'Malware',
            'vulnerability': 'Vulnérabilité',
            'data-breach': 'Fuite de données',
            'ransomware': 'Ransomware',
            'phishing': 'Phishing',
            'threat': 'Menace',
            'other': 'Autre'
        };
        return labels[category] || 'Autre';
    }

    getSeverityLabel(severity) {
        const labels = {
            'critical': 'Critique',
            'high': 'Élevé',
            'medium': 'Moyen',
            'low': 'Faible'
        };
        return labels[severity] || 'Faible';
    }

    calculateAlertLevel() {
        const criticalCount = this.newsData.filter(article => article.severity === 'critical').length;
        const highCount = this.newsData.filter(article => article.severity === 'high').length;
        
        let alertLevel, alertDescription, alertColor;
        
        if (criticalCount >= 2 || highCount >= 5) {
            alertLevel = 'ÉLEVÉ';
            alertDescription = 'Plusieurs menaces critiques détectées. Vigilance renforcée requise.';
            alertColor = '#e74c3c';
        } else if (criticalCount >= 1 || highCount >= 3) {
            alertLevel = 'MOYEN';
            alertDescription = 'Menaces significatives détectées. Surveillance recommandée.';
            alertColor = '#f39c12';
        } else {
            alertLevel = 'FAIBLE';
            alertDescription = 'Activité cybercriminelle normale. Pas d\'alerte particulière.';
            alertColor = '#27ae60';
        }
        
        this.updateAlertDisplay(alertLevel, alertDescription, alertColor);
    }

    updateAlertDisplay(level, description, color) {
        const alertStatus = document.getElementById('alert-status');
        const alertDescription = document.getElementById('alert-description');
        const alertBar = document.getElementById('alert-bar');
        
        alertStatus.textContent = level;
        alertStatus.className = `alert-status ${level.toLowerCase()}`;
        alertDescription.textContent = description;
        alertBar.style.backgroundColor = color;
    }

    showError(message) {
        const errorMessage = document.getElementById('error-message');
        const errorText = document.getElementById('error-text');
        
        errorText.textContent = message;
        errorMessage.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CyberSecurityDashboard();
});