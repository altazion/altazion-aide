# Considérations générales


<p>Les m&eacute;diations vous permettent d'accepter de tr&egrave;s nombreux formats de fichiers textes, en param&egrave;trant l'encodage, les caract&egrave;res de s&eacute;paration, etc. Toutefois, si vous cr&eacute;ez un fichier sp&eacute;cifiquement pour une m&eacute;diation, nous vous invitons &agrave; pr&eacute;f&eacute;rer les options suivantes :</p>
<ul>
<li>Format d'encodage : UTF-8, sans ent&ecirc;te Unicode de fichier</li>
<li>Fin de ligne au format Windows</li>
<li>S&eacute;parateur de colonne : pipe | (ascii 0x7C) ou point virgule ; (ascii 0x3B)</li>
<li>Si au moins l'une des colonnes peut contenir des caract&egrave;res de commande, tels que des passages &agrave; la ligne, vous devez encadrer toutes les valeurs textes des diff&eacute;rentes colonnes de double quotes " (ascii 0x22). Les doubles quotes pr&eacute;sentes dans vos colonnes devront alors &ecirc;tre doubl&eacute;s : ""</li>
<li>Les colonnes fixes dont vous ne souhaitez pas renseigner la valeur doivent &ecirc;tre laiss&eacute;es vides, sans aucun contenu.</li>
</ul>
<p>Et pour les valeurs des diff&eacute;rents champs :</p>


<ul>
<li>Les valeurs num&eacute;riques seront pr&eacute;sent&eacute;es sans s&eacute;parateur de regroupement et, dans le cas de valeur d&eacute;cimales, en utilisant le point . (ascii 0x2E) comme s&eacute;parateur d&eacute;cimal</li>
<li>Sauf indications contraires, les colonnes Enum sont des num&eacute;riques, entiers, devant &ecirc;tre repr&eacute;sent&eacute; sans aucune d&eacute;cimale ni s&eacute;parateur.</li>
<li>Les valeurs dates seront format&eacute;es selon la RFC 3339 et exprim&eacute;es en UTC (par exemple 2010-01-01T00:00:01Z repr&eacute;sente le 1er Janvier 2010 &agrave; minuit et 1 seconde UTC.</li>
<li>Les valeurs bool&eacute;ennes peuvent &ecirc;tre pass&eacute;es sous la forme de true/false ou sous la forme 1/0 (1 valant "true", 0 valant "false")</li>
</ul>


<p>Ces pr&eacute;conisations ne sont en aucun cas obligatoires : il s'agit simplement des options par d&eacute;faut de notre module d'import Texte.</p>


<h2>Contenu des fichiers</h2>
<p>Sauf mention&nbsp;contraire dans la description d'un flux, tous les fichiers sont consid&eacute;r&eacute;s comme des envoi complets et int&eacute;graux des donn&eacute;es : chaque nouveau fichier <em>remplace int&eacute;gralement</em> les donn&eacute;es se trouvant en base.</p>
<p>Par exemple, si vous&nbsp;automatisez un import hebdomadaire de vos articles, veillez bien &agrave; ce que tous les articles se trouvent dans votre fichier : si un article pr&eacute;sent en base de donn&eacute;es ne se trouve pas dans votre fichier, il sera consid&eacute;r&eacute; comme "archiv&eacute;" et ne sera donc plus visible dans vos outils.</p>

