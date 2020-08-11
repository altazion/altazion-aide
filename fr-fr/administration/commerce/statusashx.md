# Page d'état de l'application

La page d'état _admin/status.ashx_ vous permet d'obtenir des informations d'état et de configuration de l'application Commerce. Ces données vous permettront de connaitre l'état et éventuellement de détecters des erreurs de paramétrage.

![Contenu](statusashx-1.png)

## Informations affichées

Les données sont regroupées en deux grands domaines : la configuration du site et l'état du serveur.

### Pour le site

||Description|
|---|---|
|(URL) Scheme|Le protocole utilisé par la requête|
|(URL) Host|Le nom d'hôte tel que reçu par l'application|
|(ENV) Type env|Le type d'environnement dans lequel tourne l'application. Cela peut être Release (production), Debug (sur votre poste de développement), Staging (recette)|
|(ENV) Site en production|_Oui_ si votre site est accessible publiquement|
|(ENV) Checkout actig|_Oui_ si votre site accepte de prendre des commandes|






### Pour le serveur

||Description|
|---|---|
|(SERVER) Server|Le nom du serveur|
|(DB) Nombre de connexion du pool|Le nombre de connexion établies sur la base de données (max 100)|
|(ASP.Net) Sessions on StateServer|Le nombre de sessions actives.|
|(HARDRIVES) Taille totale de la file d'attente|Le nombre d'opération I/O en attente sur les disques. Un nombre élevé peut cacher un problème de surcharge du serveur|

## Authentification légère

