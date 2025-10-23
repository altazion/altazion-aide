# Guide d'utilisation - Tableau de bord de l'extensibilité

## Objectif
Le tableau de bord centralise la gestion de l'activation de l'extensibilité et donne accès aux différentes fonctionnalités de personnalisation d'Altazion Office.

## Fonctionnalités

### Lorsque l'extensibilité est désactivée

- **Visualisation de l'état** : Un message indique clairement que l'extensibilité n'est pas activée pour cette instance
- **Activation rapide** : Un bouton "Activer l'extensibilité" permet d'activer le système en un clic
- **Information contextuelle** : Une explication des bénéfices de l'extensibilité est affichée pour aider à la décision

### Lorsque l'extensibilité est activée

- **Statistiques en temps réel** :
  - Nombre de contributions personnalisées actuellement déployées
  - Indication visuelle si du CSS personnalisé est configuré (affichage d'une icône de validation)
  
- **Actions disponibles** :
  - **Éditer le CSS personnalisé** : Bouton qui ouvre directement l'éditeur de feuilles de style pour personnaliser l'apparence de l'interface
  - **Gérer les contributions** : Bouton pour accéder à la gestion des modules d'extension personnalisés (fonctionnalité à venir)
  
- **Désactivation** : Un bouton "Désactiver l'extensibilité" permet de désactiver complètement le système de personnalisation

## Comportement

- **Chargement initial** : Lors de l'ouverture de la page, un état de chargement s'affiche brièvement le temps de récupérer les informations depuis le serveur
- **Activation/Désactivation** : Le changement d'état est immédiat après avoir cliqué sur le bouton correspondant
- **Navigation** : Cliquer sur "Éditer le CSS personnalisé" vous redirige vers l'éditeur de code CSS

## Points d'attention

- **Impact global** : L'activation ou la désactivation de l'extensibilité impacte immédiatement l'ensemble de l'instance Altazion Office
- **Conservation des données** : La désactivation n'efface pas les personnalisations existantes (CSS personnalisé, contributions), elle les désactive temporairement
- **Réactivation** : En réactivant l'extensibilité, toutes vos personnalisations précédemment configurées sont automatiquement réappliquées
- **Permissions** : L'accès à cet écran nécessite des droits d'administration

## Workflow typique

1. **Première utilisation** : Activer l'extensibilité via le bouton dédié
2. **Configuration** : Utiliser les boutons d'action pour configurer le CSS personnalisé ou les contributions
3. **Suivi** : Consulter régulièrement les statistiques pour voir l'état des personnalisations actives
4. **Maintenance** : Désactiver temporairement l'extensibilité si nécessaire (par exemple, pour diagnostiquer un problème)
