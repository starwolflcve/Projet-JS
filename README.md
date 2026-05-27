# CyberShield

CyberShield est une application web statique en JavaScript qui permet de tester ton niveau de sécurité numérique avec plusieurs modules : mot de passe, phishing, chiffrement, quiz et dashboard.

## Lancer l'application

### Option 1 — ouvrir directement
1. Ouvre ton explorateur de fichiers.
2. Va dans le dossier `Projet-JS/templates`.
3. Double-clique sur `index.html`.
4. Le navigateur ouvrira l'application.

### Option 2 — utiliser un serveur local (recommandé)
Cela évite les problèmes d'accès aux fichiers locaux pour certains navigateurs.

1. Ouvre un terminal.
2. Va dans le dossier du projet :
   ```bash
   cd /Users/quentinlacave/Documents/Projet-JS
   ```
3. Démarre un serveur local :
   ```bash
   python3 -m http.server 8000
   ```
4. Ouvre dans ton navigateur :
   ```text
   http://localhost:8000/templates/index.html
   ```

> Si ta machine n'a pas `python3`, tu peux utiliser `python -m http.server 8000`.

### Option 3 — avec VS Code Live Server
1. Installe l’extension **Live Server**.
2. Ouvre `templates/index.html`.
3. Clique sur `Go Live`.

## Fonctionnalités
- Analyseur de robustesse de mot de passe
- Modules de chiffrement César et Vigenère
- Détecteur de phishing
- Quiz de sensibilisation avec timer
- Dashboard de veille via API
- Générateur de rapport exportable

## Limites
- Application statique sans back-end
- Pas de système d’authentification
- Stockage local et données de session uniquement

## Équipe Dört Koruma
- Quentin Lacave
- Bianca Pons
- Ummeyir Colak
- Clément Hayot