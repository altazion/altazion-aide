# Commandes simples

Les commandes simples sont utilisées lorsque le traitement d'une commande est rapide et ne demande que très peu d'opérations. C'est par exemple le cas pour des commandes passées dans un magasin et préparées directement par celui-ci.

Elles peuvent aussi être utilisées lorsque vous souhaitez envoyer les commandes dans un système informatique externe, telle qu'un ERP ou un WMS et que vous n'avez pas à suivre la progression de ces commandes passé l'envoi.

## Progression simple des commandes

Les commandes simples passent par une succession d'état au fur et à mesure de leur traitement. Ces états sont representés par un code numérique selon le principe suivant :

* 0 : la commande est en cours d'élaboration, elle n'est pas encore validée. Il s'agit de l'état par défaut des commandes qui viennent d'être créées.
* 1 : la commande est validée, prête à être traitée
* 2 : la commande est traitée, prête à être enlevée
* 3 : la commande est terminée
* 4 : la commande est archivée

Il existe aussi un état intermédiaire (127) utilisé pendant la phase de paiement. Cet état doit être considéré comme transitoire et ne pas être pris en compte.

### Passage de l'état 0 à l'état 1

Le passage entre l'état 0 et l'état 1 correspond à la validation de la commande.Il peut s'effectuer :

* En caisse : en cliquant sur l'option valider dans l'édition de la commande
* En gestion commerciale : en utilisant l'action "Valider" et en choisissant le mode "préparation manuelle".
* Via l'Api Phygitale, avec [la méthode Terminer](/technique/api/phygital/Panieretcommande/Terminer.html)
* En validant un règlement (ou en cliquant sur le bouton valider si le total est à 0) sur le module e-commerce.

Dans le cadre d'un règlement e-commerce, il est possible de voir apparaître un état 127 si le paiement n'est pas immédiat (par exemple dans le cadre d'un paiement CB via un prestataire externe, paypal, etc.).

Si vous utilisez un système de preparation automatisé ou notre module de préparation en réserve, le passage de l'état 0 à l'état 1 peut être configuré pour envoyer automatiquement la commande dans ce système.

### Passage de l'état 1 à l'état 2

Le passage entre l'état 1 et l'état 2 signifie que la commande a été traitée en local et peut être remise au client. Il est déclenché par :

* La mise en ticket d'une commande en caisse
* La remontée d'un système de préparation externe
* L'action "saisir la préparation" en gestion commerciale

### Passage de l'état 2 à l'état 3

Le passage entre l'état 2 et l'état 3 signifie que la commande est terminée et peut être archivée. Il peut être dù à :

* L'encaissement d'un ticket associé à la commande en caisse
* L'action "déclarer l'enlèvement" en caisse ou gestion commerciale

### Passage de l'état 3 à l'état 4

Les commandes sont archivées lorsque :

* vous fermez la caisse et éditez le Z
* vous cloturez une période comptable en gestion commerciale.

Une fois archivées, vous ne pouvez plus apporter de modification sur une commande. Vous pouvez toutefois réaliser des retours, reprises, SAV et toute autre opération qui ne nécessite pas de changer directement la commande.

## Envoi vers un système externe

Si vous souhaitez transmettre les données vers un système externe après leur validation, les différents états possibles ont des significations légèrement différentes :

* 0 : la commande est en cours d'élaboration
* 1 : la commande est validée
* 2 : la commande est prête à être envoyée
* 3 : la commande est envoyée et peut être considérée comme terminée
* 4 : la commande est archivée

### Progression

Les commandes passent de l'état 0 à l'état 1 selon le même principe que pour la progression ci-dessus.

Le passage entre 1 et 2 peut être configuré pour être :

* soit automatique, sans intervention humaine
* soit déclenché par le paiement d'un ticket associé à la commande (en caisse, ou via l'API [magasin](/technique/api/main/servers/cross-canals/validerpaiementsimple.html) ou centrale)

La progression entre 2 et 3 correspond à l'envoi de la commande dans le système externe et est, à ce titre, automatique.

L'archivage se fait selon les mêmes conditions que ci-dessus : lors de la cloture de la caisse ou d'une période comptable.