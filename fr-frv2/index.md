# Bienvenue sur le centre d'information Altazion
Découvrez notre documentation en ligne qui permettra : 
_A l'administrateur_ d'utiliser tout le potentiel d'Altazion et de ses outils.
_A l'utilisateur_ de mener à bien les taches qui lui sont confiées. 

Cette documentation a été pensée selon l'ordre operationnel de la vie d'une activité commerciale. 
1. Configuration de la solution.
2. Référencement de votre catalogue.
3. La vente, sur vos différents canaux.
4. L'expedition si commande en ligne, la livraison au client.

## Configurer
Gestion d'équipe
Créez et gérez vos utilisateurs.
Configurez et assignez des taches à votre équipe. 

Moyens de Paiements

## Référencer
Gérer votre catalogue dans Altazion Office. 
Importer, configurer, segmenter, etc. Découvrez comment optimiser votre catalogue pour chacun des canaux de vente de votre entreprise.
## Vendre

## Expedier

## Architecture d'Altazion

Pour utiliser Altazion, il peut être intéressant de comprendre le fonctionnement. 
Notre solution est composée de 5 "blocs" ayant une utilité propre. 

OFFICE  

- **HUB**
- **OFFICE** 
- **COMMERCE** 
- **SIGNAGE**
- **ORCHESTRATOR**

![Schema](https://aide.altazion.com/fr-frv2/ressources/architecture.svg)

HUB est le socle technique, qui ne sera jamais vu par l'utilisateur ou l'administrateur mais sur lequel la solution est construite.
OFFICE est l'interface d'administration qui permet à l'administrateur de configurer et à l'utilisateur de gérer les différents aspects de son activité. Office communique avec les autres "blocs" d'Altazion pour gérer la solution avec une interface visuelle.
COMMERCE ET SIGNAGE sont les outils techniques de vente en ligne ou en magasin avec des bornes ou des devices vendeur. Si l'utilisateur ne les voit pas car il utilise OFFICE, ce sont ces "blocs" qui permettent à la solution de fonctionner.
ORCHESTRATOR est l'outil de gestion de commande. 

Pour schematiser très simplement avec une vente en ligne.
1. L'administrateur configure son catalogue dans Office. 
2. L'utilisateur navigue sur le site internet, commande. Derrière cela, c'est Commerce qui gère le passage de commande. 
3. Commerce envoie la commande à ORCHESTRATOR qui va permettre la gestion de la commande. 
4. Orchestrator communique avec OFFICE, permettant à l'utilisateur de préparer, expedier et mettre à jour les statuts de commande. Le client est lui aussi 