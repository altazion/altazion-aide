# Livraison


## Choix du mode de livraison

Le choix du mode de livraison d'une commande est l'une des étapes clef de l'acte de vente sur un site e-commerce. Lorsque le client doit choisir sa livraison, notre module va calculer les différents transporteur.

### Conditions des modes de livraison

Pour évaluer quels sont les modes de transports possibles pour une commande, le module va réaliser un certain nombre de vérifications sur le produit et sur l'adresse de livraison

Chacunes des règles décrites ci-dessous peuvent être combinées en fonction de vos besoins.

A la fin de ce calcul, les différents modes disponibles sont ensuite triés et regroupés : pour ne présenter que le prix le moins cher pour chaque prestataire de transport et un type de livraion (à domicile, en point relai...).

#### Dimensions du produit

Vous pouvez déterminer des dimensions maximales autorisées pour un produit dans un colis. Chaque produit est testé _indépendamment_ des autres pour vérifier que ses dimensions ne dépassent pas la taille définine. Il n'y a pas de vérification permettant de valider que l'ensemble des articles tiennent dans le colis (en essayant de les faire entrer comme un tétris), mais uniquement un test unitaire pour chaque article.

Vous pouvez aussi choisir de limiter les modes de livraison en fonction du volume :
   - soit de chaque produit si vous autorisez à effectuer plusieurs colis pour une seule commande
   - soit au total si vos expéditions sont mono-colis.
  dans tous les cas, un "facteur de calage" est disponible pour que vous puissiez prendre en compte un volume perdu pour les éléments de protection (mousse, bourrage, etc.) dans votre colis.

Il est aussi possible de définir un poids total autorisé. Dans ce cas, le poids s'entend _à l'expédition complète_.

#### Conditions spécifiques des articles

Pour chaque article, vous pouvez choisir d'interdire un ou plusieurs modes de livraison depuis sa fiche produit dans Office. Vous pouvez par exemple utiliser cette fonctionnalité pour ne pas expédier certains produits par un transporteur avec lequel vous avez déjà eu quelques soucis sur ces références.

#### Zone géographique



### Exemple de calcul

Prenons l'exemple d'une commande avec :

|Produit|Dimension|Poids|
|---|---|---|
|Produit A|100x100x100|1kg|
|Produit B|100x100x100|1kg|
|Produit C|450x100x100|5kg|

et les modes de livraisons suivant
|Livraison|Prestataire|Type|Taille maximum|Prix|
|---|---|---|---|---:|
|Petit colis par coursier|Coursier|Domicile|100x100x100, 1kg|25€|
|Colis par coursier (voiture)|Coursier|Domicile|450x200x200, 30kg|45€|
|La Poste tarif 1|La Poste|Domicile|250x250x250, 10kg|3€|
|La Poste tarif 2|La Poste|Domicile|450x450x450, 10kg|5€|
|La Poste tarif 3|La Poste|Domicile|450x450x450, 20kg|9€|
|La Poste tarif 4|La Poste|Domicile|450x450x450, 30kg|15€|
|La Poste Relais tarif 1|La Poste|Points relais|250x250x250, 10kg|2€|
|La Poste Relais tarif 2|La Poste|Points relais|450x450x450, 10kg|4€|
|La Poste Relais tarif 3|La Poste|Points relais|450x450x450, 20kg|7€|
|La Poste Relais tarif 4|La Poste|Points relais|450x450x450, 30kg|10€|

En comparant les produits avec les conditions, le site trouve les modes suivants comme compatitbles avec la commande :

- Colis par coursier (voiture)
- La Poste tarif 2
- La Poste tarif 3
- La Poste tarif 4
- La Poste Relais tarif 2
- La Poste Relais tarif 3
- La Poste Relais tarif 4

Les différents modes du même transporteur et du même type sont regroupés, et le tarif le moins élevé est présenté au client soit :

- La Poste Relais tarif 2 : 4 €
- La Poste tarif 2 : 5 €
- Colis par coursier (voiture) : 45€


