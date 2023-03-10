# Responsable e-commerce

## Philosophie et fonctionnement d'Altazion
La philosophie d'Altazion est que chaque outil est optimisé pour une tache.
En tant que responsable e-commerce vous allez être amené à travailler / intéragir avec les différents éléments d'Altazion que vous pouvez découvrir [ici](https://aide.altazion.com/fr-fr/guide/architecture.html).
Vous allez surtout travailler avec **Office**, l'interface d'administration qui intéragit avec **Commerce** qui gère l'e-commerce, **Hub** qui est notre MiddleWare qui vous permet d'intégrer des solutions tierces complexes (en général par API), **Automate** qui réalise les taches routinières (import de stock, export comptable...), ainsi qu'**Orchestrator** outils de gestion de disponibilité en temps réel (stock, paniers) qui travaille pour l'e-commerce mais aussi pour les autres canaux de vente.

- Cette philosophie permet : 
- **d'avoir un site e-commerce hyper performant** car chaque élément de l'architecture n'est sollicité que lorsque nécessaire. 
- **une grande flexibilité dans la personnalisation en fonction des besoins clients**

_Vous êtes libre de "pluguer" des solutions tierces, par exemple le moteur de recherche interne du site, votre solution de recommandation produit type Nosto sans altérer la performance de votre site._

