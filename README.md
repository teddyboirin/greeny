## Site
https://greenyproject.netlify.app/

## Équipe
* Léa DE AMORIN
* Eden BERGEL
* Hanna BERGEL
* Samir CHALAL
* Teddy BOIRIN
* Mohamed KAROUI

## Installation

* Pour installer les dépendences : ```npm install``` 
* Pour lancer le projet : ```npm start``` 

## Présentation du projet

Notre projet est une plateforme qui va permettre aux gens de devenir plus éco-responsable et réduire leur empreinte carbone. Comment ? En leur proposant des défis variées chaque jour de différentes catégories pour les aider à faire des gestes écolo dans leur quotidien.

## Nos choix techniques

Front: 
### `React.js `  
Déjà utilisé lors du projet fil rouge donc toute l'équipe est à l'aise avec cette librairie

### `Progressive Web App (PWA) `  
Notre plateforme est une application qui va plus être destiné à être utilisé sur son téléphone, donc on veut que l'utilisateur ai l'application sur son téléphone et pouvoir lui envoyer des notifications pour réaliser des défis. Cependant nous avons pas eu le temps de s'occuper du mode offline. 

### `Axios`
Axios nous a permis de simplifier nos appels API ainsi que le traitement des données que nous voulions utilisées pour mettre en place nos différentes fonctionnalités. En effet, axios renvoie des promesses pour chaque requête et s’occupe automatiquement de transformer les réponses en JSON.

### `SVG`
Notre site comporte peu d’images, donc la majorité de ces dernières sont des icônes en svg. Ainsi, nous avons décidé d’utiliser du svg pour pouvoir manipuler les images comme n’importe quel autre élément du DOM sans aucune perte de qualité en les mettant toutes dans un spritesheet et ainsi réduire le poids d'image.

### `Bcrypt`
Nous avons utilisé bcrypt pour que le mot de passe soit hashé lors de l'envoie du formulaire d'inscrpition. Et affiche ainsi un mot de passe crypté dans la base de données 

### `Sass`
Sass nous a été utile pour la mise en place de viariable de fonts et de couleurs mais aussi de mixins pour le spritesheet mis en place dans le projet. De plus le préprocesseur permet de modulariser le css et donc d'éviter de répéter du code.

[Axios](https://github.com/axios/axios)<br/>
[Bcrypt](https://www.npmjs.com/package/bcrypt)<br/>