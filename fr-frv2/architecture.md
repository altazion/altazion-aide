## Architecture d'Altazion

Même si vous êtes coté marketing ou commerce, il est toujours intéressant de comprendre comment fonctionne votre solution.
Pour utiliser Altazion, il peut être intéressant de comprendre le fonctionnement. 
Notre solution est composée de 6 "blocs" ayant une utilité propre. 
_Pourquoi cette architecture ? Car elle permet à chaque bloc d'être optimisé pour sa tache, donc d'avoir de meilleurs performances et une meilleur adaptabilité aux besoins clients._

- **OFFICE** 
- **HUB**
- **AUTOMATE**
- **ORCHESTRATOR**
- **COMMERCE** 
- **SIGNAGE**
- **SELLER APP**


![Schema](https://aide.altazion.com/fr-frv2/ressources/architecture.png)

### Paramétrage et administration : Office
**OFFICE** est l'interface d'administration qui permet à l'administrateur de configurer et à l'utilisateur de gérer les différents aspects de son activité. Office communique avec les autres "blocs" d'Altazion pour gérer la solution avec une interface visuelle. Elle communique avec les autres éléments. L'équipe Marketing et opérationnelle (ex vendeurs en magasin) utilisera toujours Office.  

**Office est le seul 'bloc' que l'équipe Marketing ou l'utilisateur utilise**.

### Logiciels de vente : Commerce, Signage et Seller App
**COMMERCE**, **SIGNAGE** et **SELLER APP** sont les logiciels de vente.
- **COMMERCE** pour la vente en ligne. 
- **SIGNAGE** pour les bornes ou supports de vente destiné au client
- **SELLER APP** pour les collaborateurs en magasin, ou les commerciaux qui travaillent avec une tablette.

Si l'utilisateur ne les voit pas car il utilise OFFICE, ce sont ces "blocs" qui permettent à la solution de fonctionner. 

### Logistique en temps réel : Orchestrator
**ORCHESTRATOR** est l'outil de gestion de disponibilité et logistique en temps réel qui communique avec Commerce, Signage et Seller App. 
Prenons l'exemple d'un internaute qui ajoute un produit à son panier. Commerce contacte Orchestrator qui va gérer les modes de livraison, les frais de ports, etc. en temps réel. 
Si l'utilisateur change son magasin de référence, c'est Orchestrator qui va en temps réel adapter les disponibilités de retrait en magasin, etc. 

## Taches automatisées et intégrations : Automate et Hub
**AUTOMATE** et **HUB** sont des outils techniques permettant d'automatiser des taches (Automate) ou d'intégrer des services tiers (HUB).
- **Automate permet** et gère des paramétrages simples et réguliers. Ex : imports de stocks ou export de journaux bancaires.

- **HUB** est un "Middleware", qui sert à interconnecter notre solution avec des services tiers necessitant une communication en temps réel, en général par API. 
HUB est un socle de développement, qui va permettre de gérer des taches complexes nécessitant des adaptations.
Hub va par exemple de gérer l'intégration d'un système de caisse développé 'sur mesure' pour l'entreprise ou encore d'intégrer des fonctionnalités provenant d'autres outils ecommerce.
 
Un exemple :

Le cas de la vente en ligne avec retrait et paiement en magasin.
1. L'administrateur configure son catalogue et ses règles logistiques dans **Office**. Le stock se met à jour automatiquement grâce à **Automate** selon la règle définie ([voir les médiations](https://aide.altazion.com/fr-frv2/configurer/integrations/mediations.html)).
2. L'utilisateur (client) navigue sur le site internet grace à **Commerce**. Lorsqu'il réalise une action impliquant un calcul de stock, de disponibilité, de frais de port, **Commerce** intéroge en temps réel **Orchestrator** qui lui renvoie l'application des règles de gestion pour les afficher au client. 
3. Le client passe commande, choisit un retrait avec paiement en magasin comme mode de livraison, se rend en magasin et paye à la caisse. Lors du paiement à la caisse, **HUB** Communique avec le système de caisse pour mettre à jour la commande, valider le paiement et mettre à jour la commande dans *Office**.

_Nous n'avons pas ici abordé la notion de préparation de commande mais notre système se connecte aussi avec votre outils de gestion logistique_.
