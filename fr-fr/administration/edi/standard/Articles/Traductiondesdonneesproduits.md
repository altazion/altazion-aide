# Traduction des données produits


<h2>Format Csv</h2><p>Int&#233;gration des traductions des donn&#233;es produits</p>


<table style='width:100%'><thead><tr><th>Champ</th><th>Type</th><th>Obligatoire</th><th style='width:50%'>Description</th></tr></thead><tbody><tr><td>type</td><td>Enum</td><td><b>Oui</b></td><td>Le type de donn&#233;es (par exemple : &#39;SEGMT&#39; pour segmentation, &#39;MARQU&#39; pour les marques, cf. remarques)</td><td><tr><td>code</td><td>Text</td><td><b>Oui</b></td><td>Code de la valeur &#224; traduire (doit matcher avec le code externe correspondant dans la table &#224; traduire)</td><td><tr><td>langue</td><td>Text</td><td><b>Oui</b></td><td>Le code langue (sur deux caract&#232;res)</td><td><tr><td>codevaleur</td><td>Text</td><td>Non</td><td>Dans le cas de ATVAL : code de la valeur &#233;num&#233;r&#233;e, ignor&#233; pour tous les autres types</td><td><tr><td>libelle</td><td>Text</td><td>Non</td><td>Le libell&#233; traduit</td><td></tbody></table>


<h2>Remarques</h2>  <p>Vous pouvez utiliser les codes "types" suivants pour les imports :</p>  <table>  <tbody>  <tr>  <td><strong>Code</strong></td>  <td><strong>Description</strong></td>  </tr>  <tr>  <td>SEGMT</td>  <td>Segmentations (cat&eacute;gories publiques) des produits.&nbsp;</td>  </tr>  <tr>  <td>MARQU</td>  <td>Marques</td>  </tr>  <tr>  <td>ATTRT</td>  <td>D&eacute;finitions d'attributs personnalis&eacute;s sur les articles</td>  </tr>  <tr>  <td>ATVAL</td>  <td>Valeur &eacute;num&eacute;r&eacute;e d'un attribut personnalis&eacute;. Pour ce type d'import, vous devez absolument pr&eacute;ciser un code d'attribut (dans la colonne code) et un code de valeur (dans codevaleur)</td>  </tr>  <tr>  <td>CRITR</td>  <td>D&eacute;finition d'un crit&egrave;re. <strong>Attention, les crit&egrave;res bas&eacute;s sur un attribut&nbsp;prendront automatiquement la traduction du nom de l'attribut : il n'est pas possible de traduire s&eacute;par&eacute;ment le libell&eacute;.</strong></td>  </tr>  </tbody>  </table>


<h2>Exemple de fichier</h2>


<script src='https://gist.github.com/simplement-e/d930c93a30c086831b74ea04047117a0.js'></script>