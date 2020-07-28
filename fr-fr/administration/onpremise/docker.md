# Installation en conteneurs Docker

L'utilisation du système de container Docker est la solution à privilégier pour déployer nos applications dans votre environnement OnPremise.

## Typologies d'installation

### OnPremise

### Mode hybride

Le mode d'installation Hybride permet de réaliser une partie des traitements de façon déportée, sur votre infrastructure technique. Ce mode est à privilégier : 

- si vous avez besoin d'accèder à des serveurs privés, dans le cadre de médiations
- dans l'intégration d'un applicatif déployé OnPremise (connexion à un WMS, à un outil CRM, etc.)

Les applications suivantes sont disponibles pour une utilisation en mode hybride :

- _Orchestrator_ : le mode hybride vous permet d'utiliser des [médiations](../edi/index.md) ou des modules d'extensions ayant besoin d'accèder à des ressources uniquement disponibles sur votre infrastructures. Par exemple : déposer des fichiers d'export comptable sur un serveur de fichier interne, notifier un applicatif maison lors de la validation d'une commandes, etc.
- _Hub_ : en configuration hybride, vous pouvez faire fonctionner une intégration technique demandant la connexion à un service uniquement disponible sur votre infrastructure. Par exemple : interconnecter nos solutions avec un repository CRM local.


> [!IMPORTANT]
> L'utilisation du mode Hybride n'est possible que pour nos clients ayant souscrit au niveau d'abonnement _Entreprise_.

## Repositories Docker Hub

### Serveur Orchestrator

Orchestrator est notre ordonnanceur de tâche. Il combine à la fois un OMS, et un système de _scheduling_ de tâches.

Il est disponible sur Docker Hub, à l'adresse : https://hub.docker.com/r/altazion/orchestrator.

### Serveur Hub

Basé sur Orchestrator, la version _OnPremise_ d'Altazion Hub, complète les fonctionnalités d'ordonnanceur avec un module Middleware.

Aucune version de Hub n'est actuellement disponible sur des repositories publiques de containers. Pour obtenir une version, merci de vous rapprocher de notre service technique.

### Altazion Office

> [!WARNING]
> Ce module n'est pas compatible avec le mode Hybride.

L'installation du module de gestion commerciale et back-office est probablement la plus simple.

Adresse de l'image : https://hub.docker.com/r/altazion/office

Vous devrez passer une information lors du lancement du container :

- un volume contenant le [dossier de configuration](configuration.md) de votre installation, à mapper sur le dossier c:\programdata\cpoint\

Vous devez aussi déterminer le port de sortie de l'application.

```powershell
docker run -v c:\programdata\cpoint\:c:\programdata\cpoint\ -d -p 8000:80 altazion/office:latest
```

### Altazion Commerce

> [!WARNING]
> Ce module n'est pas compatible avec le mode Hybride.


### Altazion Store & Signage

> [!WARNING]
> Ce module n'est pas compatible avec le mode Hybride.
