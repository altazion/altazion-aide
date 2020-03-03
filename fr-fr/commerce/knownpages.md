# Path standards

## 

### Ajout au panier

La page d'ajout au panier est à utiliser lorsque vous souhaitez pouvoir réaliser un ajout au panier depuis une page tiers, au travers du navigation. Son url est standardisée :

    /addtocart.aspx



### Pages magasins



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

