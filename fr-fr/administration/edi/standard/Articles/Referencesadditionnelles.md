# Références additionnelles


<h2>Format Csv</h2><p>Int&#233;gration des autres r&#233;f&#233;rences (ean13, ISBN, etc.) d&#39;un article</p>


<table style='width:100%'><thead><tr><th>Champ</th><th>Type</th><th>Obligatoire</th><th style='width:50%'>Description</th></tr></thead><tbody><tr><td>art_ref</td><td>Text</td><td><b>Oui</b></td><td>La r&#233;f&#233;rence ou l&#39;id externe de l&#39;article</td><td><tr><td>ref</td><td>Text</td><td><b>Oui</b></td><td>La r&#233;f&#233;rence (un code ean13 par exemple) &#224; ajouter</td><td><tr><td>type</td><td>Text</td><td><b>Oui</b></td><td>La type de r&#233;f&#233;rence (EAN13, GENCODE, ASIN, ISBN, ou une valeur personnalis&#233;e)</td><td><tr><td>est_principale</td><td>Bool</td><td>Non</td><td>Placer &#224; true si il s&#39;agit de la r&#233;f&#233;rence principale pour ce type</td><td></tbody></table>

