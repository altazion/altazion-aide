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

