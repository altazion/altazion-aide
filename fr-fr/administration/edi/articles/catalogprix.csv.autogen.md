## Personnalisable (CSV)

|Champ|Type|Obligatoire|Decription|
|---|---|---|---|
|art_reference|Text|**Oui**|La référence (ou le code externe) du produit|
|art_pu_final_ht|Number|Non|Le prix final (ou promotionnel) HT qui sera effectivement payé par le client|
|art_pu_final_ttc|Number|Non|Le prix final (ou promotionnel) TTC qui sera effectivement payé par le client|
|art_pu_base_ht|Number|Non|Le prix final (ou 'barré') HT qui sera effectivement payé par le client|
|art_pu_base_ttc|Number|Non|Le prix final (ou 'barré') TTC qui sera effectivement payé par le client|
|art_date_debut_promo|DateTime|Non|Date de début de la promo|
|art_date_fin_promo|Text|Non|Date de fin de la promo|
|type_prix|Enum|Non|Type de prix ('BASE', 'MAGASIN', 'GRILLETARIF'). 'BASE' est la valeur par défaut|
|destination_prix|Text|Non|La destination du prix (si GRILLETARIF, le code de la grille, si MAGASIN, le code du magasin)|
