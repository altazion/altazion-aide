# Gestion des disponibilités

## Sources des produits

Que vous utilisiez un stock propre, du drop shipping ou d'autres formes de sourcing, Orchestrator vous permet de gérer les disponibilités de vos produits de façon centralisée, en combinant les informations de chacune de ces sources.

Nos solutions gèrent cinq grands ensembles de sourcing produit :

- les produits immatériels (services, téléchargements, assurances, etc.)
- les produits en stock _propre_ ou _externalisé_
- les produits en drop-shipping
- les produits fabriqués à la demande
- les produits disponibles en réseau de magasin

> [!NOTE]
> Si vous utilisez les services d'un tiers pour la préparation de vos commandes vous pouvez choisir entre le mode _stocks externalisés_ et le mode _drop shipping_ en fonction de vos besoins et de l'entité propriétaire du stock. 
>
> Si ces deux modes semblent assez similaires en termes de gestion de la disponibilité et de la préparations, ils ont de très grandes différences en termes de responsabilité et de conséquences comptables, financières et sanitaires.
> 
> Une fois le mode choisi, il est assez complexe d'en changer, n'hésitez pas à solliciter notre équipe pour vous conseiller.

### Produits immatériels

TODO : à rédiger

### Stocks centraux

La préparation sur stocks est probablement le mode le plus fréquent : vous maintenez un stock de vos produits et réalisez les entrées/sorties en fonction de vos ventes et de vos ré-approvisionnements.

Notre module vous permet de gérer des stocks mono ou multi-dépot(s) et de définir des zones de stockage avec des niveaux de disponibilités différents.

Prenons un exemple à deux dépots :

![Plan deux dépots](images/oms-dispos-stockscentraux-1.PNG)

* dans le dépot A :

    - les produits de la Zone 1 (Picking) sont disponibles
    - ceux se trouvant en Zone 2 demandent un transfert entre deux batiments et donc un temps non négligeable et sont donc considérés comme non dispo
    - les produits dans la Zone 3 (Sav et Défecteux) sont en attente de renvoi au fournisseur, réparation ou destruction et sont donc non disponibles.

* dans le dépot B :

    - les produits de la Zone 1 sont disponibles
    - les produits de la Zone 2 sont facilement transférable en picking et peuvent donc être considérés comme dispos.

Ce qui donne par exemple :

**Dépot A**

|Produit|Qté. Z.1|Qté. Z.2|Qté. Z.3|Disponible|
|---|---:|---:|---:|---:|
|Produit A|4||_1_|4|
|Produit B||_2_||0|
|Produit C|2|_6_||2|

**Dépot B**

|Produit|Qté. Z.1|Qté. Z.2|Disponible|
|---|---:|---:|---:|
|Produit A|4||4|
|Produit B||2|2|
|Produit C|3|20|23|

#### Stocks externalisés

Si vous faites appel à un e-logisticien


### Stocks Magasins

Si vous n'utilisez pas nous outils pour la gestion de vos magasins, vous pouvez facilement importer vos stocks magasins via EDI, en suivant [le format de fichier des imports de stocks](../administration/edi/logistique/stockstocks.md).

### Drop shipping


### Fabrication


## Disponibilités par canaux

Activez la _gestion des disponibilités par canaux_ pour pouvoir définir des règles différentes en fonction du canal utilisé pour réaliser la vente. Vous pouvez par exemple :
- Définir des seuils de visibilités distincts en e-commerce et en extension de gamme sur bornes
- N'envoyer qu'une partie de votre stock dans les informations de disponibilités pour une marketplace
- Effectuer une réservation de stock destinée à un canal de vente particulier.

### Gérer la disponibilité par canal

Pour définir les seuils de disponibilités et de visibilité d'un canal spécifique, il vous suffit d'ouvrir le dossier article de l'article souhaité dans _Altazion Office_, puis de cliquer sur **Modifier** > **Canaux de ventes** et choisir le canal à modifier.

![Menu modifier](images/oms-dispos-parcanal-1.PNG)

Vous pourrez ensuite, en fonction du canal, modifier les seuils :

- de _disponibilité_ : si la quantité disponible passe sous ce seuil, le produit sera marqué comme "Non disponible"
- de _dépublication_ : en dessous de ce seuil, l'article est automatiquement dépublié (et donc rendu totalement invisible) du canal

![Seuils (exemple e-commerce)](images/oms-dispos-parcanal-2.PNG)

Vous pourrez aussi modifier d'autres seuils dans cette même page :

- de _maximum commandable_ : ce seuil permet de définir le quantité maximale achetable en une seule commande. En fonction du paramétrage du module, cela peut s'étendre au maximum commandable par période pour un seul et même client.
- de _pré-commande_ : si vous proposez la possibilité de réaliser des pré-commandes, ce seuil vous permet de définir la quantité maximale que vous pouvez proposer avant la date de sortie définie. Une fois ce seuil dépassé, le produit sera "Non disponible" jusqu'à la date de sortie, puis suivra les seuils "normaux".

## Intégrations

=> EDI
=> interne
=> via Hub (prendre exemple retail reload)
