# Commandes complètes

Les commandes complètes sont utilisées lorsque les processus commerciaux et logistiques sont plus complexes et intègrent une partie automatisable. Par exemple, des commandes e-commerce préparée par un e-logisticien utiliseront ce principe de fonctionnement.

## Progression des commandes

Les commandes complètes passent par une progression au travers de 8 états :

* 0 : création / entrée de la commande
* 1 : validation technique
* 2 : validation commerciale
* 3 : mise en préparation
* 4 : préparation
* 5 : prise en compte de la préparation
* 6 : finalisation de la commande
* 7 : archivage

Toutes les commandes complètes passent par l'intégralité de ces 8 étapes. Certains états sont transitoires, d'autres peuvent durer le temps d'une opération plus ou moins longue (par exemple, l'état 4 dure pendant toute la phase de préparation logistique de la commande).

## Détails des états

### Etat 0

L'état 0 correspond à la nouvelle commande. C'est le tout premier état dans lequel elle se trouve pendant toute la phase de création et se termine lors de la validation du contenu. Dans le cadre des commandes ouvertes, la commande à l'état 0 est celle en-cours, qui peut être complétée.

Une fois la commande sortie de l'état 0, le contenu, les conditions de ventes, la livraison et le mode incoterm ne sont normalement plus modifiables, ou sont du moins considéré comme acceptés par les parties.

### Etat 1

Cet état est normalement transitoire et correspond à la validation technique de la commande. Particulièrement utilisé lors de commande EDI ou e-commerce, une commande restant dans cet état plus de quelques minutes peut être considérée comme présentant une anomalie. Les traitements standards dans cet état sont principalement des vérification :

* de la cohérence du compte client
* de la cohérence des conditions de ventes
* de la présence d'un mode de règlement pour les éléments payées à la commande
* etc.

### Etat 2

Il s'agit de l'étape de vérification commerciale d'une commande. Elle peut être transitoire si toutes les conditions pour faire progresser une commande sont renseignée ou être un état d'attente demandant une intervention commerciale ou d'un évènement extérieur. C'est par exemple à cet état que seront toutes les commanes en attente d'un règlement "non immédiat" (Chèque, Virement) ou demandant une validation par le service commercial (en cas de dépassement d'en cours, par exemple).

Les traitements standards :

* Validation du compte client (vérification d'un nouveau client)
* Attente du règlement
* Gestion du risque
* Gestion de l'en-cours
* ...

### Etat 3

Cet état correspond au calcul de la préparation qu'il sera nécessaire à réaliser pour traiter la commande. Une commande ne reste dans cet état que le temps nécessaire à définir le mode de préparation de tous les articles. En sortie de ce mode, les bons de préparation, ordre de fabrication et échanges EDI permettant d'assurer le traitement et l'expédition de la commande ont été créé et sont prêts à être traités. 

> Si vous permettez la préparation partielle de commande, il est possible qu'en sortie de cet état, la commande ait été modifiée et splitée en plusieurs commandes portant le même numéro et des identifiants d'ordre différents. Cela signifie que le module de mise en préparation utilisé a déterminé que les conditions de ventes engendraient la séparation en différentes sous commandes.

### Etat 4 

Il s'agir probablement de l'état dans lequel la plupart des commandes resteront en attente : il s'agit de l'état d'attente du retour de sa préparation. Pour sortir de cet état, tous les ordres de préparation de la commande doivent être traités.

Dans la plupart des cas, cette étape consiste exclusivement en une attente de la fin des bons et autres ordres de préparation. Il est toutefois possible, en fonction, en cas de préparation partielle, que des pièces comptables (factures et avoirs) soient créées pendant cette étape pour refleter les conditions de ventes que vous avez choisi.

### Etat 5

Cet état correspond à la finalisation de la commande, de la prise en compte de la préparation. C'est dans cet état que sont gérés les reliquats, les conditions de ventes, etc. Par exemple, c'est dans cet état que sont ré-évalués les montants des règlements. Il s'agit d'un état transitoire.
Une commande qui est dans l'état 5 ou dans un état supérieur ne peut plus être annulé, elle doit être remboursée.

### Etat 6

Les commandes dans cet état, transitoire dans la plupart des cas, vont être examinées pour générer toutes les pièces comptables à réaliser : c'est dans cette phase que sont, dans les cas habituels, générés les factures, avoirs, consommation d'encours et de règlement. Les modules standards sont, par exemple :

* Facturation des commandes
* Mise en attente jusqu'à réception des colis
* Calcul de l'encours client

### Etat 7

Dernier état de la progression de la commande, l'étape 7 correspond à la fin de traitement d'une commande. Une fois cette étape commencée, la commande est considérée comme terminée et peut-être archivée.

## Préparation de commande
