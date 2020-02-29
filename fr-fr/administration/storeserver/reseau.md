# Pré-requis Infrastructure

Le serveur local a été conçu de façon à limiter les besoins en ouverture de port et la surface d'attaque potentiel qu'elles entrainent. Tous les échanges avec l'extérieur de votre magasin réalisés par nos applications utilisent un protocole unique, sur un port unique : ils sont tous réalisés via le protocole HTTPS.

## Configuration réseau "externe" (WAN)

Pour synchroniser les données, le serveur local doit pouvoir accèder au service de synchronisation de notre plateforme hébergée, situé sur notre serveur API :

* Protocole de communication : **HTTPS**
* Port : **443**
* Nom du serveur Cloud : **api.server.commerce-hub.io**

Si vous souhaitez utiliser notre service d'envoi direct de commande en magasin, vous devrez ajouter le service Azure Service Bus :

* Protocole de communication : **HTTPS**
* Port : **443**
* Nom du serveur Cloud : **e-serversync-ns.servicebus.windows.net**

Si vous hébergez vos images, videos et documents sur notre plateforme hebergée, vous aurez aussi besoin d'ouvrir l'accès au service de stockage de données :

* Protocole de communication : **HTTPS**
* Port : **443**
* nom du serveur : **simplementedata.blob.core.windows.net**

Pour nous permettre de répondre plus rapidement en cas d'anomalie constatée, les deux ouvertures de port en sortie _facultatifs_ suivants sont recommandées :

* protocole : **HTTPS**
* Port : **443**
* serveurs : **api.logmatic.io** et **koostodesapp-ns.servicebus.windows.net**

### Configuration avec un proxy

Tous ces processus peuvent être configurés pour utiliser un proxy.

## Configuration réseau interne (LAN)

La configuration réseau interne est un peu plus complète puisque le serveur local fourni un ensemble de service à vos différents périphériques magasin. Toutefois, dans la plupart des cas, vous n'aurez pas besoin de configurer quoique ce soit : les échanges étant souvent sans restriction au travers d'un même LAN.

Toutefois, si vous avez besoin de configurer le réseau local, le serveur utilise les ports et protocoles suivants :

_En entrée (LAN vers le serveur)_

* pour les services applicatifs : protocole **HTTP** (en **TCP**) sur le port **80** ainsi que sur les ports **8000 à 8005**
* pour la découverte automatique : en **UDP**, sur le port **57854** (non obligatoire)

_En sortie (serveur vers le LAN)_

* pour l'envoi d'ordres aux différents devices : en **TCP**, sur le port **8081**
* pour la découverte automatique : en **UDP**, sur le port **57854** (non obligatoire)