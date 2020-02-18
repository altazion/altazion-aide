# Synchronisation des données

L'un des principaux cas d'utilisation du serveur local est de permettre un accès rapide et résistant aux coupures de connexion Internet aux caisses et devices connectés. Pour cela, le serveur local est synchronisé avec notre plateforme hébergée, en récupère les données et y envoi l'activité réalisée en magasin.

Si les échanges de données sont bi-directionnels, ils sont toujours réalisés à la demande du serveur en magasin et ne demande aucune ouverture de port en entrée. Les processus de synchronisation ont été conçus en respectant plusieurs principes :

*   La réduction du besoin en bande passante et en volume de données, afin de ne pas pénaliser d'autres services utilisant la même connexion Internet (par exemple vos TPE)
*   La confidentialité de vos informations : tous les échanges de données sont réalisés au travers d'un lien HTTPS, utilisant des certificats à durée de vie limitée
*   L'indépendance des modules de données, permettant au serveur local de continuer à fonctionner et à mettre à jour le maximum de données même en cas d'anomalie(s) sur une partie des données

 Le processus de synchronisation est découpé en trois traitements séparés :

*   la "synchronisation complète", réalisée une à deux fois par jour
*   la récupération sur le serveur local, des modifications en cours de journée
*   l'envoi "au fil de l'eau" de l'activité du magasin

Les deux traitements "récurrents" peuvent être désactivés en fonction de vos besoins, de la bande passante disponible ou de votre souhait de confidentialité.

## Synchronisation complète

Le traitement complet est lancé une à deux fois par jour et permet de s'assurer que toutes les données sont synchronisée avec le système cloud en effectutant un "quasi-annule et remplace" sur toutes les données synchronisées conservées en local. Il se peut en effet qu'au cours d'une journée d'exploitation et pour des causes indépendantes de votre application, certaines données ne puissent être récupérées via les processus périodique. Vous pouvez, par exemple, subir une coupure Internet de plusieurs heures empêchant une partie des modifications de la journée de se répliquer sur votre serveur local.

De part le volume de données plus important qu'il manipule, le traitement de synchronisation complête est paramétré pour s'effectuer en dehors de heures d'ouvertures du magasin. Il est planifié, par défaut, une seule fois à 7h mais peut être facilement programmé à un autre horaire.

## Récupération des modifications

## Envoi de l'activité du magasin

## Volumétrie des échanges

Les volumes de données sont, bien entendu, fonction de votre base, mais voici quelques informations vous permettant d'évaluer le volume de données qui transitera :

*   La configuration et toutes les données de paramètrage : environ 100ko à chaque récupération de données
*   la partie "catalogue" : pour 5000 références produits environ 1mo en synchronisation complete et 5ko à chaque récupération de données
*   la base de données "clients et fidélité" : volumes similaires au catalogue : environ 1mo (complet) et 5ko (récupération) pour 5000 clients
*   l'animation commerciale : environ 20ko à chaque récupération de données