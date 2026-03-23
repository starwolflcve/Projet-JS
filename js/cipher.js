class CaesarChiffrement {
    constructor() {
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.initEventListeners();
    }

    chiffrement(message, decalage) {
        if (decalage < 1 || decalage > 25) {
            throw new Error('Le décalage doit être compris entre 1 et 25');
        }

        return message.toUpperCase().split('').map(char => {
            const index = this.alphabet.indexOf(char);
            if (index === -1) {
                return char;
            }
            const newIndex = (index + decalage) % 26;
            return this.alphabet[newIndex];
        }).join('');
    }

    dechiffrement(messageChiffre, decalage) {
        if (decalage < 1 || decalage > 25) {
            throw new Error('Le décalage doit être compris entre 1 et 25');
        }

        return messageChiffre.toUpperCase().split('').map(char => {
            const index = this.alphabet.indexOf(char);
            if (index === -1) {
                return char;
            }
            const newIndex = (index - decalage + 26) % 26;
            return this.alphabet[newIndex];
        }).join('');
    }

    forceBrute(messageChiffre) {
        const resultats = [];
        for (let decalage = 1; decalage <= 25; decalage++) {
            const messageDechiffre = this.dechiffrement(messageChiffre, decalage);
            resultats.push({
                decalage: decalage,
                message: messageDechiffre
            });
        }
        return resultats;
    }

    initEventListeners() {
        const chiffreBtn = document.getElementById('chiffre-btn');
        const dechiffreBtn = document.getElementById('dechiffre-btn');
        const forceBruteBtn = document.getElementById('force-brute-btn');
        const messageInput = document.getElementById('message-input');
        const decalageInput = document.getElementById('decalage-input');

        if (chiffreBtn) {
            chiffreBtn.addEventListener('click', () => this.handleChiffrement());
        }

        if (dechiffreBtn) {
            dechiffreBtn.addEventListener('click', () => this.handleDechiffrement());
        }

        if (forceBruteBtn) {
            forceBruteBtn.addEventListener('click', () => this.handleForceBrute());
        }

        if (decalageInput) {
            decalageInput.addEventListener('input', () => this.validateDecalage());
        }
    }

    validateDecalage() {
        const decalageInput = document.getElementById('decalage-input');
        const errorElement = document.getElementById('decalage-error');
        const value = parseInt(decalageInput.value);

        if (isNaN(value) || value < 1 || value > 25) {
            if (errorElement) {
                errorElement.textContent = 'Le décalage doit être compris entre 1 et 25';
                errorElement.style.display = 'block';
            }
            return false;
        } else {
            if (errorElement) {
                errorElement.style.display = 'none';
            }
            return true;
        }
    }

    handleChiffrement() {
        const messageInput = document.getElementById('message-input');
        const decalageInput = document.getElementById('decalage-input');
        const resultatElement = document.getElementById('resultat-chiffre');

        if (!this.validateDecalage()) {
            return;
        }

        const message = messageInput.value.trim();
        const decalage = parseInt(decalageInput.value);

        if (!message) {
            alert('Veuillez saisir un message');
            return;
        }

        try {
            const messageChiffre = this.chiffrement(message, decalage);
            resultatElement.textContent = messageChiffre;
            resultatElement.style.display = 'block';
        } catch (error) {
            alert(error.message);
        }
    }

    handleDechiffrement() {
        const messageInput = document.getElementById('message-input');
        const decalageInput = document.getElementById('decalage-input');
        const resultatElement = document.getElementById('resultat-dechiffre');

        if (!this.validateDecalage()) {
            return;
        }

        const message = messageInput.value.trim();
        const decalage = parseInt(decalageInput.value);

        if (!message) {
            alert('Veuillez saisir un message');
            return;
        }

        try {
            const messageDechiffre = this.dechiffrement(message, decalage);
            resultatElement.textContent = messageDechiffre;
            resultatElement.style.display = 'block';
        } catch (error) {
            alert(error.message);
        }
    }

    handleForceBrute() {
        const messageInput = document.getElementById('message-input');
        const tableauResultats = document.getElementById('tableau-resultats');

        const message = messageInput.value.trim();

        if (!message) {
            alert('Veuillez saisir un message à déchiffrer');
            return;
        }

        const resultats = this.forceBrute(message);
        this.afficherTableauResultats(resultats);
        tableauResultats.style.display = 'block';
    }

    afficherTableauResultats(resultats) {
        const tableauBody = document.getElementById('tableau-body');
        tableauBody.innerHTML = '';

        resultats.forEach(resultat => {
            const row = document.createElement('tr');
            
            const decalageCell = document.createElement('td');
            decalageCell.textContent = resultat.decalage;
            
            const messageCell = document.createElement('td');
            messageCell.textContent = resultat.message;
            
            row.appendChild(decalageCell);
            row.appendChild(messageCell);
            
            tableauBody.appendChild(row);
        });
    }
}

