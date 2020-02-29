# Associations d'un article


<h2>Format Raw</h2><p>Int&#233;gration des associations entre articles</p>


<table style='width:100%'><thead><tr><th>Champ</th><th>Type</th><th>Obligatoire</th><th style='width:50%'>Description</th></tr></thead><tbody><tr><td>ias_external_id_parent</td><td>Text</td><td><b>Oui</b></td><td>R&#233;f&#233;rence ou id externe de l&#39;article principal</td><td><tr><td>ias_external_id_enfant</td><td>Text</td><td><b>Oui</b></td><td>R&#233;f&#233;rence ou id externe de l&#39;article associ&#233;</td><td><tr><td>ias_type_assoc</td><td>Text</td><td><b>Oui</b></td><td>Code du type d&#39;association</td><td><tr><td>ias_qte_enfant_par_parent</td><td>Number</td><td>Non</td><td>Nombre de produits associ&#233;s pour chaque unit&#233; du produit principal</td><td></tbody></table>


<p>Les types de relation pr&eacute;-d&eacute;finis sont :&nbsp;</p>  <ul>  <li>CROSSSELL : association de type cross-selling</li>  <li>UPSELL : association de type up-selling</li>  <li>ACCESSOIRE : accessoire conseill&eacute; lors de l'achat (par exemple des piles)</li>  </ul>  <p>Vous pouvez cr&eacute;er de nouveaux types dans votre back-office.</p>  <p>Les types d'associations suivants sont obsol&egrave;tes :</p>  <ul>  <li>VERSION : l'article "2" est une d&eacute;clinaison de l'article "1"</li>  <li>PARENT : l'article "2" est le parent de l'article "1".</li>  </ul>  <p>Pour &eacute;tabilr une relation parent/enfant entre produit, nous vous conseillons d'utiliser la propri&eacute;t&eacute; R&eacute;f&eacute;rence parent dans le fichier principal.</p>

