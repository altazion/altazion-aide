# Planifier votre installation

Nos solutions pour le commerce sont disponibles sous 2 formes : 

* en mode "SaaS" : l'application est hébergée sur notre infrastructure
* en mode "OnPremise" : vous installez et administrez la solution sur vos serveurs

## Mode SaaS

Il s'agit de la configuration la plus simple à mettre en oeuvre : vous utilisez notre solution directement depuis notre infrastructure en vous connectant sur notre portail Web. Les données et applications sont hébergées sur nos serveurs et, tout en restant totalement privées et sécurisées, utilisent des ressources mutualisées avec d'autres clients. 

Vos applications sont disponibles avec un simple accès Internet, que vous utilisiez un navigateur web, ou l'une de nos applications pour Windows, Mac, iOS ou Android. Si vous accédez à notre solution depuis un réseau d'entreprise, [certains pré-requis seront peut-être nécessaires](saas/saas-prerequis.md) pour fonctionner dans des conditions optimales, en particulier si vous avez des mesures de sécurité spécifiques.

L'utilisation de nos solutions en mode hébergé vous permet de ne pas avoir à vous soucier de la maintenance, des sauvegardes techniques et de l'infrastructure. Nous vous conseillons toutefois **de faire des sauvegardes régulières de vos données** en utilisant les fonctions d'export proposées dans l'interface.

Le mode SaaS présente de plus l'avantage d'être mis à jour plus fréquemment avec de nouvelles fonctionnalités.

> Il existe deux solutions d'installationen environnement hybride (une partie de l'application tournant sur votre infrastructure, le reste en mode SaaS) : 
> - [le mode dit "serveur local" permettant d'optimiser les besoins en bande passante](storeserver/index.md) pour une utilisation dans un magasin ou un entrepot avec une connexion Internet moins performante, dans lequel un serveur local est utilisé pour mettre en cache les données et application.
> - [le mode hybride](onpremise/docker.md#mode-hybride) destiné à permettre l'intégration d'applicatifs OnPremise

### Applications pour vos utilisateurs

Vous pouvez choisir d'installer l'une de nos applications pour profiter de fonctionnalités supplémentaires et/ou d'une plus grande facilité d'utilisation.

|Module|Plateforme|Lien|
|---|---|---|
|Office [(plus d'infos)](/fr-fr/office/index.html)|Windows||
||Android||
|Store|Windows||
||Android||
|Signage|Windows||
||Android||
|Orchestrator picking [(plus d'infos)](/fr-fr/orchestrator/application-picking.html)|Windows||
||Android||


## Mode OnPremise

Si vous avez déjà une infrastructure informatique et souhaitez héberger nos outils sur celle-ci, vous pouvez installer nos solutions sur vos propres serveurs.

Depuis la release 20.5, la solution préférée pour ce [type de déploiement utilise des images de containers Docker](onpremise/docker.md).

### Configuration requise

Pour faire fonctionner notre solution sur votre infrastructure, vous aurez besoin de serveurs ayant les caractéristiques minimales suivantes :

Pour la *base de données* :
- OS : Windows 2016 ou plus récent
- Sql Server : Sql Server 2012 ou plus récent
- Mémoire : 8go

Pour les *serveurs de traitement* (_Orchestrator_ et/ou _Hub_) :
- OS : Windows 2016 R2 ou plus récent
- Mémoire : 4go

Pour les *serveurs back-office* (_Office_) :
- OS : Windows 2016 R2 ou plus récent
- Mémoire : 4go

Pour les *serveurs front-office* (_Commerce_ et/ou _Store_) :
- OS : Windows 2016 R2 ou plus récent
- Mémoire : 8go

Si vous souhaitez faire fonctionner plusieurs applicatifs sur le même serveur, nous vous invitons à réaliser des tests de performances avant toute mise en production.