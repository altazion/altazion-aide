## Personnalisable (CSV)

|Champ|Type|Obligatoire|Decription|
|---|---|---|---|
|depot_type|Enum|**Oui**|Type de dépot : 'DEPOT' pour un stock dépot et 'MAG' pour un stock magasin|
|depot_code|Text|Non|Code du dépot/du magasin|
|art_ref|Text|**Oui**|Référence du produit|
|type_ref|Text|Non|Si la référence dans {art_ref} n'est pas le code principal de l'article, précisez ici le type de référence (EAN13, ISBN, etc.)|
|qte|Number|**Oui**|Quantité en stock|
