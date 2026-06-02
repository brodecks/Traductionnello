# Extension de Navigateur - Traducteur FR→EN

## 📁 Structure des fichiers

```
traducteur-extension/
├── manifest.json          # Configuration de l'extension
├── popup.html             # Interface HTML
├── popup.css              # Styles CSS
└── popup.js               # Logique JavaScript
```

## 🚀 Installation sur Chrome

1. **Créer le dossier** : `traducteur-extension/`
2. **Placer tous les fichiers** dans ce dossier
3. Ouvrir Chrome et aller à : `chrome://extensions/`
4. **Activer le mode développeur** (coin supérieur droit)
5. Cliquer sur **"Charger l'extension non empaquetée"**
6. Sélectionner le dossier `traducteur-extension/`

## 🦊 Installation sur Firefox

1. **Créer le dossier** : `traducteur-extension/`
2. **Placer tous les fichiers** dans ce dossier
3. Ouvrir Firefox et aller à : `about:debugging#/runtime/this-firefox`
4. Cliquer sur **"Charger un module complémentaire temporaire"**
5. Sélectionner le fichier `manifest.json`

## ✨ Fonctionnalités

- ✅ Traduction rapide FR → EN
- ✅ Interface simple et intuitive
- ✅ Recherche par clic ou Entrée
- ✅ Design moderne avec gradient
- ✅ Gestion des erreurs
- ✅ API gratuite (MyMemory)

## 🎯 Utilisation

1. Cliquer sur l'icône de l'extension
2. Entrer un mot en français
3. Cliquer sur "Rechercher" ou appuyer sur Entrée
4. La traduction anglaise s'affiche

## 📝 Exemple

```
Input:  bonjour
Output: 
  Français: bonjour
  Anglais: hello
```

## 🔧 Modifications possibles

Pour changer les langues, modifiez dans `popup.js` :
```javascript
// Remplacer 'fr|en' par d'autres codes
// Exemples: es|en (espagnol→anglais), de|en (allemand→anglais)
const response = await fetch(
    `https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=fr|en`
);
```

## 🎨 Personnalisation du design

Tous les styles sont dans `popup.css`. Vous pouvez modifier:
- Les couleurs (gradient #667eea → #764ba2)
- La taille de la popup (width: 400px)
- Les animations
- Les polices
