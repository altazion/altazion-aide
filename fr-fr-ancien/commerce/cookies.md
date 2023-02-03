# Cookies

Pour fonctionner, le module Commerce utilise un ensemble de cookies destinées à conserver des informations  lors de la navigation sur votre site e-commerce. 

## Cookies de session

Les cookies suivant sont à court terme et disparaissent après 30 minutes à 1 heure sans navigation sur le site :

|Cookie|Type|Contenu|
|---|---|---|
|ASP.NET_SessionId|Système|Contient l'identifiant de session de l'utilisateur et sert à conserver ses données en mémoire coté serveur (comme par exemple le panier)|
|ASP.NET_SessionIdCORS|Système|Second identifiant pouvant être positionné par certains composants javascript|
|ARRAffinitySameSite|Système|Utilisé par le LoadBalancer pour permettre les sticky sessions : pour diriger, autant que possible, toutes les requêtes d'un même utilisateur vers le même serveur|

## Cookies permanents

Les cookies suivant sont conservés pendant une durée plus longue : jusqu'à 1 an après la dernière navigation

|Cookie|Type|Contenu|
|---|---|---|
|_e_saved_cart|Panier|Conservé 3 mois, contient le contenu du dernier panier enregistré sur le site|
|_e_psp_guid|Commercial|Identifiant de prospect dans les opérations commerciale et co-branding|
|_e_knowledge_sessionGuid|Commercial|Identifiant de la session lors de la navigation dans une opération commerciale|
|_e_last_login|Identification|Date de dernière connexion|
|_e_ecl_guid|Identification|Contient l'identifiant interne du client, pour affichage de messages d'état de commande et pour le chatbot|

