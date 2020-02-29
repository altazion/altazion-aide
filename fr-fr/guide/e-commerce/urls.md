# Urls & SEO

## Urls Internes

A de nombreux emplacement, dans votre site e-commerce, vous serez amenés à vouloir pointer vers une page dynamique telle qu'une descente produit, un produit, un catalogue interactif, etc.

Si vos liens ont besoin d'être lus sur d'autre support que votre site web (telle qu'une application mobile, une borne ou un totem tactile, ...) l'utilisation de l'url "rewritée" ne sera probablement pas idéale, puisqu'elle redirigera l'utilisateur vers le site. Vous pouvez, dans ce cadre, utiliser les urls internes à notre moteur e-commerce.

Ces urls sont de la forme : _smple-commerce://_ et permettent de définir un lien vers :

* une descente produit
* une fiche article
* une page de contenu personnalisée
* un catalogue interactif

### Lien vers une descente produit

C'est probablement le type de lien le plus complexe. Il se compose d'une suite de critères, séparés par des point-virgules.

`smple-commerce://{critere1=valeur};{critere2=valeur}`

les différents critères possibles sont :

seg\_pk=

la segmentation des produits

mar\_pk=

la marque des produits

vit\_guid=

Une vitrine contenant les produits

attr:{guid}=

L'attribut d'article d'identifiant {guid}

Quelques exemples d'urls :

* `smple-commerce://seg_pk=123` pointe vers les produits de la segmentation 123
* `smple-commerce://seg_pk=123;attr:{46B479EC-AFEC-44F0-A012-70D6CFA3314D}={98AE9E36-4838-4E53-9F93-B0EAB9B1024A}` pointe vers les produits de la segmentation 123 ayant pour valeur {98AE9E36-4838-4E53-9F93-B0EAB9B1024A} sur l'attribut {46B479EC-AFEC-44F0-A012-70D6CFA3314D}
* `smple-commerce://vit_guid={31553F78-A221-49E6-B69E-BAEA7FF04C82}` pointe vers la vitrine {31553F78-A221-49E6-B69E-BAEA7FF04C82}

### Lien vers un article

Pour pointer sur une fiche article, utilisez une url de la forme :

`smple-commerce://art_guid={guid de l'article}`

### Lien vers un catalogue interactif

Pour pointer sur un catalogue interactif, vous devez utiliser une url sous la forme :

`smple-commerce://opecom/CATALOGUE/ope_guid={le-guid-de-l-operation}`