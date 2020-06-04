# Traces applicatives

L'utilisation de nos solutions en OnPremise génère des traces d'utilisations et d'erreurs que vous pouvez consulter. Les logs sont regroupés en fonction de l'application qui les génère. Chaque application de la solution a son propre dosier de traces, [situé dans un sous-dossier spécifique](dossier.md#fichiers-journauxtraces).

## Fichiers des logs

Les fichiers de logs sont regroupés en plusieurs ensembles de fichiers :

1. Les fichiers d'erreurs, journaliers, regroupent toutes les traces ... d'erreurs... mais aussi les warnings. Ils sont nommés sous la forme `err_{date:yyyyMMdd}.log`

2. les fichiers généraux sont eux splitté en fichier horaire et contiennent toutes les traces, quelques soit le niveau de criticité. Ils sont nommés `infos_{date:yyyyMMdd}-{date:HH}.log`

3. vous pouvez aussi ajouter des fichiers de logs spécifiques (ils seront forcément au format "horaire"), cf. un peu plus bas.

### Format

En mode OnPremise, les fichiers suivent les spécificités suivantes :
- au format "texte délimité", le caractère de séparation entre colonne étant le pipe  `|`
- encodé en format Windows "de base"
- une ligne par trace, les passages à la ligne dans la trace étant remplacés par des espaces

Les différentes colonnes sont :
- date & heure au format yyyy-MM-dd HH:mm:ss
- le type de trace : info, erreur, warning,critique (pour erreur critique)
- l'id du process de l'OS, sous la forme pid:xxxx ou xxxx est l'identifiant du process
- la "zone applicative" dans laquelle s'est déroulée la trace ou "-" pour des traces générales
- la trace en elle même

exemple :
``` text
2019-04-09 19:17:52|info|pid:26528|Init|Redirection du dossier de configuration vers C:\ProgramData\CPoint\[e]\bin\config|
2019-04-09 19:17:53|info|pid:26528|-|Copie des extensions MEF depuis C:\ProgramData\CPoint\[e]\bin\logistique\assemblies vers C:\ProgramData\CPoint\[e]\bin\logistique\runningInstance\26528\assemblies|
2019-04-09 19:17:53|info|pid:26528|-|Copie des extensions MEF depuis C:\ProgramData\CPoint\[e]\extensibility\logistique\assemblies vers C:\ProgramData\CPoint\[e]\extensibility\logistique\runningInstance\26528\assemblies|
```

## Centralisation

Destiné à être utilisé dans un environnement avec LoadBalancing ou avec plusieurs serveurs répartis par rôle, la fonctionnalité de centralisation des logs permet de regrouper dans un seul dossier "réseau", les logs provenant d'un ensemble de machine. 

### Activer la centralisation

Si vous activez la centralisation des logs, ceux-ci sont déplacés, après 2h, du dossier décrit ci-dessus, vers un dossier configurable. En complément de la centralisation, il est possible d'activer un processus de compression et de suppression automatique après un certain délai.

Pour configurer la centralisation des logs, vous devez définir l'option suivante pour la raison juridique d'id 1 en base de données :

Section|Groupe|Option|Valeur
---|---|---|---
System|Logs|PathCentralisation|_{le dossier dans lequel centraliser}_

Vous devez préciser le dossier sous la forme d'un path accessible pour l'utilisateur sous lequel tourne le service OnPremise. Si vous utilisez un lecteur partagé, par exemple, assurez vous que le mapping soit bien disponible et monté automatiquement. **Dans la mesure du possible, il est plus pratique d'utiliser un path UNC (sous la forme `\\server\nom_du_partage`).**

Par exemple, avec le module d'administration Powershell :

```Powershell
> Import-Module Altazion


> Connect-AltazionServer -ServerUrl *** -Username *** -Password ***

Id Name
-- ----
 1 Compte de test

> Set-AltazionSysOption -Section System -Group Logs -Option PathCentralisation 
       -Value '\\monserver\logs'

Section Group Option             Value
------- ----- ------             -----
System  Logs  PathCentralisation \\monserver\logs
```
