# Taxes d'un article


<h2>Format Raw</h2><p>Int&#233;gration des taxes compl&#233;mentaires d&#39;un article. La TVA ne doit pas &#234;tre pass&#233; via ce fichier mais au travers des notions de prix HT/prix TTC dans le fichier articles</p>


<table style='width:100%'><thead><tr><th>Champ</th><th>Type</th><th>Obligatoire</th><th style='width:50%'>Description</th></tr></thead><tbody><tr><td>iat_article_external_id</td><td>Text</td><td><b>Oui</b></td><td>R&#233;f&#233;rence ou id externe de l&#39;article</td><td><tr><td>iat_code_taxe</td><td>Text</td><td><b>Oui</b></td><td>Code de la taxe</td><td><tr><td>iat_montant</td><td>Number</td><td><b>Oui</b></td><td>Montant de la taxe, dans la devise principale du compte</td><td></tbody></table>

