document.addEventListener('DOMContentLoaded', () => {
    const wordInput = document.getElementById('wordInput');
    const searchBtn = document.getElementById('searchBtn');
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    const loadingDiv = document.getElementById('loading');
    
    // Focus sur l'input au chargement
    wordInput.focus();
    
    // Événement sur le bouton
    searchBtn.addEventListener('click', translateWord);
    
    // Événement avec Entrée
    wordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            translateWord();
        }
    });
    
    async function translateWord() {
        const word = wordInput.value.trim();
        
        // Validation
        if (!word) {
            showError('Veuillez entrer un mot');
            return;
        }
        
        if (word.length < 2) {
            showError('Le mot doit contenir au moins 2 caractères');
            return;
        }
        
        // Affichage du loading
        hideAll();
        loadingDiv.classList.remove('hidden');
        searchBtn.disabled = true;
        
        try {
            // Appel à l'API MyMemory
            const response = await fetch(
                `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=fr|en`
            );
            
            if (!response.ok) {
                throw new Error('Erreur réseau');
            }
            
            const data = await response.json();
            
            // Vérifier la réponse
            if (data.responseStatus === 200 && data.responseData.translatedText) {
                displayResult(word, data.responseData.translatedText);
            } else {
                showError('Traduction non trouvée');
            }
        } catch (error) {
            console.error('Erreur:', error);
            showError('Erreur de connexion. Vérifiez votre connexion internet.');
        } finally {
            searchBtn.disabled = false;
        }
    }
    
    function displayResult(french, english) {
        hideAll();
        document.getElementById('englishWord').textContent = english;
        resultDiv.classList.remove('hidden');
    }
    
    function showError(message) {
        hideAll();
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden');
    }
    
    function hideAll() {
        resultDiv.classList.add('hidden');
        errorDiv.classList.add('hidden');
        loadingDiv.classList.add('hidden');
    }
});