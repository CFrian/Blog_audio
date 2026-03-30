
## 1. Contexte du projet
Le projet consiste à concevoir et développer une application web de type blog. L’objectif est de proposer une plateforme simple, moderne et responsive permettant de consulter une liste d’articles sur une page d’accueil puis d’accéder à une page dédiée pour chaque article.

Dans la première version, aucune base de données ne sera utilisée. Les données des articles seront stockées dans un fichier JSON en local et récupérées dynamiquement côté client via JavaScript avec `fetch`.

Le projet doit également être pensé pour évoluer plus tard vers une fonctionnalité de création automatique d’articles via un formulaire. Cette anticipation doit être prise en compte dès la conception technique et fonctionnelle.

## 2. Objectifs
Les objectifs du projet sont les suivants :
- Concevoir une interface moderne et claire.
- Permettre l’affichage dynamique d’articles à partir d’un fichier JSON.
- Créer une page d’accueil listant les différents articles.
- Créer une page de détail par article.
- Mettre en place des interactions JavaScript pour améliorer l’expérience utilisateur.
- Ajouter des animations visuelles pour rendre l’application plus vivante.

## 3. Public cible
Le blog est destiné principalement :
- aux étudiants qui consultent les articles,  
- aux futurs rédacteurs de contenu,  
- aux administrateurs ou gestionnaires qui pourraient, dans une version ultérieure, ajouter des articles via un formulaire.

## 4. Périmètre fonctionnel
#### 4.1 Fonctionnalités attendues dans la V1
La première version de l’application doit inclure :
- une page d’accueil,
- une liste d’articles,
- une page de détail par article,  
- une navigation responsive,  
- un menu burger,  
- des animations d’interface,  
- le chargement des données via `fetch`,  
- une page de connexion
- une page d'inscription

#### 4.2 Hors périmètre de la V1
- pas de base de données,  
- pas d’espace administrateur,  
- pas d’authentification,  
- pas de formulaire réellement connecté à une persistance,  
- pas de système de commentaires,  
- pas de moteur de recherche avancé côté serveur,  
- pas de back-end.

## 5. Description fonctionnelle détaillée

## 5.1 Page d’accueil
La page d’accueil doit permettre d’afficher tous les articles disponibles sous forme de liste ou de cartes.

Pour chaque article affiché dans la liste, les informations visibles doivent être :
- le titre,  
- le résumé,  
- l’auteur,  
- le temps de lecture,  
- la date de création,  
- la catégorie.

Chaque article doit inclure un lien ou un bouton permettant d’accéder à sa page de détail.

La page d’accueil peut également comporter :
- un header,  
- un menu de navigation,  
- une section héro (avec une image, caroussel, etc...),  
- une zone principale contenant les cartes d’articles,  
- un footer.

## 5.2 Page détail d’un article
Chaque article doit posséder sa propre page ou vue détaillée.

La page détail doit contenir obligatoirement :
- le titre,  
- l’auteur,  
- le temps de lecture,  
- la date de création,  
- la catégorie,  
- le contenu complet de l’article.

Le contenu de l’article doit être lisible, bien structuré et mis en forme de manière agréable.

## 5.3 Navigation et interactions
L’application doit intégrer de l’interactivité en JavaScript, notamment :

- un menu burger sur mobile,  
- la fermeture du drawer au clic sur un bouton de fermeture,  
- la fermeture du drawer au clic en dehors du panneau si possible,  
- des animations d’ouverture et de fermeture,  
- des effets de survol sur les cartes, boutons ou liens,  
- des animations d’apparition des éléments à l’écran,  
- des transitions fluides entre les états visuels.

## 5.4 Gestion des données
Les articles doivent provenir d’un fichier JSON local (à voir pendant le cours).
JavaScript devra utiliser `fetch` pour récupérer les données, les parser et les afficher dans l’interface.

## 5.5 Anticipation de la création d’articles plus tard
Même si le formulaire n’est pas encore développé complètement, le projet doit prévoir cette évolution.

Cela implique :
- penser à une future page “Créer un article”,  
- prévoir les champs nécessaires dès maintenant.

Les champs futurs du formulaire seront cohérents avec les champs du JSON :
- titre,  
- résumé,  
- auteur,  
- temps de lecture,  
- date de création,  
- catégorie,  
- contenu.

## 6. Structure des données
Voici une structure JSON recommandée pour les articles :
```json
[
  {
    "id": 1,
    "title": "Apprendre JavaScript quand on débute",
    "summary": "Un guide simple pour comprendre les bases de JavaScript.",
    "author": "Marie Dupont",
    "readingTime": "5 min",
    "createdAt": "25-05-2026",
    "category": "JavaScript",
    "content": "Contenu complet de l'article..."
  }
]
```

## 7. Exigences UI/UX
L’interface doit être :
- claire,  
- responsive,  
- moderne,  
- agréable à utiliser,  
- cohérente visuellement

#### ### Attendus UX
Le parcours utilisateur doit être simple :
- l’utilisateur arrive sur l’accueil,  
- il voit immédiatement les articles,  
- il clique sur un article,  
- il accède à sa page détaillée,  
- il peut revenir facilement à la liste.

#### Attendus UI
Le design doit inclure :
- une hiérarchie visuelle nette,  
- des cartes d’articles bien espacées,  
- une typographie lisible,  
- des couleurs harmonieuses,  
- des boutons visibles,  
- des effets de transition fluides.

## 8. Maquettage
Le projet doit commencer par une phase de maquettage avant le développement.

#### Livrables de maquettage attendus
Il faut produire au minimum :
- une maquette de la page d’accueil,  
- une maquette de la page article,  
- une version desktop,  
- une version mobile.

## 9. Architecture recommandée
Une structure de fichiers simple et propre est recommandée :
```md
/blog-etudiant
│
├── home.html
├── article-single.html
├── login.html
├── signup.html
├── /css
│   └── style.css
├── /js
│   ├── main.js
│   ├── articles.js
│   └── formulaire.js
├── /data
│   └── articles.json
├── /assets
│   ├── images
│   └── icons
└── README.md
```

## 10. Livrables attendus
Les livrables du projet sont :
- les maquettes UI desktop et mobile,  
- le code source HTML/CSS/JavaScript,  
- le fichier JSON contenant les articles,

