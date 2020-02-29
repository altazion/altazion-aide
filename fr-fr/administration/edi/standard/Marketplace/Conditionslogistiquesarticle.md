# Conditions logistiques (article)


<h2>Format Csv</h2><p>D&#233;finir les conditions logistique</p>


<table style='width:100%'><thead><tr><th>Champ</th><th>Type</th><th>Obligatoire</th><th style='width:50%'>Description</th></tr></thead><tbody><tr><td>art_ref</td><td>Text</td><td><b>Oui</b></td><td>R&#233;f&#233;rence ou id externe de l&#39;article</td><td><tr><td>date_dispo_mini</td><td>DateTime</td><td>Non</td><td>Date de mise &#224; disposition minimale : &#224; renseigner pour les pr&#233;-commandes</td><td><tr><td>code_frais_port</td><td>Text</td><td>Non</td><td>Code (&#224; configurer dans le back-office) des frais de port si le produit ne suit pas les conditions par d&#233;faut</td><td><tr><td>delai_preparation</td><td>Number</td><td>Non</td><td>D&#233;lai de pr&#233;paration (en jours pleins) de l&#39;article si diff&#233;rent de la valeur par d&#233;faut</td><td><tr><td>est_immateriel</td><td>Bool</td><td>Non</td><td>A placer &#224; true si votre produit n&#39;est pas un produit physique (produit &#224; t&#233;l&#233;charger, service, etc.)</td><td><tr><td>fin_serie</td><td>Bool</td><td>Non</td><td>A placer &#224; true pour d&#233;finir que ce produit ne sera plus restock&#233;</td><td></tbody></table>

