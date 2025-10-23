# Guide d'utilisation - Destinataire des tâches

## Objectif

La page "Destinataire des tâches" permet de configurer qui recevra automatiquement chaque type de tâche générée par le système. Cette configuration détermine l'attribution par défaut des nouvelles tâches selon leur nature.

## Fonctionnalités

### Vue d'ensemble des types de tâches

- **Liste complète** : Affiche tous les types de tâches configurés dans le système
- **Informations par type** :
  - **Libellé** : Nom descriptif du type de tâche
  - **Catégorie** : Regroupement fonctionnel (commandes, articles, clients, etc.)
  - **Destinataire** : Attribution actuelle (utilisateur, groupe, ou aucun)
  - **Statut** : État d'activation du type de tâche

### Indicateurs visuels

- **Icônes de destinataire** :
  - 👤 : Tâche assignée à un utilisateur spécifique
  - 👥 : Tâche assignée à un groupe d'utilisateurs
  - "-" : Aucun destinataire configuré
- **Badges de statut** :
  - **Actif** (vert) : Le type de tâche génère des tâches normalement
  - **Ignoré** (gris) : Le type de tâche est désactivé, aucune tâche ne sera créée

### Actions de gestion

- **Bouton Actualiser** (⟳) : Recharge la liste depuis le serveur pour voir les dernières modifications
- **Bouton Paramètres** (⚙️) : Ouvre la configuration du destinataire pour le type de tâche sélectionné

## Configuration des destinataires

### Ouverture du dialogue

- Cliquer sur l'icône ⚙️ sur la ligne du type de tâche à modifier
- Le dialogue affiche le nom du type de tâche dans le titre pour confirmation

### Options de destinataire disponibles

#### Aucun destinataire
- **Usage** : Les tâches ne seront pas automatiquement assignées
- **Comportement** : Nécessite une attribution manuelle après création
- **Cas d'usage** : Types de tâches nécessitant une analyse préalable avant attribution

#### Groupe d'utilisateurs
- **Usage** : Assigner les tâches à tous les membres d'un groupe
- **Configuration** : 
  - Recherche par auto-complétion (minimum 2 caractères)
  - Sélection dans une liste déroulante
  - Le groupe actuellement assigné apparaît pré-sélectionné
- **Avantage** : Distribution flexible selon l'organisation des équipes

#### Utilisateur spécifique
- **Usage** : Assigner directement les tâches à une personne
- **Configuration** :
  - Recherche par nom ou email avec auto-complétion
  - Affichage du nom complet et de l'adresse email
  - L'utilisateur actuellement assigné apparaît pré-sélectionné
- **Avantage** : Attribution précise pour les responsabilités individuelles

### Validation des modifications

- **Enregistrer** : Applique le changement et met à jour immédiatement le tableau
- **Annuler** : Ferme le dialogue sans modification
- **Réinitialisation automatique** : Les champs se vident à chaque ouverture

## Comportement

- **Mise à jour temps réel** : Les modifications apparaissent instantanément dans la liste
- **Recherche dynamique** : Les suggestions apparaissent au fur et à mesure de la saisie
- **Persistance** : Les configurations sont sauvegardées de façon permanente
- **Indicateurs de chargement** : Affichage d'un état de progression pendant les recherches

## Points d'attention

- **Impact immédiat** : Les nouvelles tâches utiliseront immédiatement la configuration modifiée
- **Tâches existantes** : Les tâches déjà créées conservent leur attribution actuelle
- **Types ignorés** : Les types avec statut "Ignoré" ne génèrent aucune tâche, quelle que soit la configuration
- **Permissions requises** : Seuls les utilisateurs ayant les droits d'administration peuvent modifier ces paramètres
- **Validation des destinataires** : Vérifier que les utilisateurs/groupes sélectionnés sont toujours actifs

## Recommandations

- **Révision périodique** : Contrôler régulièrement que les attributions correspondent à l'organisation actuelle
- **Documentation des choix** : Noter les raisons des attributions spécifiques pour faciliter les mises à jour
- **Test après modification** : Vérifier qu'une nouvelle tâche du type modifié est bien attribuée correctement
- **Coordination d'équipe** : Informer les équipes concernées des changements d'attribution
- **Groupes privilégiés** : Préférer l'attribution par groupe pour plus de flexibilité organisationnelle

## Workflow recommandé

### Configuration initiale d'un nouveau type de tâche

1. **Identification** : Localiser le nouveau type dans la liste (statut souvent "Ignoré")
2. **Analyse du type** : Examiner la catégorie et le libellé pour comprendre la nature des tâches
3. **Choix de l'attribution** :
   - Individuel : Si le traitement nécessite une expertise spécifique
   - Groupe : Si plusieurs personnes peuvent traiter ce type de tâche
   - Aucun : Si l'attribution dépend du contexte de chaque tâche
4. **Configuration** : Cliquer sur ⚙️ et sélectionner le destinataire approprié
5. **Validation** : Enregistrer et vérifier que l'icône et le nom apparaissent correctement

### Réorganisation suite à un changement d'équipe

1. **Inventaire** : Identifier tous les types attribués à la personne/groupe concerné
2. **Analyse de remplacement** : Déterminer les nouveaux destinataires appropriés
3. **Modification séquentielle** :
   - Traiter un type à la fois pour éviter les erreurs
   - Utiliser ⚙️ pour ouvrir la configuration
   - Changer l'attribution et enregistrer
4. **Vérification** : Contrôler que tous les changements ont été appliqués
5. **Communication** : Informer les nouveaux destinataires de leurs nouvelles responsabilités

### Audit des attributions

1. **Vue d'ensemble** : Parcourir la liste complète pour identifier les incohérences
2. **Contrôle des "Aucun destinataire"** : Vérifier si ces tâches nécessitent vraiment une attribution manuelle
3. **Vérification des groupes** : S'assurer que les groupes existent toujours et contiennent les bonnes personnes
4. **Contrôle des utilisateurs** : Vérifier que les personnes assignées sont toujours actives
5. **Optimisation** : Regrouper les attributions similaires vers les mêmes destinataires quand c'est pertinent