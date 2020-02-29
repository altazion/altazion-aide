# Commandes clients
Il existe 3 types de commandes pouvant être gérées :

*   Les [**commandes simples**](commandessimples.md) sont utilisées lorsque le traitement d'une commande est rapide et ne demande que très peu d'opérations. C'est par exemple le cas pour des commandes passées dans un magasin et préparées directement par celui-ci.
*   Les [**commandes complètes**](completes.md) sont une version "survitaminée" des commandes simples et permettent d'automatiser le processus de traitement. Elles sont utilisées, par exemple, lorsque les commandes peuvent être séparées en plusieurs ordres de préparation, destinées à des acteurs différents, lorsque vous souhaitez estimer le risque de fraude ou encore si vous souhaitez rembourser automatiquement vos clients en cas de manquants.
*   Les [**commandes inter-structures**](interstructures.md) sont destinées particulièrement à l'échange de commande entre magasins ou entre centrale et magasin. Ces commandes peuvent supporter des automatisations simples et permettent l'échange d'information entre les différents intervenants. Elles sont par exemple utilisées dans le cadre des e-reservations.

En fonction de vos besoins, vous pouvez utiliser utiliser une combinaison de chacun de ses trois types. Par défaut, les scénarios suivant sont paramètrés :

*   Les commandes passées en caisse, sur un device magasin (borne, écran interactif, tablette vendeur, etc.) et gérées dans le magasins utilisent les _commandes simples_
*   Les commandes enregistrées par un commercial ou par un service client utilisent les commandes complètes
*   Les commandes e-commerce utilisent les _commandes complètes_
*   Les e-reservations passées depuis un votre site e-commerce ou votre application mobile utilisent des _commandes inter-structures._

Vous pouvez changer ces comportements dans la partie _Paramètres_ de votre gestion commerciale.