![Schema](https://aide.altazion.com/fr-fr/ressources/architecture.png)

## Illustration avec un cas pratique
_Vous êtes responsable e-commerce pour une entreprise de vente de jouets, votre entreprise a une vraie stratégie Omnicanale. Votre responsable de gamme va référencer une nouvelle gamme de figurines liées à un nouveau film.
Le fournisseur vous a accordé une exclusivité pour la vente en ligne._

## Configurez & Administrez
**Ajout de solutions tierces**  
Office vous permet d'ajouter des codes de tracking Analytics, ou encore de lier les boutiques Google My Business mais vous permettra surtout de suivre les bons fonctionnements des solutions tierces ajoutées par API à la solution via Hub. 

Nous préférons proposer leur intégration pour qu'elle soit simple, rapide, performante (en général en utilisant notre **middleware hub**). 

_L'interface permet aussi de controler la bonne réalisation des imports, médiations automatisés. Ex : la mise à jour automatique des stocks, ou les exports vers les aggregateurs de flux type Lengow._ 
Cela vous donne ainsi la possibilité d'agir rapidement en cas de problème.

## Structurez & référencez votre gamme 
**Structurez**  
Dans le système interne de l'entreprise ce jouet appartient à la **famille** des figurines car le catalogue est géré par typologie de jouet. Ce système interne n'est pas adapté pour l'approche commerciale en ligne. Altazion vous permet de proposer au client ce produit  dans le [**segment**](https://aide.altazion.com/fr-fr/guide/referencer/segments/index.html) Superhéros -> Marvel, ce qui est mieux pour l'arborescence du site donc le parcours utilisateur.

### Ici ajouter les infos stocks, paiement, omnicanal (sfs pas possible)

**Référencez vos produits**  
Vous pouvez au choix référencer votre nouveau produit et sa nouvelle gamme par un import ou par depuis l'interface Office d'Altazion.

Détail, qui n'en est pas un : si le fournisseur propose un seul EAN pour les différentes figurines de la collection comme cela arrive parfois, il vous est possible de créer des déclinaisons à partir d'un seul et même EAN pour la vente en ligne. Vous créez donc pour la figurine  man une référence "fille".

- les [attributs produit](https://aide.altazion.com/fr-fr\guide\referencer\attributs.html) vous permettent d'enrichir vos fiches produit avec du contenu de qualité. Ces attributs serviront aussi de filtres de recherche et aideront au référencement naturel.
- Ajoutez des documents (label qualité, garantie, mode d'emploi), des visuels, des vidéos pour présenter au mieux votre produit en fonction de la typologie. Ici, une vidéo promotionnelle présentant notre super héros sera intégrée à la fiche produit.  
_Altazion vous permet de personnaliser à 100% vos fiches produit_.

## Animez votre gamme
Avant même de parler de campagnes commerciales, Altazion vous permet de mettre en avant vos produits stars. 

- Le segment Marvel génère un chiffre d'affaires important. Dans Altazion, vous pouvez donc le définir comme un segment **segment star**; Ainsi la nouvelle figurine est mise en avant sur la page du segment (page catégorie) qui bénéficie d'un modèle ou template personnalisable (structure, bannière, texte, etc.) Les produits du segment star sont aussi mises en avant dans le moteur de recherche interne. 
_Altazion vous permet de hiérarchiser les Segments et les produits au sein même de ceux-ci !_  

- Spider-Man fait partie des Marvel Avengers, ce produit est donc lié à des [**keywords**](https://aide.altazion.com/fr-fr\guide\referencer\Keywords.html) (mots clés) pour optimiser le searchandizing (apparaitre en priorité dans le moteur de recherche)ex : l'internaute cherche "Avengers", grâce au keyword configuré la figurine apparait tout en haut des résultats.   
_Avec Altazion, vous pouvez réellement faire ressortir vos produits star. C'est intéressant pour vos clients, mais aussi pour négocier avec vos fournisseurs_.

- Un [**label "nouveauté"**](https://aide.altazion.com/fr-fr\guide\referencer\tag-label.html) et un autre "exclu web" sont visibles depuis les pages de segment et sur la fiche produit.

- **La page spécifique pour l'opération, pour la gamme ou pour la marque !**
Altazion permet de créer des pages personnalisées, des "landing pages".
Créez par exemple une page "Hasbro" avec un template spécifique et proposez une [sélection de produit](https://aide.altazion.com/fr-fr/guide/vendre/omnicanal/selection.html) à destination des personnes collectionnant spécifiquement cette marque permet un autre point de contact avec le client. 
- La figurine est aussi mise en avant sur une landing page "Spider-Man" à vocation SEO ou SEA dans laquelle une [sélection de produit](https://aide.altazion.com/fr-fr/guide/vendre/omnicanal/selection.html) liés au super héros Spider-Man sera proposé.

Ci-dessous la page marque Hasbro avec son url et son modèle spécifique.
![marque hasbro page](https://aide.altazion.com/fr-fr/ressources/fiche-metier/page-marque-hasbro.jpg)

## La clef de voute de l'animation : la campagne omnicanale
Utilisez toutes les fonctionnalités présentées ci-dessus dans ** [une campagne commerciale](https://aide.altazion.com/fr-fr/guide/vendre/omnicanal/campagne.html)**.
Dans le cas de l'exemple, la campagne est 100% web. Vous pouvez jouer avec le pricing, des remises diverses (au panier, au produit, etc.) afficher des contenus e utiliser l'emershandizing (bannières, tags et labels...) dans les endroits clés de votre site...  

_Avec cette stratégie, vous pouvez multiplier les points de contacts (landing page marque et Spider-Man, page du segment Super Héros, moteur de recherche, bannières sur la home page ou ailleurs, navigation à facette) et les optimiser (attributs produit, labels "nouveauté" et "exclu web"...). Cela vous permet de vendre, mais aussi de négocier des avantages avec votre fournisseur._

Ci-dessous, une campagne "Carnaval", qui propose différentes promotions sur une sélection de produit. Une landing page avec un template spécifique a été créée pour l'opération. Cette campagne dispose de sa propre url, etc.
![Illustration d'une campagne "Carnaval"](https://aide.altazion.com/fr-fr/ressources/fiche-metier/selection.jpg)

## Managez
Altazion vous offre la possibilité de créer et d'assigner des taches à chacun des membres de votre équipe et de définir le process de validation.
Créer des taches en leur donnant une description, une date limite et un degré d'importance puis assignez les à votre équipe en définissant le destinataire. 
Chaque collaborateur peut ensuite les consulter, les ignorer, les traiter ou les transférer depuis son espace personnel. 

**Exemple**  
Pour la création du modèle de page marque vous créez et assignez une tache à l'expert UX - UI qui peut ensuite la transférer au référent SEO pour validation.    

## Gerez vos commandes et clients

## Reporting & optimisation
Toutes les données Altazion sont exportables. Cela permet d'optimiser les solutions d'emerchandising, mais aussi de nourrir vos CRM, ERP, et outils de reporting. 


### Liens utiles 
Les taches  
- Tout savoir sur [la création des taches](https://aide.altazion.com/fr-fr/guide/configurer/taches/edit-tasks.html).  
- Tout savoir sur [l'assignation des taches](https://aide.altazion.com/fr-fr/guide/configurer/taches/attribuer-task.html).  
- Tout savoir sur [le traitement des taches](https://aide.altazion.com/fr-fr/guide/configurer/taches/use-tasks.html). 