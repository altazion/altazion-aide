# Gestion du risque

En urgence, il est possible grâce à un paramètre bloquant d'arreter immédiatement le traitement d'une commande pour analyse.

Ce même paramètre permet naturellement de débloquer une commande en état de blocage.

Dans ses conditions, le blocage ou déblocage se fera via une action du service clientèle.

## Gestion des commandes sur adresse à risque

Ce traitement unitaire peut suspendre momentanément le traitement de la commande ou au contraire lui faire reprendre son cours normal.

Certaines commandes Web sont jugées "à risque" car l'une des 3 valeurs suivantes coincident avec des critères black listés : le code postal, l'email ou le nom.

Dans tous les cas, cette commande fait l'objet d'une anomalie à traiter.

En fin de traitement, on appelle un utilitaire chargé de sommer l'ensemble des scores des anomalies de cette nature et de toutes les autres.  
En fonction du seuil de tolérance fixé, la commande est alors automatiquement bloquée si cette somme est supérieure à ce seuil ou  
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
