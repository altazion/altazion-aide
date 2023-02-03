# Mise en préparation

Orchestrator vous permet d'appliquer des règles personnalisables pour définir le process de préparation logistique de vos commandes clients.

Lorsqu'une commande est prise en charge par le mode de mise en préparation, elle est examinée et les produits dont placés dans plusieurs groupes :

- ceux dont la préparation est forcément "en magasin" (tels que des produits e-reservés)
- ceux dont la préparation est "forcément externalisée" (dans le cadre d'un Drop Shipping ou d'une Livraison Direct Domicile par un fournisseur)
- ceux dont la préparation peut être réalisée par plusieurs canaux.

Une fois ce regroupement fait, le système applique un certain nombre de règles, que vous pourrez prioriser et/ou désactiver pour déterminer comme doivent être répartis, de façon définitive, les articles.

Il existe plusieurs règles standards :

* Privilégier le minimum d'opérateurs
* Privilégier les magasins
* Préparer en centrale

Vous pouvez aussi utiliser notre [plateforme d'extensibilité pour développer vos propres règles](https://www.altazion.dev/orchestrator/rules/index.html#ecrire-des-r%C3%A8gles-personnalis%C3%A9es).

Chacune des règles engendrera une ensemble de possibilités de préparation auxquelles seront affectés des scores :

* de coût
* de délai
* de complexité (nombre de colis à suivre)
* de marge
* de priorité de la règle

Il vous faudra ensuite déterminer quels sont les scores les plus pertinents à prendre en compte pour choisir la meilleure solution.

> [!NOTE]
> Le résultat de ces règles peut être enregistré et/ou envoyé à un système externe pour déporter l'arbitrage. 
>
> Vous pouvez, par exemple, vous servir de cet échanges de données pour mettre en place un système de compétition entre les différents acteurs qui auront été détectés pendant la phase de calcul.

## Privilégier le minimum d'opérateurs

Cette règle cherche à regrouper au maximum les articles afin réduire le nombre d'ordres de préparation au strict minimum.

Dans ce cadre, les produits vont être de nouveau examinés pour essayer de minimiser le nombre de groupes. Les produits "à répartir" sont les premiers a être testés pour une répartition dans les autres groupes.

## Privilégier les magasins

Cette règle cherche à maximiser les produits qui seront préparés en magasin et à éviter

Si la partie "magasin" est vide, des essais de répartition sont établis :
- dans les magasins les plus proches du lieu de livraison
- dans les magasins ayant les plus gros stocks des produits commandés.

Si la partie "magasin" ne l'est pas (c'est à dire si certain produits sont déjà en "reservation sur le stock d'un magasin"), les règles sont adaptées afin de privilégier le magasins déjà choisi, complété éventuellement des magasins alentour.

## Préparer en centrale

Cette règle est la règle la plus simple : tous les produits restant à réparatir sont marqués pour une préparation sur le mode de préparation principal "de la centrale".
