# Commandes simples


<p>Les commandes simples sont utilis&eacute;es lorsque le traitement d'une commande est rapide et ne demande que tr&egrave;s peu d'op&eacute;rations. C'est par exemple le cas pour des commandes pass&eacute;es dans un magasin et pr&eacute;par&eacute;es directement par celui-ci.</p>
<p>Elles peuvent aussi &ecirc;tre utilis&eacute;es lorsque vous souhaitez envoyer les commandes dans un syst&egrave;me informatique externe, telle qu'un ERP ou un WMS et que vous n'avez pas &agrave; suivre la progression de ces commandes pass&eacute; l'envoi.</p>


<h2>Progression simple des commandes</h2>
<p>Les commandes simples passent par une succession d'&eacute;tat au fur et &agrave; mesure de leur traitement. Ces &eacute;tats sont represent&eacute;s par un code num&eacute;rique selon le principe suivant :</p>
<ul>
<li>0 : la commande est en cours d'&eacute;laboration, elle n'est pas encore valid&eacute;e. Il s'agit de l'&eacute;tat par d&eacute;faut des commandes qui viennent d'&ecirc;tre cr&eacute;&eacute;es.</li>
<li>1 : la commande est valid&eacute;e, pr&ecirc;te &agrave; &ecirc;tre trait&eacute;e</li>
<li>2 : la commande est trait&eacute;e, pr&ecirc;te &agrave; &ecirc;tre enlev&eacute;e</li>
<li>3 : la commande est termin&eacute;e</li>
<li>4 : la commande est archiv&eacute;e</li>
</ul>
<p>Il existe aussi un &eacute;tat interm&eacute;diaire (127) utilis&eacute; pendant la phase de paiement. Cet &eacute;tat doit &ecirc;tre consid&eacute;r&eacute; comme transitoire et ne pas &ecirc;tre pris en compte.</p>
<h3>Passage de l'&eacute;tat 0 &agrave; l'&eacute;tat 1</h3>
<p>Le passage entre l'&eacute;tat 0 et l'&eacute;tat 1 correspond &agrave; la validation de la commande.Il peut s'effectuer :</p>
<ul>
<li>En caisse : en cliquant sur l'option valider dans l'&eacute;dition de la commande</li>
<li>En gestion commerciale&nbsp;: en utilisant l'action "Valider" et en choisissant le mode "pr&eacute;paration manuelle".</li>
<li>Via l'Api Phygitale, avec <a href="/technique/api/phygital/Panieretcommande/Terminer.md">la m&eacute;thode Terminer</a></li>
<li>En validant un r&egrave;glement (ou en cliquant sur le bouton valider si le total est &agrave; 0) sur le module e-commerce.</li>
</ul>
<p>Dans le cadre d'un r&egrave;glement e-commerce, il est possible de voir appara&icirc;tre un &eacute;tat 127 si le paiement n'est pas imm&eacute;diat (par exemple dans le cadre d'un paiement CB via un prestataire externe, paypal, etc.).</p>
<p>Si vous utilisez un syst&egrave;me de preparation automatis&eacute; ou notre module de pr&eacute;paration en r&eacute;serve, le passage de l'&eacute;tat 0 &agrave; l'&eacute;tat 1 peut &ecirc;tre configur&eacute; pour envoyer automatiquement la commande dans ce syst&egrave;me.</p>
<h3>Passage de l'&eacute;tat 1 &agrave; l'&eacute;tat 2</h3>
<p>Le passage entre l'&eacute;tat 1 et l'&eacute;tat 2 signifie que la commande a &eacute;t&eacute; trait&eacute;e en local et peut &ecirc;tre remise au client. Il est d&eacute;clench&eacute; par :</p>
<ul>
<li>La mise en ticket d'une commande en caisse</li>
<li>La remont&eacute;e d'un syst&egrave;me de pr&eacute;paration externe</li>
<li>L'action "saisir la pr&eacute;paration" en gestion commerciale</li>
</ul>
<h3>Passage de l'&eacute;tat 2 &agrave; l'&eacute;tat 3</h3>
<p>Le passage entre l'&eacute;tat 2 et l'&eacute;tat 3 signifie que la commande est termin&eacute;e et peut &ecirc;tre archiv&eacute;e. Il peut &ecirc;tre d&ugrave; &agrave; :</p>
<ul>
<li>L'encaissement d'un ticket associ&eacute; &agrave; la commande en caisse</li>
<li>L'action "d&eacute;clarer l'enl&egrave;vement" en caisse ou gestion commerciale</li>
</ul>
<h3>&nbsp;<br />Passage de l'&eacute;tat&nbsp;3 &agrave; l'&eacute;tat 4</h3>
<p>Les commandes sont archiv&eacute;es&nbsp;lorsque :</p>
<ul>
<li>vous&nbsp;fermez la caisse et &eacute;ditez le Z</li>
<li>vous cloturez une p&eacute;riode comptable en gestion commerciale.</li>
</ul>
<p>Une fois archiv&eacute;es, vous ne pouvez plus apporter de modification sur une commande. Vous pouvez toutefois r&eacute;aliser des retours, reprises, SAV&nbsp;et toute autre op&eacute;ration qui ne n&eacute;cessite pas de changer directement la commande.</p>


<h2>Envoi vers un syst&egrave;me externe</h2>
<p>Si vous souhaitez transmettre les donn&eacute;es vers un syst&egrave;me externe apr&egrave;s leur validation, les diff&eacute;rents &eacute;tats possibles ont des significations l&eacute;g&egrave;rement diff&eacute;rentes :</p>
<ul>
<li>0 : la commande est en cours d'&eacute;laboration</li>
<li>1 : la commande est valid&eacute;e</li>
<li>2 : la commande est pr&ecirc;te &agrave; &ecirc;tre envoy&eacute;e</li>
<li>3 : la commande est envoy&eacute;e et peut &ecirc;tre consid&eacute;r&eacute;e comme termin&eacute;e</li>
<li>4 : la commande est archiv&eacute;e</li>
</ul>
<h3>Progression</h3>
<p>Les commandes passent de l'&eacute;tat 0 &agrave; l'&eacute;tat 1 selon le m&ecirc;me principe que pour la progression ci-dessus.</p>
<p>Le passage entre 1 et 2 peut &ecirc;tre configur&eacute; pour &ecirc;tre :</p>
<ul>
<li>soit automatique, sans intervention humaine</li>
<li>soit d&eacute;clench&eacute; par le paiement d'un ticket associ&eacute; &agrave; la commande (en caisse, ou via l'API <a href="/technique/api/main/servers/cross-canals/validerpaiementsimple.md">magasin</a> ou centrale)</li>
</ul>
<p>La progression entre 2 et 3 correspond &agrave; l'envoi de la commande dans le syst&egrave;me externe et est, &agrave; ce titre, automatique.</p>
<p>L'archivage se fait selon les m&ecirc;mes conditions que ci-dessus : lors de la cloture de la caisse ou d'une p&eacute;riode comptable.</p>

