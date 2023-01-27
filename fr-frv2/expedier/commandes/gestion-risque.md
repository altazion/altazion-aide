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

### L'option d'annulation automatique de commandes suspectes
Une anulation automatique présente des avantages en termes de gestion : 
- Préparation de commande : la commande n'apparait pas dans les commandes en cours, donc la gestion est simplifiée et cela évite un litige.
- Gestion de stock : les produits ne sont pas destockés et restent ainsi disponibles à la vente. 
- Gestion comptable : la commande ne passe pas la cloture du jour ; le remboursement automatique, ou l'absence de débit (en fonction du mode de paiement choisi), simplifie la gestion.

**Activation de l'option d'annulation automatique**
Cette option, une fois activée permet de cloturer automatiquement les commandes à problème. 
Rendez vous dans : Paramètres - Ventes - Risque et fraude.