class VigenereCipher {
    constructor() {
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.initEventListeners();
    }

    getShifts(key) {
        return key.toUpperCase().split('').map(char => {
            const index = this.alphabet.indexOf(char);
            if (index === -1) {
                throw new Error(`La clé ne doit contenir que des lettres : ${char}`);
            }
            return index;
        });
    }

    chiffrement(message, key) {
        if (!key || key.trim() === '') {
            throw new Error('La clé ne peut pas être vide');
        }

        const shifts = this.getShifts(key);
        const messageUpper = message.toUpperCase();
        let result = '';
        let keyIndex = 0;

        for (let i = 0; i < messageUpper.length; i++) {
            const char = messageUpper[i];
            const charIndex = this.alphabet.indexOf(char);
            
            if (charIndex === -1) {
                result += char;
                continue;
            }

            const shift = shifts[keyIndex % shifts.length];
            const newIndex = (charIndex + shift) % 26;
            result += this.alphabet[newIndex];
            keyIndex++;
        }

        return result;
    }

    dechiffrement(messageChiffre, key) {
        if (!key || key.trim() === '') {
            throw new Error('La clé ne peut pas être vide');
        }

        const shifts = this.getShifts(key);
        const messageUpper = messageChiffre.toUpperCase();
        let result = '';
        let keyIndex = 0;

        for (let i = 0; i < messageUpper.length; i++) {
            const char = messageUpper[i];
            const charIndex = this.alphabet.indexOf(char);
            
            if (charIndex === -1) {
                result += char;
                continue;
            }

            const shift = shifts[keyIndex % shifts.length];
            const newIndex = (charIndex - shift + 26) % 26;
            result += this.alphabet[newIndex];
            keyIndex++;
        }

        return result;
    }

    initEventListeners() {
        const vigenereChiffreBtn = document.getElementById('vigenere-chiffre-btn');
        const vigenereDechiffreBtn = document.getElementById('vigenere-dechiffre-btn');
        const messageInput = document.getElementById('vigenere-message-input');
        const keyInput = document.getElementById('vigenere-key-input');

        if (vigenereChiffreBtn) {
            vigenereChiffreBtn.addEventListener('click', () => this.handleChiffrement());
        }

        if (vigenereDechiffreBtn) {
            vigenereDechiffreBtn.addEventListener('click', () => this.handleDechiffrement());
        }

        if (keyInput) {
            keyInput.addEventListener('input', () => this.validateKey());
        }
    }

    validateKey() {
        const keyInput = document.getElementById('vigenere-key-input');
        const errorElement = document.getElementById('vigenere-key-error');
        const value = keyInput.value.trim();

        if (!value || !/^[A-Za-z]+$/.test(value)) {
            if (errorElement) {
                errorElement.textContent = 'La clé doit contenir uniquement des lettres';
                errorElement.style.display = 'block';
            }
            return false;
        } else {
            if (errorElement) {
                errorElement.style.display = 'none';
            }
            return true;
        }
    }

    handleChiffrement() {
        const messageInput = document.getElementById('vigenere-message-input');
        const keyInput = document.getElementById('vigenere-key-input');
        const resultatElement = document.getElementById('resultat-vigenere-chiffre');

        if (!this.validateKey()) {
            return;
        }

        const message = messageInput.value.trim();
        const key = keyInput.value.trim();

        if (!message) {
            alert('Veuillez saisir un message');
            return;
        }

        try {
            const messageChiffre = this.chiffrement(message, key);
            resultatElement.textContent = messageChiffre;
            resultatElement.style.display = 'block';
        } catch (error) {
            alert(error.message);
        }
    }

    handleDechiffrement() {
        const messageInput = document.getElementById('vigenere-message-input');
        const keyInput = document.getElementById('vigenere-key-input');
        const resultatElement = document.getElementById('resultat-vigenere-dechiffre');

        if (!this.validateKey()) {
            return;
        }

        const message = messageInput.value.trim();
        const key = keyInput.value.trim();

        if (!message) {
            alert('Veuillez saisir un message');
            return;
        }

        try {
            const messageDechiffre = this.dechiffrement(message, key);
            resultatElement.textContent = messageDechiffre;
            resultatElement.style.display = 'block';
        } catch (error) {
            alert(error.message);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CaesarChiffrement();
    new VigenereCipher();
});