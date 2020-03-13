# Associations d'un article

Intégration des associations entre articles


[!include[articlesassociations.raw.autogen](articlesassociations.raw.autogen.md)]

<!-- [!include[articlesassociations.csv.autogen](articlesassociations.csv.autogen.md)]--> 

<!-- [!include[articlesassociations.xml.autogen](articlesassociations.xml.autogen.md)]--> 

Les types de relation pré-définis sont : 

*   CROSSSELL : association de type cross-selling
*   UPSELL : association de type up-selling
*   ACCESSOIRE : accessoire conseillé lors de l'achat (par exemple des piles)

Vous pouvez créer de nouveaux types dans votre back-office.

Les types d'associations suivants sont obsolètes :

*   VERSION : l'article "2" est une déclinaison de l'article "1"
*   PARENT : l'article "2" est le parent de l'article "1".

Pour étabilr une relation parent/enfant entre produit, nous vous conseillons d'utiliser la propriété Référence parent dans le fichier principal.