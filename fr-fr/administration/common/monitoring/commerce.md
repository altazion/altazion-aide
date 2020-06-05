# Monitoring module commerce

## Page d'état général

La page d'état général du module e-commerce est accessible à l'url :
`{url_de_votre_site}/admin/status.ashx`. Vous devez être authentifié avec un compte d'administration pour avoir accès à celle-ci.


``` text
Pour le site
------------
(URL) Scheme : https
(URL) Host : www.miam-miam-corp.com
(ENV) Type env : Release
(ENV) Site en production :Non
(ENV) Checkout actif :Oui
(SEARCH) Module de recherche : Standard
(DB) Transactions actives : 0
(DB) Connexions ouvertes : 0

Pour le serveur
---------------
(SERVER) Server : DESKTOP-RHHLFJE
(DB) Nombre de connexions du pool : 1
(ASP.NET) Sessions on StateServer : 0
(HARDDRIVES) Taille totale de la file d'attente : 0
```

Vous y retrouverez :
|Valeur|Détails|
|---|---|
|(URL) Scheme|Protocole utilisé pour accèder à votre site. **Depuis début 2020, vérifiez que cette option est bien https : de nombreux navigateurs proposant des mesures de sécurité accrues et ne permettant plus d'utiliser le protocole http que pour des sites non interactifs**|
|(URL) Host|Le nom DNS utilisé lors de l'appel|
|(ENV) Type env|Le type d'environnement. Si vous êtes en installation "OnPremise", vous pouvez influer sur le mode de fonctionnement via les fichiers de configuration|
|(ENV) Site en production|Si un site n'est pas "en production", seul les appels authentifié comme provenant du développeur sont possibles|
|(ENV) Checkout actif|Si un site e-commerce n'est pas "actif en checkout", les commandes et mises au panier sont désactivées|
|(SEARCH) Module de recherche|Le module de recherche actif|
|(REWRITING) Module de rewriting|Le module d'url rewriting actif|
|(DB) Transactions actives|Le nombre de transaction à la base de données actuellement actives|
|(DB) Transactions actives|Le nombre de connexions à la base de données actuellement actives|

> [!WARNING]
> Le contenu de ce fichier peut différer en fonction de votre environnement et des modules actifs 

## Envoi données à NewRelic (OnPremise)

> [!NOTE]
> Si vous utilisez une plateforme d'APM autre que NewRelic, contactez notre service technique pour plus d'informations sur les possibilités d'intégration.