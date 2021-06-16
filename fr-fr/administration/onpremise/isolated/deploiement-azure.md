# Déploiement sous Azure

## Base de données

## Composants applicatifs

### Outils web

Nos outils webs, qu'il s'agisse de Front Office (Store, Signage, Commerce) ou de Back Office (Office), sont déployé sous forme d'applications IIS. Le meilleur choix pour déployer sur Azure est d'utiliser [Azure Web App](https://azure.microsoft.com/fr-fr/services/app-service/web/) :
- soit avec des packages de déploiement. (Dans ce cas, nous vous invitons à prendre contact avec notre service technique)
- soit directement avec les [images docker sur Docker Hub](https://hub.docker.com/u/altazion)


### Batchs et modules d'échanges

Pour déployer des composants Orchestator ou Hub, vous devrez utiliser un environnement Docker hébergé :
- [Azure Container Instances](https://azure.microsoft.com/fr-fr/services/container-instances/)
- ou [Azure Kubernetes](https://azure.microsoft.com/fr-fr/services/kubernetes-service/)

## Configuration 

### Service par service

Vous pouvez définir les paramètres et chaines de connexion au niveau de la configuration WebApp :

![Configuration](deploiement-azure-webappconfig-1.PNG)

#### Office

Vous aurez besoin des informations suivantes, à placer dans les chaines de connexion :

|Nom|Valeur|
|---|---|
|`ApplicationServices`|La chaine de connexion permettant d'accèder à votre compte Azure App Configuration|
|`ApplicationServices`|La chaine de connexion pour un compte Azure Blob Storage, afin de conserver les fichiers|

#### Commerce, Store & Signage

Vous aurez besoin des informations suivantes, à placer dans les chaines de connexion :

|Nom|Valeur|
|---|---|
|`ApplicationServices`|La chaine de connexion permettant d'accèder à votre compte Azure App Configuration|

#### Orchestrator

Vous aurez besoin des informations suivantes, à ajouter sur chaque process K8S utilisant des modules Orchestrator, sous forme de variables d'environnement :

|Nom|Valeur|
|---|---|
|`ApplicationServices`|La chaine de connexion permettant d'accèder à votre compte Azure App Configuration|
|`ServiceBus`|La chaine de connexion pour un compte Service Bus permettant de gérer les évènements de la solution|

#### Hub

Vous aurez besoin des informations suivantes, à placer dans les chaines de connexion :

|Nom|Valeur|
|---|---|
|`ApplicationServices`|La chaine de connexion permettant d'accèder à votre compte Azure App Configuration|
|`ServiceBus`|La chaine de connexion pour un compte Service Bus permettant de gérer les évènements de la solution|


### Configuration centralisée

Vous pouvez utiliser [Azure App Configuration](https://azure.microsoft.com/fr-fr/services/app-configuration/) pour conserver toutes vos informations de connexion dans un seul service.

Dans ce cas, vous devez configurer deux choses :

1. pour chaque service, en remplacement de ce que vous avez pu lire dans le chapitre précédent, vous devrez configurer un et un seul paramètre applicatif (à placer dans la partie "Parmètres d'application" et non dans l'emplacement du chapitre précédent) :

|Nom|Valeur|
|---|---|
|`Azure_AppConfig`|La chaine de connexion permettant d'accèder à votre compte Azure App Configuration|

2. puis, dans Azure App Configuration, vous pourrez ajouter les settings suivants, en fonction des modules que vous utilisez

|Nom|Module(s)|Valeur|
|---|---|---|
|`Altazion:MainDbConnectionString`|Tous|**(obligatoire)** La chaine de connexion à votre base de données SQL Azure, avec un compte utilisateur ayant un niveau minimal de `db_e_user`|
|`Altazion:CommerceDbConnectionString`|Commerce & Store & Signage|Une chaine de connexion à votre base de données SQL Azure, avec un compte utilisateur ayant le niveau `db_ecommerce`. Si vous ne renseignez pas ce paramètre, les modules utiliseront la chaine du paramètre `Altazion:MainDbConnectionString`|
|`Altazion:ServiceBusConnectionString`|Orchestrator|**(obligatoire)** La chaine de connexion pour un compte Service Bus permettant de gérer les évènements de la solution|
|`Altazion:BloblStorageConnectionString`|Office| La chaine de connexion pour un compte Azure Blob Storage, afin de conserver les fichiers|

3. Attention, pour les modules Orchestrator et Hub, ou tout composant utilisant ces modules, la chaine de connexion à Azure App Config doit être passé sous forme d'une variable d'environnement :

|Nom|Valeur|
|---|---|
|`AZURE_APPCONFIG`|La chaine de connexion permettant d'accèder à votre compte Azure App Configuration|
