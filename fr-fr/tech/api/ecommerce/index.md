# Principe de fonctionnement

L'api e-commerce est destinée à être appelée au sein de votre site pour réaliser des opérations au nom du client. Elle a été conçue pour être appelée via des appels AJAX/REST au sein de la session de l'utilisateur. A ce titre, vous devez vous assurer que tous les appels :

- sont réalisées dans le contexte de l'utilisateur, vous devrez particulièrement faire attention aux cookies de l'utilisateur qui identifie la session auprès du serveur
- sont réalisées, dans la mesure du possible, au travers un lien HTTPS pour garantir la confidentialité des informations

Certaines fonctionnalitées sont aussi réalisables via des appels à des pages web "connues" de notre solution (consultez en la liste)

## Gestion des erreurs

Les erreurs de l'API sont retournées sous formes de code status HTTP habituels

Sauf précision contraire dans la page d'aide d'une méthode, il faut comprendre les codes selon la table suivante :

- 409  : Les données fournies pour identifier le tenant sont en conflit avec les données envoyées. Vérifiez vos identifiants
- 412 : Le serveur est dans un état invalide pour effectuer cette opération, il peut par exemple s'agir d'un problème de configuration
- 418 : La cible de l'appel n'est pas valide
- 404 : L'un des éléments de l'appel n'a pas été trouvé
- 405 : L'un des éléments de l'appel est dans un état ne permettant pas l'opération
- 403 : Vous n'avez pas les autorisations pour réaliser cette opération
- 400 : L'opération viole une règle de gestion