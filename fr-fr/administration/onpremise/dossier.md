# Dossiers


### Dossiers applicatifs

Lors la mise en place d’une solution \[e\], chaque rôle utilise un dossier spécifique, qui peut être changé lors de l’installation. Vous trouverez les chemins par défaut dans le tableau ci-dessous. Ces dossiers sont entièrement gérés par nos outils et ne doivent en aucun cas être modifiés une fois l'installation terminée.

|Module|Dossier d'installaton|
|---|---|
|Serveur Gestion commerciale|{Program\_files}\\CPoint\\\[e\]\\services|
|Serveur e-commerce|{Program\_files}\\CPoint\\\[e\]\\ecommerce|
|Serveur logistique|{Program\_files}\\CPoint\\\[e\]\\logistique|

### Dossiers de solution

La personnalisation de la solution effectuée par nos services est installée dans d’autres dossiers. Ceux-ci complètent les dossiers applicatifs et ne doivent être modifiés qu’avec l’accord de nos services. 

|Module|Chemin| 
|---|---|
|Configuration générale|{Common\_AppData}\\Cpoint\\\[e\]\\bin\\config|
|Serveur Gestion commerciale|{Common\_AppData}\\CPoint\\\[e\]\\bin\\service|
|Serveur e-commerce|{Common\_AppData}\\CPoint\\\[e\]\\bin\\ecommerce|
|Serveur logistique|{Common\_AppData}\\CPoint\\\[e\]\\bin\\logistique|

### Dossiers d'extensibilité

Si vous avez développé des éléments personnalisés (modules, modèles de documents, etc.), vous pouvez utiliser le dossier d’extensibilité pour les déployer. L’ajout d’un module ou d’un document dans l’un de ses sous-dossiers le rend accessible par nos applicatifs.

|Module|Chemin|
|---|---|
|Serveur Gestion commerciale|{Common\_AppData}\\CPoint\\\[e\]\\extensibility\\services|
|Serveur e-commerce|{Common\_AppData}\\CPoint\\\[e\]\\extensibility\\ecommerce|
|Serveur logistique|{Common\_AppData}\\CPoint\\\[e\]\\extensibility\\logistique|

### PROGRAMMES CLIENTS

Les dossiers des différentes applications clientes suivent les règles habituelles de déploiement d’applications sous Windows. Vous trouverez donc celles-ci :

* Soit dans le sous-dossier {Program\_files}\\CPoint\\\[e\]\\ si vous effectuez une installation « par machine »
* Soit dans le sous-dossier {Local\_AppData}\\CPoint\\\[e\]\\ dans le cadre d’un déploiement « par utilisateur »

### MISES A JOUR

Si vous avez opté pour un déploiement de type « par utilisateurs », les mises à jour de vos postes clients peuvent être centralisées. La mise à disposition d’un fichier  « .\[e\]-update » dans l’un des dossiers suivants permettra le déploiement automatique de celui-ci :

|Application|Dossier|
|---|---|
|Poste client (Gestion commerciale, logistique, Point de vente)|{Common\_AppData}\\CPoint\\\[e\]\\updates\\client|
|Moniteur d’activité|{Common\_AppData}\\CPoint\\\[e\]\\updates\\activity|

Si votre serveur est connecté à Internet et que votre contrat de mise à jour est activé, ces dossiers sont gérés automatiquement par nos services (téléchargement automatique des correctifs, mise à disposition de nouvelles fonctionnalités, etc.).

## Données

Les dossiers dans lesquels sont mises à disposition ou prélevées les données (hormis la base SQL Serveur), sont personnalisables au travers d’une stratégie ActiveDirectory. Les chemins donnés dans ce document correspondent aux valeurs par défaut.

### Base de données

Si vous n’avez pas opté pour l’installation du rôle « Serveur de base de données » mais avez utilisé une instance SQLServer déjà disponible dans votre entreprise, la gestion des fichiers des différentes bases de données et leurs sauvegardes n’est pas assurée par notre solution.

Le rôle « Serveur de base de données » crée trois bases de données dans le dossier par défaut suivant (vous pouvez personnaliser celui-ci pendant l’installation, mais toute modification ultérieure devra être réalisée par votre DBA sous la supervision de nos services) :

||Dossier
|---|---|
|Base de données|{Common\_AppData}\\CPoint\\\[e\]\\data\\db|

Ces bases de données sont sauvegardées selon un rythme paramétrable dans les dossiers suivants :

||Dossier|
|---|---|
|Sauvegarde intégrale|{Common\_AppData}\\CPoint\\\[e\]\\data\\dbbackup|
|Sauvegarde des journaux SQL (pour restauration rapide en cas d’anomalie)|{Common\_AppData}\\CPoint\\\[e\]\\data\\logbackup|

### Documents comptables

Si vous avez opté pour la génération de documents (PDF, XPS) lors de la création d’un document comptable (Facture, devis, avoirs, etc.), vous les trouverez dans le dossier suivant, sur le serveur abritant le rôle « Serveur Gestion Commerciale ».

Documents contractuels ou légaux (Factures, Avoirs…)

`{Common\_AppData}\\CPoint\\\[e\]\\data\\legal\\{Type}`  
(Chaque type de document possède son propre sous dossier) 

Autres documents (par exemple : tarifs, relances…)

`{Common\_AppData}\\CPoint\\\[e\]\\data\\documents\\{Type}`  
(Chaque type de document possède son propre sous dossier) 

### Fichiers d'échanges

Les fichiers d’échanges sont regroupés dans deux dossiers (en fonction du fait que vous soyez expéditeur ou destinataire de celui-ci). Dans chacun de ceux-ci, vous trouverez des sous-dossiers correspondant à chaque fonction. Veuillez vous reporter à la documentation de celle-ci pour plus d’informations.

Fichiers sortants

{Common\_AppData}\\CPoint\\\[e\]\\data\\in\\ 

Fichiers entrants

{Common\_AppData}\\CPoint\\\[e\]\\data\\out\\

### Fichiers journaux/traces

Les journaux contenant la liste des opérations réalisées par chacun des modules de votre solution sont déposés dans les dossiers suivants. Seul le fichier « courant » est disponible sous la forme d’un fichier texte ou Xml, les autres sont archivés sous forme compressée.

|Module|Dossier|
|---|---|
|Gestion commerciale|{Common\_AppData}\\CPoint\\\[e\]\\services\\logs|
|Logistique et serveur de traitement|{Common\_AppData}\\CPoint\\\[e\]\\logistique\\logs|
|Point de ventes|{Common\_AppData}\\CPoint\\\[e\]\\POSCentral\\logs|
|e-commerce|{Common\_AppData}\\CPoint\\\[e\]\\ecommerce\\logs|