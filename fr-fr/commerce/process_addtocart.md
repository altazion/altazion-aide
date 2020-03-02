# Ajouter au panier


## Page d'ajout au panier

La page `~/AddoToCart.aspx` permet de réaliser l'ajout d'un article au panier en passant par une page dédiée. Elle est particulièrement adapté à tous les cas où l'utilisation du point API [`/api/cart/nui/?action=add`](https://www.altazion.dev/hub/api/ecommerce/process/panier.html#span-idajouterajouterspan).

Cette page fonctionne globalement selon le même principe que le point API. Vous pouvez lui passer les paramètres suivants :

- `action=add` : **obligatoire** sans cette option, l'ajout ne sera pas réalisé
-  `reference=...` : utilisez ce paramètre pour définir la référence à ajouter. Vous pouvez ajouter plusieurs références en un seul appel en concaténant les références (séparées par des virgules). Par exemple:
    ```shell
    /addtocart.aspx?action=add&reference=000049,000053
    ```
- `vider=true` : vide le panier avant de faire l'ajout
- `codemag=...` permet de passer un code magasin. Le panier, si cela est possible, sera modifié pour que les produits du groupe "magasin" soit affecté à ce nouvel élément. En cas d'impossiblité, la page tombera en erreur 500.
- `associermag=....` utiliser la valeur true pour définir ce produit comme faisant partie des produits à fournir depuis le stock du magasin. Cette option est sans effet si la session utilisateur n'est pas associé à un magasin. La valeur `auto`, disponible dans le point API n'est pas utilisable dans cette page.
- `typeassoc[X]=...` où _[X]_ est une valeur de 1 à 5 (par exemple `typeassoc1=PILES`) : permet de déclencher l'ajout automatique des produits associés d'un certain type. 

