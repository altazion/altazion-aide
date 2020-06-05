# Module d'administration Powershell

Avant de pouvoir administrer votre solution via Powershell, vous devrez installer et configurer votre environnement. Deux grandes étapes :

1) Installer le module Powershell
2) Configurer la connexion à votre environnement

## Installation du module

Powershell contient une notion de "repository" dans lequel sont mis à disposition les modules.Il en existe quelques unes publiques, et vous pouvez créer votre propre espace de distribution si vous le souhaitez. Pour faciliter l'installation, notre module pour Altazion est disponible en tant que package sur Powershell Gallery (https://www.powershellgallery.com/), la repository "officielle" de Microsoft. Vous pouvez utiliser les commandes standards de Powershell 5+ pour mettre en place facilement votre environnement.

Si vous ne l'avez pas encore fait, vous pouvez ajouter PSGallery à la liste des repositories de confiance avec la commande :

```powershell
Set-PSRepository -Name 'PSGallery' -InstallationPolicy Trusted
```

Vous pouvez aussi, bien évidemment, ne pas autoriser intégralement PSGallery, vous serez alors amené à confirmer votre approbation lors des commandes d'installation et/ou de mise à jour des modules qui y sont publiés.

Pour installer le module Altazion, il vous suffit d'utiliser les Cmdlet Install-Module et Import-Module.

```powershell
Install-Module Altazion -Scope CurrentUser
Import-Module Altazion
```

## Connexion à votre environnement

Pour tous les scripts ou presque, vous aurez besoin d'être connecté à votre compte utilisateur Altazion. La commande Connect-AltazionServer vous permet d'établir facilement cette connexion et de sauvegarder automatiquement les identifiants. Vous pouvez utiliser l'une ou l'autres des deux syntaxes suivantes :

- en utilisant une boite de dialogue de saisie des identifiants :    
    ```powershell
    $cred = Get-Credential
    Connect-AltazionServer -Credentials $cred
    ```
    
- en saisissant directement vos identifiants dans la ligne de commande :
    ```powershell
    Connect-AltazionServer -Username administrateur@altazion-learning.com -Password '<<password>>'
    ```

## En savoir plus...

* [Liste des cmdlets disponibles](cmdlets.md)