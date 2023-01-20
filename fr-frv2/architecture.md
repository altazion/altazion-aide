## Architecture d'Altazion

Pour utiliser Altazion, il peut être intéressant de comprendre le fonctionnement. 
Notre solution est composée de 5 "blocs" ayant une utilité propre.  

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
2. L'utilisateur (client) navigue sur le site internet, commande. Commerce gère le passage de la commande. 
3. Commerce envoie la commande à Orchestrator qui va permettre la gestion de la commande. 
4. Orchestrator communique avec Office, permettant à l'utilisateur de préparer, expedier et mettre à jour les statuts de commande. Office, en communiquant avec Commerce permet au client de suivre sa commande.

