# Gestion du risque 

## Types de risques 

La gestion du risque dans Altazion s’effectue à plusieurs niveaux :  

- Produit (avec l’indice de risque produit). 
- Au contenu de la commande (en additionnant les indices de risques de chaque produits). 
- En fonction de seuils de stocks (particulièrement utile pour la commande Ship From Store). 
- Sur l’adresse (suspicion de fraude, adresse mal renseignée par exemple, prends en compte : code postal, email, nom).  
    - Sur le compte client. Si fraudes détectées, ou multiples commandes par exemple. 
- Sur l'IP.

## Actions possibles 
- Ces différents outils permettent d’entrainer des comportements paramétrables.  
- Indication d’un risque élevé (message – alerte mail par exemple). 
- Mise en attente de la commande. 
- Annulation automatique de la commande. 

## Gestion des commandes sur adresse à risque
Ce traitement unitaire peut suspendre momentanément le traitement de la commande ou au contraire lui faire reprendre son cours normal.
Certaines commandes Web sont jugées "à risque" car l'une des 3 valeurs suivantes coincident avec des critères blacklistés : 
- le code postal, 
- l'email 
- le nom.

Dans tous les cas, cette commande fait l'objet d'une anomalie à traiter.
En fin de traitement, on appelle un utilitaire chargé de sommer l'ensemble des scores des anomalies de cette nature et de toutes les autres.
En fonction du **seuil de tolérance** fixé, la commande est alors automatiquement bloquée si cette somme est supérieure à ce seuil ou
au contraire debloquée si elle repasse sous celui-ci.

## Gestion des commandes sur article à risque
Ce traitement unitaire peut suspendre momentanément le traitement de la commande ou au contraire lui faire reprendre son cours normal.
Certains articles qualifiés de "à risque" sont pondérés par un score plus ou moins élevé en fonction du degré de risque qu'il présente.

Dans tous les cas, chaque article de ce type compris dans le panier de commande fait l'objet d'une anomalie à traiter.

En fin de traitement, on appelle un utilitaire chargé de sommer l'ensemble des scores des anomalies de cette nature et de toutes les autres.
En fonction du seuil de tolérance fixé, la commande est alors automatiquement bloquée si cette somme est supérieure à ce seuil ou
au contraire debloquée si elle repasse sous celui-ci.

## Gestion des commandes sur IP à risque
Ce traitement unitaire peut suspendre momentanément le traitement de la commande ou au contraire lui faire reprendre son cours normal.

Certaines commandes Web sont jugées "à risque" car l'adresse IP d'où elles ont été prises est black listée.

Dans tous les cas, cette commande fait l'objet d'une anomalie à traiter.

En fin de traitement, on appelle un utilitaire chargé de sommer l'ensemble des scores des anomalies de cette nature et de toutes les autres.
En fonction du seuil de tolérance fixé, la commande est alors automatiquement bloquée si cette somme est supérieure à ce seuil ou
au contraire debloquée si elle repasse sous celui-ci.
