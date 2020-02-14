# Contenu Javascript


<p>Si les remplacements automatiques ne sont pas suffisants, vous pouvez aussi ins&eacute;rer tout code javascript n&eacute;cessaire dans votre tag. Pour obtenir des informations concernant la navigation de l'utilisateur, vous pouvez utiliser l'object javascript E. Celui-ci&nbsp;contient&nbsp;des propri&eacute;t&eacute;s vous permettant de r&eacute;cup&eacute;rer :</p>
<table class="codeparams">
<tbody>
<tr>
<td>Panier.Data</td>
<td>Le contenu du panier, sous la forme d'un objet PanierResume</td>
</tr>
<tr>
<td>Process.Data</td>
<td>Les informations du processus de commande, sous la forme d'un ResumeProcess</td>
</tr>
<tr>
<td>ProductDetails</td>
<td>Sur une fiche produit, les donn&eacute;es de l'article, sous la forme d'un ArticleData</td>
</tr>
<tr>
<td>ProductsList</td>
<td>Sur une descente produit, les produits affich&eacute;s sous la forme d'un array d'ArticleData</td>
</tr>
</tbody>
</table>
<h2>Panier</h2>
<p>En utilisant la syntaxe E.Panier.Data, vous obtiendrez un objet javascript&nbsp;qui correspond &agrave; la structure :</p>


<script src='https://gist.github.com/simplement-e/12e2b76d1ab6d5196bd0.js'></script>
<h3>Exemple</h3>


<script src='https://gist.github.com/simplement-e/64795f7dc56304481262.js'></script>
<h2>Process de commande</h2>
<p>A partir de la page panier et dans toutes les pages du process de commande, l'objet E.Process.Data est d&eacute;fini comme ceci :</p>


<script src='https://gist.github.com/simplement-e/2eb2bbdc29170b9d6d9a.js'></script>
<script src='https://gist.github.com/simplement-e/1061d01e21bf66876f92.js'></script>
<script src='https://gist.github.com/simplement-e/c9865fb06dd63a8b5b9a.js'></script>
<h2>Articles</h2>
<p>Vous pouvez r&eacute;cup&eacute;rer des informations&nbsp;sur les articles affich&eacute;s en utilisant :</p>
<ul>
<li>dans une page de descente produit E.ProductsList (vous obtiendrez alors un Array de la classe ci-dessous)</li>
<li>dans une fiche produit via E.ProductDetails</li>
</ul>


<script src='https://gist.github.com/simplement-e/3adb554fccdef75a7fdf.js'></script>