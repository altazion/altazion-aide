# Articles

Fichier principal pour l'intégration des articles


[!include[articles.raw.autogen](articles.raw.autogen.md)]

[!include[articles.csv.autogen](articles.csv.autogen.md)]

<!-- [!include[articles.xml.autogen](articles.xml.autogen.md)]--> 

### Remarques

Le format d'import de fichier articles est assez libre, afin de pouvoir s'adapter à vos besoins. Il se compose d'un ensemble de colonnes fixes (qui doivent donc être obligatoirement présentes dans votre fichier) et de colonnes optionnelles. Vous pouvez utiliser ce fichier de plusieurs façons :

*   en tant que fichier "aggrégé" contenant à la fois les informations du produits, de sa catégorisation, ses attributs personnalisés etc. en ajoutant autant de colonne que nécessaires
*   en tant que fichier "articles seuls" en vous limitant aux colonnes qui correspondent au produit "uniquement".

Par exemple, si vous utilisez une arborescence de classification simple de vos produits, vous pouvez utiliser les colonnes seg\_level\_1 à 6 et ainsi éviter d'avoir à fournir les fichiers catégories et articles\_categories. Si par contre votre arborescence est complexe ou qu'il vous est plus facile de séparer les données dans plusieurs fichiers, vous pouvez ne pas utiliser ces colonnes.

Seuls les produits "normaux" (type N) peuvent être importés via ce type de fichier, les articles des types suivants ne peuvent être créés que via votre gestion commerciale :

*   frais de ports et de préparation (type P)
*   avantages et promotions (type A)
*   loyers, abonnements et services récurrents (type L)
*   produits financiers (type F)
*   lots et produits composés (type C)

 Si vous souhaitez importer ce type de données, nous vous invitons à vous rapprocher de votre interlocuteur technique afin de réaliser un import personnalisé.

### Import de données et visibilité des articles

Notre solution gère plusieurs états possibles pour chaque article :

*   _En élaboration_ (ou "non validé") : tous les articles dans cet état sont considérés comme n'étant pas encore prêts à être vendus
*   _Validés_ : les articles validés ont suffisamment d'informations pour être vendus
*   _Publiés_ : une fois qu'un article est "validé", il est possible de gérer son état de visibilité pour un canal de vente donnée en changeant son état _publié/non publié_.

Lorsque vous intégrez des données, l'état de validation est définit automatiquement en fonction de règles de gestion fixes :

*   si l'article est marqué d'un art\_en\_elaboration=1 ou d'un art\_est\_publie=0, il est considéré comme _En élaboration_
*   si l'article ne possède ni libellé ni prix de vente non nul, il est considéré comme _En élaboration_
*   dans tous les autres cas, il est considéré comme _Validé_

Il est possible d'ajouter des règles de gestion complémentaires : merci de vous rapprocher de votre interlocuteur technique habituel si cela vous est nécessaire.

Vous pouvez ensuite choisir la règle de publication des articles pour chacun de vos canaux de ventes  :

*   Afficher tous les articles validés
*   N'afficher que les articles validés ayant aussi une image et un descriptif
*   N'afficher que les articles ayant un stock (central ou magasin)
*   Si vous utilisez un serveur local magasin en conjonction avec un service de préparation en surface de ventes, vous pouvez aussi choisir de laisser le module logistique du magasin décider des éléments pouvant être publié.

La configuration par défaut demande à ce qu'un article :

*   ait un prix non null et un libellé pour être _validé_
*   ait aussi une image et un descriptif pour être _publié_

#### Articles déclinables

Si vous importez des articles déclinables via un fichier, vous devez vous assurer :

*   que tous les produits de l'import sont soit des articles génériques (des références parents), soit des versions. **Vous ne pouvez pas importer dans un seul fichier des articles déclinables et non déclinables. Veuillez vous rapprocher de nos services pour réaliser ce type d'import.**
*   que tous les versions ont un et un seul parent
*   que vous ne définissez aucune référence cyclique ou arborescente (une version qui serait à son tour une référence parent

Vous pouvez determiner quels sont les articles qui seront visibles dans les descentes (entre les génériques et les versions) en modifiant le paramètre ["Visibilité des versions" dans les options générales du catalogue](/app/settings/Catalogue/Articles/default.aspx).

Exemple
-------

`Ref;Libelle;Description;Prix;PrixPromo;DebutPromo;FinPromo;Univers;Categorie;SousCategorie;Couleur`  
`ABC;Exemple ABC;Ceci est une ligne d'exemple <br/> et une seconde;15.00;;;;Categorie racine;Niveau 1, categorie 1; Niveau 2, catégorie 1;`  
`DEF;Exemple DEF;;30.00;25.00;2012-10-14T23:00:00Z;2012-10-19T22:59:59Z;Categorie racine;Niveau 1, categorie 2; Niveau 2, catégorie 3;Rouge`

[Téléchargez ce fichier d'exemple](https://simplementedata.blob.core.windows.net/integrateurs/catalog/articles-samples.txt "Fichier exemple").

Si vous avez de nombreux attributs personnalisés, vous pouvrez aussi les regrouper dans une seule et même colonne. Formatez alors cette colonne sous la forme "attribut1=valeur1,attribut2=valeur2...". Par exemple :

`Ref;Libelle;Description;Prix;PrixPromo;DebutPromo;FinPromo;Univers;Categorie;SousCategorie;Attributs`  
`ABC;Exemple ABC;Ceci est une ligne d'exemple <br/> et une seconde;15.00;;;;Categorie racine;Niveau 1, categorie 1; Niveau 2, catégorie 1;Puissance=400W,Longeur de l'axe=25cm`  
`DEF;Exemple DEF;;30.00;25.00;2012-10-14T23:00:00Z;2012-10-19T22:59:59Z;Categorie racine;Niveau 1, categorie 2; Niveau 2, catégorie 3;Couleur=Rouge,Puissance=300W,Vitesse=3000T/s`