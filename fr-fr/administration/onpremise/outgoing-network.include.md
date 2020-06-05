Si vous hébergez vos images, videos et documents sur notre plateforme hebergée, vous aurez aussi besoin d'ouvrir l'accès au service de stockage de données :

* Protocole de communication : **HTTPS**
* Port : **443**
* nom du serveur : **simplementedata.blob.core.windows.net**

Pour nous permettre de répondre plus rapidement en cas d'anomalie constatée, les deux ouvertures de port en sortie _facultatifs_ suivants sont recommandées :

* protocole : **HTTPS**
* Port : **443**
* serveurs : **http-intake.logs.datadoghq.eu**, **http-intake.logs.datadoghq.com** et **koostodesapp-ns.servicebus.windows.net**

### Modules e-commerce & signage

Ces deux modules pouvant incorporer des appels APIs vers des services tiers, il est important de laisser ceux-ci avoir un accès le plus libre possible à Internet. La liste des adresses en sorties seraient très longue à établir et pourrait changer sans notification en fonction des services externes. Les appels réalisées par ces modules tombent dans les catégories suivantes :

- plateformes de paiement telles que SIPS, Adyen, Paypal, etc.
- services de recherche (Azure Search, Doofinder, Algolia)
- outils logistiques (recherche de point relais, de tarifs de livraison, etc.)
- Outils CRM
- Tag de tracking
