# Commandes inter-structures

Les commandes inter-structures sont destinées à enregistrer des commandes passées entre deux magasins ou entre centrale et magasin. Elles peuvent aussi bien recouvrir des commandes qui seront directement retirées par le client dans le magasin destinataire que des demandes de déplacement de stocks vers le demandeur.

Lorsque les commandes sont traitées comme des réservations dans un magasin destinataire, chaque commande peut recevoir des informations clients sous la forme :

* d’un identifiant de compte client existant
* des coordonnées du client pour les clients de passage

## Progression des états

 Chaque commande passe par 5 états successifs :

* 0 : la commande vient d’être passée
* 1 : la commande a été prise en compte par le magasin de destination, et va être préparée
* 2 : la commande est prête à être enlevée
* 3 : la commande est enlevée
* 4 : la commande est archivée

Les commandes inter-structures supportent des opérations d'automatisation simples, en réponse aux changements d'états. Chaque modification d'état d'une commande déclenche un [évènement de type EvolutionCommandeInterne](fr-fr/administration/personnalisation/evenements/ventes/evolcdeinterne.html).

### Passage à l'état 1

Le passage à l'état 1 correspond à l'acceptation, par le magasin destinataire, de la commande. Elle peut s'effectuer :

* sur la caisse ou un poste logistique, en acceptant la commande et/ou en éditant son bordereau
* via le suivi des commandes dans la gestion commerciale

### Passage à l'état 2

Une commande passe à l'état 2 s'effectue lorsque la commande est marquée comme préparée. Cela peut être fait :

* via la cloture de l'ordre de préparation sur un poste logistique
* ou la saisie des articles préparé en caisse ou en gestion commerciale

### Passage à l'état 3

Vous pouvez faire passer une commande à l'état 3 en déclarant la commande enlevée en caisse ou en gestion commerciale

### Passage à l'état 4

Les commandes ayant déjà atteint l'état 3 sont archivées lorsque :

* vous fermez la caisse et éditez le Z
* vous cloturez une période comptable en gestion commerciale.

Une fois archivées, vous ne pouvez plus apporter de modification sur une commande. Vous pouvez toutefois réaliser des retours, reprises, SAV et toute autre opération qui ne nécessite pas de changer directement la commande.