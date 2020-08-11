# Path standards



## Homepage

La homepage est probablement la première page que la plupart de vos visiteurs verront. L'url utilisée par défaut ne contient que le nom de votre site. Toutefois, si vous souhaitez mettre en place des tests A/B, par exemple, la home répond aussi à certaines autres urls :

* `/` est l'url par défaut
* `/default.aspx` peut être utilisée comme url alternative.

## Descente & fiche produit

### Ajout au panier

La [page d'ajout au panier](pages/process_addtocart.md) est à utiliser lorsque vous souhaitez pouvoir réaliser un ajout au panier depuis une page tierce, au travers du navigation. Son url est standardisée :

`/addtocart.aspx`

## Pages magasins

Les pages magasins sont regroupées sous un répertoire de la solution. Le nom de ce dossier est paramétrable mais prend la valeur par défaut _magasin_.

Il y a plusieurs types de pages :

* `/magasins/` : la home page de l'espace magasin. Vous pouvez définir l'apparence de cette page soit au travers de votre thème ou, si vous n'avez pas besoin d'une contenu complexe, via le composant CMS intégré dans la page par défaut.
* `/magasins/{zone-géographique}-_XXX/touslesmagasins.htm` : la liste de tous les magasins correspondant à une zone géographique donnée. Vous pouvez aussi utiliser l'url `/magasins/{codePays]/{zone-géographique}-_XXX/touslesmagasins.htm` si votre site est configuré pour être actif sur plusieurs pays.
* `/magasins/{zone-géographique}-_XXX/_YYYY_-{codeMagasin}.htm` : la fiche du magasin portant le code donné.
* ``/magasins/{zone-géographique}-_XXX/_YYYY_-{codeMagasin}/evenement-{dateCourte}.htm` : affiche le détail du (ou des) évènements spécifiques magasin de la date donnée.
* `/magasins/evenement-{urlDeLevenement}.htm` : La page d'affichage d'un évènement cross canal.

Quelques exemples de pages :

* `/magasins/59-Nord/touslesmagasins.htm` : affiche tous les magasins du département 59.
* `/magasins/59-Nord/0020-Valenciennes.htm` : affiche le détail du magasin de valenciennes, portant le code 0020.

## Points API

Le module commerce propose un ensemble de points API, vous permettant de manipuler des données standards au travers de scripts dans vos pages, dans une application mobile, etc. La documentation de ces apis est [disponible sur le site www.altazion.dev](https://www.altazion.dev/hub/api/index.html).

Les points API sont situés dans un path ayant la forme :

    /api/{service}/nui/{url spécifique}

par exemple

    /api/process/nui/?action=getadresseslivraison
    /api/process/nui/?action=checkemail&email={email}

## Callbacks services externes

Certains services externes demandent des callbacks et/ou des pages de retours connues pour fonctionner. C'est par exemple le cas des plateformes de paiement : lorsque le client a terminé de payer, il doit être renvoyé vers une page de votre site.

### Callbacks de paiement

Les modules de paiement suivent tous les même format de page de retour interactif et les retours callback "serveur à serveur" :

    /exec/reglements/{nomdumodule}/*.ashx

> [!WARNING]
> Attention, les paths de nos solutions ne sont pas case sensitives : il est possible que des majuscules et miniscules soient mixées dans les urls.

Quelques exemples :

|Mode de paiement|Retour interactif|Callback serveur|
|---|---|---|
|Adyen|`/Exec/reglements/Adyen/Adyen.ashx`|`/Exec/reglements/Adyen/AdyenAutoResponse.ashx`|
|Atos 2.0|`/Exec/reglements/Atos2/Atos2.ashx`|`/Exec/reglements/Atos2/Atos2AutoResponse.ashx`|
|Braintree|`/Exec/reglements/Braintree/Braintree.ashx`|-
|KlikAndPay|`/Exec/reglements/KlikAndPay/KlikAndPay.ashx`, `/Exec/reglements/KlikAndPay/RetourHS.ashx`, `/Exec/reglements/KlikAndPay/RetourOK.ashx`|`/Exec/reglements/KlikAndPay/RetourDynamique.ashx`|
|Paypal|`/Exec/reglements/PayPal/paypal.ashx`|`/Exec/reglements/PayPal/ipn.ashx`|

