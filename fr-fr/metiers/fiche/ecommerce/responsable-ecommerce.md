# Responsable e-commerce

## Philosophie et fonctionnement d'Altazion
La philosophie d'Altazion est que chaque outil est optimisé pour une tache.
En tant que responsable e-commerce vous allez être amené à travailler / intéragir avec les différents éléments d'Altazion que vous pouvez découvrir [ici](https://aide.altazion.com/fr-fr/guide/architecture.html).  
Vous travaillez surtout avec **Office**, l'interface d'administration qui intéragit avec **Commerce** qui gère l'e-commerce, **Hub** qui est notre MiddleWare qui vous permet d'intégrer des solutions tierces complexes (en général par API), **Automate** qui réalise les taches routinières (import de stock, export comptable...), ainsi qu'**Orchestrator** outils de gestion de disponibilité en temps réel (stock, paniers).

- Cette philosophie permet : 
- **d'avoir un site e-commerce très performant** car chaque élément de l'architecture n'est sollicité que lorsque nécessaire. 
- **une grande flexibilité dans la personnalisation en fonction des besoins clients**

_Vous êtes libre de "pluguer" des solutions tierces, par exemple le moteur de recherche interne du site, votre solution de recommandation produit type Nosto sans altérer la performance de votre site._

![Schema](https://aide.altazion.com/fr-fr/ressources/architecture.png)


### Configurez & Administrez
**Ajout de solutions tierces**  
Office vous permet d'ajouter des codes de tracking Analytics, ou encore de lier les boutiques Google My Business mais vous permettra surtout de suivre/configurer les solutions tierces ajoutées par API à la solution via Hub. 

Nous préférons proposer leur intégration pour qu'elle soit simple, rapide, performante (en général en utilisant notre **middleware hub**). 

_Vous avez donc les moyens de personnaliser les fonctionnalités de votre site e-commerce, par exemple ajouter le bon moteur de recherche interne, la solution de searchandizing, d'interaction client en ligne, etc._

_Vous avez aussi la main sur les différents imports et exports, qui vous permettent de gérer en temps réel vos campagnes marketing.
Ex : la mise à jour automatique des stocks, ou les exports vers les aggregateurs de flux type Lengow._

**Modes de paiements et logistique**  
Gérez les modes de livraison et de réglement simplement depuis Office.
Vous pouvez définir des règles de gestion au niveau du catalogue, ou produit par produit.
Les critères sont nombreux pour répondre aux problématiques métiers. Volume, poids, prix...

**Configurez vos paramètres e-commerce**  
Définissez les types de produits que vous vendez en ligne, les taux de TVA, la structure du catalogue, le fonctionnement des lots etc.  

<iframe width="560" height="315" src="https://www.youtube.com/embed/tNLMc5LSM1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Gestion : illustration avec un cas pratique
_Vous êtes responsable e-commerce pour une entreprise de vente de jouets, votre entreprise a une vraie stratégie Omnicanale. Votre responsable de gamme va référencer une nouvelle gamme de figurines Spiderman de la marque Hasbro liées à un nouveau film de la franchise Marvel.
Le fournisseur vous a accordé une exclusivité pour la vente en ligne._

## Structurez & référencez votre catalogue
**Structurez**  
Dans le système interne de l'entreprise ce jouet appartient à la **famille** des figurines car le catalogue est géré par typologie de jouet. Ce système interne n'est pas adapté pour l'approche commerciale en ligne. Altazion vous permet de proposer au client ce produit  dans le [**segment**](https://aide.altazion.com/fr-fr/guide/referencer/segments/index.html) Superhéros -> Marvel, ce qui est mieux pour l'arborescence du site donc le parcours utilisateur.

**Référencez vos produits**  
Vous pouvez au choix référencer votre nouveau produit et sa nouvelle gamme par un import ou par depuis l'interface Office d'Altazion.

Détail, qui n'en est pas un : si le fournisseur propose un seul EAN pour les différentes figurines de la collection comme cela arrive parfois, il vous est possible de créer des déclinaisons à partir d'un seul et même EAN pour la vente en ligne. Vous créez donc pour la figurine  Spider-man une référence "fille".

- les [attributs produit](https://aide.altazion.com/fr-fr\guide\referencer\attributs.html) vous permettent d'enrichir vos fiches produit avec du contenu de qualité. Ces attributs serviront aussi de filtres de recherche et aideront au référencement naturel.
- Ajoutez des documents (label qualité, garantie, mode d'emploi), des visuels, des vidéos pour présenter au mieux votre produit en fonction de la typologie. Ici, une vidéo promotionnelle présentant notre super héros sera intégrée à la fiche produit.  
_Altazion vous permet de personnaliser à 100% vos fiches produit_.

## Animez votre site e-commerce
Avant même de parler de campagnes commerciales, Altazion vous permet de mettre en avant vos produits stars. 

- Le segment Marvel génère un chiffre d'affaires important. Dans Altazion, vous pouvez donc le définir comme un **segment star**. Les produits du segment star sont mis en avant dans le moteur de recherche interne du site ou dans les sélections de produit. 
_Altazion vous permet de hiérarchiser les Segments et les produits au sein même de ceux-ci !_  

- Spider-Man fait partie des Marvel Avengers, ce produit est donc lié à des [**keywords**](https://aide.altazion.com/fr-fr\guide\referencer\Keywords.html) (mots clés) pour optimiser le searchandizing (apparaitre en priorité dans le moteur de recherche)ex : l'internaute cherche "Avengers", Ce keyword est envoyé à la solution tierce pour la nourrir, afin que la figurine apparaisse tout en haut des résultats de recherche.   
_Avec Altazion, vous pouvez réellement faire ressortir vos produits stars_.

- Un [**label "nouveauté"**](https://aide.altazion.com/fr-fr\guide\referencer\tag-label.html) et un autre "exclu web" sont visibles depuis les pages de segment et sur la fiche produit.
<iframe width="560" height="315" src="https://www.youtube.com/embed/6_ZQ3smXEHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Contenu spécifique, CMS optimisé pour le SEO et l'UX
Altazion permet de créer des pages personnalisées, des "landing pages".  
Créez par exemple une page "Hasbro" avec un template spécifique et proposez une [sélection de produit](https://aide.altazion.com/fr-fr/guide/vendre/omnicanal/selection.html) à destination des personnes collectionnant spécifiquement cette marque. Cela vous offre un autre point de contact avec le client. 
- La figurine est aussi mise en avant sur une landing page "Spider-Man" à vocation SEO ou SEA dans laquelle une [sélection de produit](https://aide.altazion.com/fr-fr/guide/vendre/omnicanal/selection.html) liés au super héros Spider-Man sera proposé.

Altazion vous offre énormément de possibilités au niveau [CMS et SEO](https://aide.altazion.com/fr-fr/guide/vendre/ecommerce/cms.html).

### la campagne pour regrouper les actions
Utilisez toutes les fonctionnalités présentées ci-dessus dans **[une campagne commerciale](https://aide.altazion.com/fr-fr/guide/vendre/omnicanal/campagne.html)**.
Dans le cas de l'exemple, la campagne est 100% web. Vous pouvez jouer avec le pricing, des remises diverses (au panier, au produit, etc.) afficher des contenus et utiliser l'[emerchandising](https://aide.altazion.com/fr-fr/metiers/fiche/e-merchandising/e-merchandiser.html) (bannières, tags et labels...) dans les endroits clés de votre site...  

_Avec cette stratégie, vous pouvez multiplier les points de contacts (landing page marque et Spider-Man, page du segment Super Héros, moteur de recherche, bannières sur la home page ou ailleurs, navigation à facette) et les optimiser (attributs produit, labels "nouveauté" et "exclu web"...)._

<iframe width="560" height="315" src="https://youtu.be/EsEU7gyTtig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Soyez réactif
Alors que la campagne Marvel / Hasbro fonctionne à merveille, vous vérifiez les stocks en temps réel. 
Dans Office, vous pouvez valider que la mise à jour des stocks s'est déroulée correctement. 
- Vérifiez aussi que l'export vers Google Shopping ou un aggregateur de flux c'est bien réalisé. Si vous constatez un soucis, vous pouvez rélancer la tache directement.
- Si un produit est victime de son succès, forcez simplement l'export afin de ne pas faire de publicité sur Google Shopping par exemple.

## Gérez la relation client
Altazion permet de gérer la relation client tout au long du cycle de vie. Chat en ligne, évenement commercial, remarque commerciale, historique client et commande...Altazion permet d'accompagne le client tout au long du cycle de commande. Pour en savoir plus cliquez [ici](https://aide.altazion.com/fr-fr/metiers/fiche/relation-client/relation-client.html).  
<iframe width="560" height="315" src="https://www.youtube.com/embed/a1q4hpmaoxQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Dans Office, vous gérez aussi les litiges et éditez des avoirs, l'onglet [Financier](https://aide.altazion.com/fr-fr/guide/vendre/ecommerce/financier.html) vous permet aussi de détecter tout problème de réglement de commandes afin d'annuler les expéditions.

## Managez
Créez et gérez les droits pour vos collaborateurs puis créez et d'assignez des taches à chacun des membres de votre équipe et de définir le process de validation.  
Créer des taches en leur donnant une description, une date limite et un degré d'importance puis assignez les à votre équipe en définissant le destinataire.   
Chaque collaborateur peut ensuite les consulter, les ignorer, les traiter ou les transférer depuis son espace personnel.  
**Exemple**  
Pour la création du modèle de page marque vous créez et assignez une tache à l'expert UX - UI qui peut ensuite la transférer au référent SEO pour validation.    

<iframe width="560" height="315" src="https://www.youtube.com/embed/3HX1JoivA80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Reporting & optimisation
Toutes les données Altazion sont exportables. Cela permet d'optimiser les solutions d'emerchandising, mais aussi de nourrir vos CRM, ERP, et outils de reporting. 

## Liens utiles
### Structurez & référencez votre gamme 
- Tout savoir sur les [segment](https://aide.altazion.com/fr-fr/guide/referencer/segments/index.html).
- Tout savoir sur les [attributs produit](https://aide.altazion.com/fr-fr\guide\referencer\attributs.html).
- Tout savoir sur les [produits déclinables de type Mère/Fille](https://aide.altazion.com/fr-fr/guide/referencer/articles/declinables.html)
- Tout savoir sur la [création de produit](https://aide.altazion.com/fr-fr/guide/referencer/articles/index.html).

### Animez votre gamme
- Tout savoir sur les [campagnes commerciales](https://aide.altazion.com/fr-fr/guide/vendre/omnicanal/campagne.html).
- Tout savoir sur [l'emershandizing](https://aide.altazion.com/fr-fr/guide/vendre/ecommerce/emershandizing.html) sur Altazion.
- Tout savoir sur les mots clés [keywords](https://aide.altazion.com/fr-fr\guide\referencer\Keywords.html).
- Tout savoir sur les [pages et la gestion de contenu "SXO"](https://aide.altazion.com/fr-fr/guide/vendre/ecommerce/emershandizing.html).
- Tout savoir sur les [sélections de produit](https://aide.altazion.com/fr-fr/guide/vendre/omnicanal/selection.html).

### Gestion d'équipe
- Tout savoir sur [la création des taches](https://aide.altazion.com/fr-fr/guide/configurer/taches/edit-tasks.html).  
- Tout savoir sur [l'assignation des taches](https://aide.altazion.com/fr-fr/guide/configurer/taches/attribuer-task.html).  
- Tout savoir sur [le traitement des taches](https://aide.altazion.com/fr-fr/guide/configurer/taches/use-tasks.html).  