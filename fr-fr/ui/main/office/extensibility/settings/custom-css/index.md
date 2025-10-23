# Guide d'utilisation - Éditeur de CSS personnalisé

## Objectif
Cet écran permet de personnaliser l'apparence d'Altazion Office en ajoutant ou modifiant des règles CSS qui s'appliquent à l'ensemble de l'interface.

## Fonctionnalités

### Éditeur de code

- **Syntaxe CSS** : Éditeur spécialisé pour le code CSS avec coloration syntaxique facilitant la lecture et l'écriture
- **Modification en temps réel** : Les changements sont détectés automatiquement pendant la saisie
- **Sauvegarde intelligente** : Le bouton "Enregistrer" devient actif uniquement lorsqu'une modification a été effectuée
- **Annulation des modifications** : Le bouton "Annuler" permet de revenir à la dernière version sauvegardée et de quitter l'éditeur

### Barre de commandes

- **Titre** : Affiche "CSS personnalisé" pour identifier clairement l'écran en cours
- **Bouton Enregistrer** :
  - Visible uniquement si des modifications ont été effectuées
  - Enregistre les changements sur le serveur
  - Retourne automatiquement au tableau de bord après une sauvegarde réussie
  - Affiche un indicateur de chargement pendant l'enregistrement
- **Bouton Annuler** :
  - Toujours disponible
  - Abandonne les modifications en cours
  - Retourne au tableau de bord

### Mode désactivé (protection automatique)

Si l'extensibilité est désactivée depuis le tableau de bord :

- **Lecture seule** : L'éditeur bascule automatiquement en mode lecture seule, empêchant toute modification
- **Bouton Enregistrer désactivé** : Le bouton "Enregistrer" est grisé et non cliquable
- **Message d'avertissement** : Un message clair s'affiche indiquant que l'extensibilité doit être activée pour pouvoir modifier le CSS
- **Sortie possible** : Le bouton "Annuler" reste disponible pour quitter l'écran et retourner au tableau de bord

## Cas d'usage typiques

### Personnalisation des couleurs
Modifier la palette de couleurs de l'interface pour l'adapter à votre charte graphique :
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}
```

### Ajustement de l'interface
Masquer ou modifier des éléments spécifiques :
```css
.mon-element-a-masquer {
  display: none;
}
```

### Adaptation responsive
Personnaliser l'affichage pour les différentes tailles d'écran :
```css
@media (max-width: 768px) {
  .ma-classe {
    font-size: 14px;
    padding: 8px;
  }
}
```

## Comportement

- **Chargement** : Au démarrage, l'éditeur récupère le CSS personnalisé existant depuis le serveur
- **Détection des changements** : Dès que vous modifiez le contenu, le bouton "Enregistrer" devient disponible
- **Sauvegarde** : Après avoir cliqué sur "Enregistrer", un indicateur de chargement s'affiche pendant l'enregistrement
- **Retour automatique** : Une fois la sauvegarde terminée, vous êtes automatiquement redirigé vers le tableau de bord
- **Vérification de l'état** : Si l'extensibilité est désactivée pendant que vous êtes sur cet écran, l'éditeur passe en mode lecture seule

## Points d'attention

- **Impact global** : Le CSS personnalisé s'applique à l'ensemble de l'interface Altazion Office pour tous les utilisateurs de l'instance
- **Prudence requise** : Des règles CSS mal écrites peuvent affecter la lisibilité, l'affichabilité ou l'utilisabilité de l'interface
- **Prérequis** : L'extensibilité doit être activée pour pouvoir enregistrer des modifications

## Recommandations

- **Testez d'abord** : Testez vos modifications dans un environnement de test ou de développement avant de les appliquer en production
- **Soyez spécifique** : Utilisez des sélecteurs CSS spécifiques pour cibler précisément les éléments à modifier et éviter les effets de bord
- **Documentez** : Ajoutez des commentaires dans votre CSS pour expliquer chaque personnalisation et faciliter la maintenance future
- **Sauvegardez** : Conservez une copie de sauvegarde de votre CSS avant d'effectuer des modifications importantes
- **Validez** : Après sauvegarde, vérifiez le rendu dans l'interface pour vous assurer que les changements produisent l'effet attendu

## Workflow recommandé

1. **Accès** : Depuis le tableau de bord, cliquer sur "Éditer le CSS personnalisé"
2. **Modification** : Ajouter ou modifier les règles CSS selon vos besoins
3. **Sauvegarde** : Cliquer sur "Enregistrer" pour appliquer les changements
4. **Vérification** : Naviguer dans l'interface pour vérifier que le rendu correspond à vos attentes
5. **Ajustement** : Si nécessaire, revenir dans l'éditeur pour affiner les modifications
6. **Documentation** : Noter les personnalisations effectuées pour référence future
