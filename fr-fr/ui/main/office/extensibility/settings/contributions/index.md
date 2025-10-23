# Guide d'utilisation - Gestion des contributions personnalisées

## Objectif
Cet écran permet de gérer les contributions personnalisées, qui sont des modules d'extension au format JSON permettant d'ajouter des fonctionnalités ou de modifier le comportement d'Altazion Office.

## Page de liste des contributions

### Affichage des contributions

- **Liste complète** : Affiche toutes les contributions configurées avec leurs informations principales
- **Colonnes affichées** :
  - **GUID** : Identifiant unique de la contribution (format code)
  - **Statut** : Indique si la contribution est configurée (avec du contenu JSON) ou vide
    - Badge vert "Configuré" : La contribution contient du code JSON
    - Badge gris "Vide" : La contribution n'a pas encore de contenu

### Actions disponibles

- **Créer une nouvelle contribution** :
  - Bouton "Nouvelle contribution" en haut à gauche de la liste
  - Ouvre un formulaire vierge pour saisir le code JSON
  - Désactivé si l'extensibilité n'est pas active

- **Consulter une contribution** :
  - Double-cliquer sur une ligne
  - Ou cliquer sur le bouton avec l'icône d'œil à droite de chaque ligne
  - Ou utiliser le menu contextuel (⋮) et sélectionner "Consulter"
  - Raccourci clavier : `Entrée`

- **Modifier une contribution** :
  - Menu contextuel (⋮) puis "Modifier"
  - Raccourci clavier : `F2`
  - Ouvre l'éditeur avec le contenu JSON de la contribution
  - Désactivé si l'extensibilité n'est pas active

- **Supprimer une contribution** :
  - Menu contextuel (⋮) puis "Supprimer"
  - Une confirmation est demandée avant suppression
  - Action irréversible
  - Désactivé si l'extensibilité n'est pas active

### États de la liste

- **Chargement initial** : Un indicateur de chargement s'affiche pendant la récupération des données
- **Liste vide** : Un message explicatif s'affiche si aucune contribution n'existe
- **Erreur** : En cas de problème, un message d'erreur détaillé s'affiche en haut de la liste

### Mode désactivé

Lorsque l'extensibilité est désactivée :
- La liste reste consultable
- Les actions de création, modification et suppression sont désactivées
- Un overlay visuel indique que l'extensibilité doit être activée pour effectuer des modifications

## Page de création/modification d'une contribution

### Modes de fonctionnement

- **Mode création** : Formulaire vierge avec un JSON par défaut vide (`{}`)
- **Mode édition** : Formulaire pré-rempli avec le contenu JSON existant de la contribution sélectionnée

### Éditeur de code JSON

- **Syntaxe JSON** : Éditeur spécialisé avec coloration syntaxique pour le format JSON
- **Validation** : La structure JSON est automatiquement validée pendant la saisie
- **Modification détectée** : Le système détecte automatiquement si des changements ont été effectués
- **Sauvegarde intelligente** : Le bouton "Enregistrer" est actif uniquement si des modifications sont présentes

### Aide contextuelle

- **Schéma JSON** : Une section dépliable affiche le schéma JSON de référence
  - Décrit la structure attendue pour les contributions
  - Montre les propriétés disponibles et leur format
  - Peut être masquée/affichée selon les besoins

### Barre de commandes

- **Titre dynamique** :
  - Mode création : "Nouvelle contribution"
  - Mode édition : "Modifier la contribution [GUID]"
  
- **Bouton Enregistrer** :
  - Actif uniquement si des modifications ont été effectuées
  - Enregistre la contribution sur le serveur
  - Retourne automatiquement à la liste après succès
  - Affiche un indicateur de chargement pendant l'enregistrement
  - Désactivé si l'extensibilité n'est pas active
  
- **Bouton Annuler** :
  - Toujours disponible
  - Abandonne les modifications en cours
  - Retourne à la liste des contributions
  - Peut demander confirmation si des modifications non sauvegardées existent

### Alertes et notifications

- **Extensibilité désactivée** :
  - Une alerte orange s'affiche en haut du formulaire
  - L'éditeur passe en lecture seule
  - Le bouton "Enregistrer" est désactivé
  - Message clair indiquant la nécessité d'activer l'extensibilité

- **Erreur de sauvegarde** :
  - Une alerte rouge s'affiche en cas d'erreur
  - Le message d'erreur détaillé est affiché
  - Les modifications restent présentes dans l'éditeur

## Comportement

### Workflow de création

1. **Accès** : Depuis la liste, cliquer sur "Nouvelle contribution"
2. **Saisie** : Écrire ou coller le code JSON de la contribution
3. **Validation** : S'assurer que la syntaxe JSON est correcte
4. **Consultation du schéma** : Déplier l'aide si besoin pour voir la structure attendue
5. **Sauvegarde** : Cliquer sur "Enregistrer"
6. **Retour automatique** : Redirection vers la liste après succès

### Workflow de modification

1. **Accès** : Depuis la liste, double-cliquer sur une contribution ou utiliser le menu
2. **Chargement** : Le contenu JSON actuel est affiché dans l'éditeur
3. **Modification** : Éditer le code JSON selon les besoins
4. **Sauvegarde** : Cliquer sur "Enregistrer" (actif dès qu'une modification est détectée)
5. **Retour automatique** : Redirection vers la liste après succès

### Workflow de suppression

1. **Sélection** : Dans la liste, ouvrir le menu contextuel (⋮) d'une contribution
2. **Action** : Cliquer sur "Supprimer"
3. **Confirmation** : Confirmer la suppression dans la boîte de dialogue
4. **Suppression** : La contribution est immédiatement supprimée de la liste

## Points d'attention

- **Format JSON strict** : Le contenu doit être du JSON valide, sinon l'enregistrement peut échouer
- **GUID unique** : Chaque contribution a un identifiant unique qui ne peut pas être modifié
- **Impact des contributions** : Les contributions personnalisées peuvent modifier le comportement de l'interface, testez-les soigneusement
- **Prérequis** : L'extensibilité doit être activée pour créer, modifier ou supprimer des contributions
- **Suppression irréversible** : Une fois supprimée, une contribution ne peut pas être récupérée (conservez des sauvegardes)

## Recommandations

- **Validez la syntaxe** : Assurez-vous que votre JSON est bien formaté avant de sauvegarder
- **Consultez le schéma** : Utilisez l'aide contextuelle pour comprendre la structure attendue
- **Testez en environnement de test** : Créez et testez vos contributions dans un environnement de développement avant la production
- **Documentez vos contributions** : Conservez une documentation externe expliquant le rôle de chaque contribution
- **Sauvegardez régulièrement** : Exportez une copie de vos contributions JSON importantes
- **Nommez explicitement** : Si possible, utilisez des propriétés descriptives dans votre JSON pour faciliter la maintenance

## Cas d'usage typiques

### Ajouter une nouvelle fonctionnalité
Créer une contribution JSON qui déclare une nouvelle fonctionnalité, un menu personnalisé, ou un comportement spécifique.

### Modifier un comportement existant
Créer une contribution qui override ou étend le comportement par défaut d'une fonctionnalité d'Altazion Office.

### Intégration personnalisée
Définir des points d'intégration avec des systèmes externes ou des configurations spécifiques à votre organisation.
