# Urls internes


<p>A de nombreux emplacement, dans votre site e-commerce, vous serez amen&eacute;s &agrave; vouloir pointer vers une page dynamique telle qu'une descente produit, un produit, un catalogue interactif, etc.</p>
<p>Si vos liens ont besoin d'&ecirc;tre lus sur d'autre support que votre site web (telle qu'une application mobile, une borne ou un totem tactile, ...) l'utilisation de l'url "rewrit&eacute;e"&nbsp;ne sera probablement pas id&eacute;ale, puisqu'elle redirigera l'utilisateur vers le site. Vous pouvez, dans ce cadre, utiliser les urls internes&nbsp;&agrave; notre moteur e-commerce.</p>
<p>Ces urls sont de la forme :&nbsp;<em>smple-commerce://</em> et permettent de d&eacute;finir un lien vers :</p>
<ul>
<li>une descente produit</li>
<li>une fiche article</li>
<li>une page de contenu personnalis&eacute;e</li>
<li>un catalogue interactif</li>
</ul>
<p>&nbsp;</p>


<h2>Lien vers une descente produit</h2>
<p>C'est probablement le type de lien le plus complexe. Il se compose d'une suite de crit&egrave;res, s&eacute;par&eacute;s par des point-virgules.</p>
<p><code>smple-commerce://{critere1=valeur};{critere2=valeur}</code></p>
<p>les diff&eacute;rents crit&egrave;res possibles sont :</p>
<table>
<tbody>
<tr>
<td>seg_pk=</td>
<td>la segmentation des produits</td>
</tr>
<tr>
<td>mar_pk=</td>
<td>la marque des produits</td>
</tr>
<tr>
<td>vit_guid=</td>
<td>Une vitrine contenant les produits</td>
</tr>
<tr>
<td>attr:{guid}=</td>
<td>L'attribut d'article d'identifiant {guid}</td>
</tr>
</tbody>
</table>
<p>Quelques exemples d'urls :</p>
<ul>
<li><code>smple-commerce://seg_pk=123</code>&nbsp;pointe vers les produits de la&nbsp;segmentation 123</li>
<li><code>smple-commerce://seg_pk=123;attr:{46B479EC-AFEC-44F0-A012-70D6CFA3314D}={98AE9E36-4838-4E53-9F93-B0EAB9B1024A}</code> pointe vers les produits de la&nbsp;segmentation 123 ayant&nbsp;pour valeur {98AE9E36-4838-4E53-9F93-B0EAB9B1024A} sur l'attribut {46B479EC-AFEC-44F0-A012-70D6CFA3314D}</li>
<li><code>smple-commerce://vit_guid={31553F78-A221-49E6-B69E-BAEA7FF04C82}</code> pointe vers&nbsp;la vitrine&nbsp;{31553F78-A221-49E6-B69E-BAEA7FF04C82}</li>
</ul>
<p>&nbsp;</p>


<h2>Lien vers un article</h2>
<p>Pour pointer sur une fiche article, utilisez une url de la forme :</p>
<p><code>smple-commerce://art_guid={guid de l'article}</code></p>
<p>&nbsp;</p>


<h2>Lien vers un catalogue interactif</h2>
<p>Pour pointer sur un catalogue interactif, vous devez utiliser une url sous la forme :</p>
<p><code>smple-commerce://opecom/CATALOGUE/ope_guid={le-guid-de-l-operation}</code></p>
<p>&nbsp;</p>

