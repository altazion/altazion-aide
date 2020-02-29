# Import des prix de ventes


<h2>Format Csv</h2><p>Ce fichier permet d&#39;importer les prix de vente (et les promos) des articles</p>


<table style='width:100%'><thead><tr><th>Champ</th><th>Type</th><th>Obligatoire</th><th style='width:50%'>Description</th></tr></thead><tbody><tr><td>art_reference</td><td>Text</td><td><b>Oui</b></td><td>La r&#233;f&#233;rence (ou le code externe) du produit</td><td><tr><td>art_pu_final_ht</td><td>Number</td><td>Non</td><td>Le prix final (ou promotionnel) HT qui sera effectivement pay&#233; par le client</td><td><tr><td>art_pu_final_ttc</td><td>Number</td><td>Non</td><td>Le prix final (ou promotionnel) TTC qui sera effectivement pay&#233; par le client</td><td><tr><td>art_pu_base_ht</td><td>Number</td><td>Non</td><td>Le prix final (ou &#39;barr&#233;&#39;) HT qui sera effectivement pay&#233; par le client</td><td><tr><td>art_pu_base_ttc</td><td>Number</td><td>Non</td><td>Le prix final (ou &#39;barr&#233;&#39;) TTC qui sera effectivement pay&#233; par le client</td><td><tr><td>art_date_debut_promo</td><td>DateTime</td><td>Non</td><td>Date de d&#233;but de la promo</td><td><tr><td>art_date_fin_promo</td><td>Text</td><td>Non</td><td>Date de fin de la promo</td><td><tr><td>type_prix</td><td>Enum</td><td>Non</td><td>Type de prix (&#39;BASE&#39;, &#39;MAGASIN&#39;, &#39;GRILLETARIF&#39;). &#39;BASE&#39; est la valeur par d&#233;faut</td><td><tr><td>destination_prix</td><td>Text</td><td>Non</td><td>La destination du prix (si GRILLETARIF, le code de la grille, si MAGASIN, le code du magasin)</td><td></tbody></table>

