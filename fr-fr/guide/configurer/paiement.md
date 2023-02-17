# Modes de règlement et moyens de paiement

Altazion Office permet à l'équipe web/commerce/omnicanal de gérer les modes de règlements déjà intégrés à la solution. 

**Important** : Office traite chaque mode de règlement de façon indépendante. 
Si un prestataire propose différents modes de règlements avec un même **moyen de paiement**. (ex : CB paiement comptant ou en 3 fois sans frais), chaque mode de règlement sera indépendant.


## Ajout d'un mode de règlement
Un certain nombre de modes de règlements sont déjà présents dans Altazion et activables.
Pour les consulter/activer rendez-vous sur Paramètres - Fonctionnalités - Règlements.

Il est aussi possible d'en ajouter d'autres en utilisant notre middleware.
Le [middleware hub](https://aide.altazion.com/fr-fr/guide/architecture.html) permet d'ajouter et configurer les moyens de paiements, en général par API. 
Une fois cela fait il est possible d'activer les licences dans Office en renseignant les clés API, etc. 

Ainsi, l'équipe en charge de l'administration de l'activité commerciale peut modifier des clés API sans demander au développeur...une fois que le mode de règlement existe déjà dans Office.

## Gestion par canal de vente
Il est possible d'activer et désactiver des modes de paiement pour tous les canaux ou canal de vente par canal de vente.

_Exemple : Paypal sera activé pour les commandes vente en ligne et la marketplace mais ne sera pas activé pour les commandes avec retrait et paiement en magasin, sur les devices vendeurs et sur les bornes car peux pratique.
Le paiement par carte bancaire sera lui par contre activé pour tous les canaux, y compris les paiements dans Office._

