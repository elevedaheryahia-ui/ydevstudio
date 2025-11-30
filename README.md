# YDev Studio - Portfolio React avec Routing

Structure de projet React modulaire avec **routing par pages** - chaque section s'ouvre dans un fichier/page différent.

## 📁 Structure du projet

```
Freelance/
├── public/
│   ├── index.html          # Template HTML principal
│   └── *.png              # Images des projets
├── src/
│   ├── components/         # Composants React réutilisables
│   │   ├── Navigation.jsx # Menu de navigation avec React Router
│   │   ├── Navigation.css # Styles du menu
│   │   ├── Header.jsx     # Composant hero/accueil
│   │   ├── Services.jsx   # Composant compétences et services
│   │   ├── Projects.jsx   # Composant projets
│   │   ├── About.jsx      # Composant à propos
│   │   ├── Testimonials.jsx # Composant témoignages
│   │   ├── Insights.jsx   # Composant optimisations
│   │   └── Contact.jsx    # Composant contact et tarifs
│   ├── pages/             # Pages (routes) séparées
│   │   ├── Home.jsx       # Page d'accueil (/)
│   │   ├── Services.jsx   # Page services (/services)
│   │   ├── Projects.jsx  # Page projets (/projects)
│   │   ├── About.jsx      # Page à propos (/about)
│   │   ├── Testimonials.jsx # Page témoignages (/testimonials)
│   │   ├── Insights.jsx   # Page optimisations (/insights)
│   │   └── Contact.jsx   # Page contact (/contact)
│   ├── styles/
│   │   └── global.css     # Styles globaux
│   ├── App.jsx            # Composant principal avec routing
│   └── index.js           # Point d'entrée React
├── package.json           # Dépendances et scripts
└── README.md             # Ce fichier
```

## 🚀 Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm start
```

3. Construire pour la production :
```bash
npm run build
```

## 🎯 Routing par pages

Chaque section est maintenant une **page séparée** avec sa propre URL :

- `/` - Accueil (Home)
- `/services` - Services et compétences
- `/projects` - Projets réalisés
- `/about` - À propos
- `/testimonials` - Témoignages
- `/insights` - Optimisations
- `/contact` - Contact et tarifs

### Navigation

Le menu de navigation utilise **React Router** pour naviguer entre les pages. Chaque lien ouvre une page complètement différente avec sa propre URL.

## 📝 Architecture

### Composants vs Pages

- **Composants** (`src/components/`) : Composants réutilisables sans logique de routing
- **Pages** (`src/pages/`) : Pages qui utilisent les composants et sont associées à des routes

### Exemple de structure

```jsx
// src/pages/Services.jsx
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <div className="page">
      <Services />
    </div>
  );
};
```

## 🔧 Personnalisation

### Ajouter une nouvelle page

1. Créer un composant dans `src/components/NewComponent.jsx`
2. Créer une page dans `src/pages/NewPage.jsx` qui utilise le composant
3. Ajouter la route dans `src/App.jsx` :
```jsx
<Route path="/new-page" element={<NewPage />} />
```
4. Ajouter le lien dans `src/components/Navigation.jsx`

## 📦 Dépendances

- React 18.2.0
- React DOM 18.2.0
- **React Router DOM 6.20.0** (pour le routing)
- React Scripts 5.0.1

## 🌐 Déploiement

### Configuration pour les routes

Pour que les routes fonctionnent en production, configurez votre serveur pour rediriger toutes les routes vers `index.html` :

**Netlify** : Créer un fichier `public/_redirects` :
```
/*    /index.html   200
```

**Apache** : Ajouter dans `.htaccess` :
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx** :
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## ✨ Avantages du routing par pages

- ✅ Chaque section est une page indépendante
- ✅ URLs partageables pour chaque section
- ✅ Navigation fluide avec React Router
- ✅ Meilleure organisation du code
- ✅ Possibilité d'ajouter des métadonnées spécifiques par page
- ✅ Meilleure expérience utilisateur

# ydevstudio-portfolio
