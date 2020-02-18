# Commandes complètes


<p>Les commandes compl&egrave;tes sont utilis&eacute;es lorsque les processus commerciaux et logistiques sont plus complexes et int&egrave;grent une partie automatisable. Par exemple, des commandes e-commerce pr&eacute;par&eacute;e par un e-logisticien utiliseront ce principe de fonctionnement.</p>
<h2>Progression des commandes</h2>
<p>Les commandes compl&egrave;tes passent par une progression au travers de 8 &eacute;tats :</p>
<ul>
<li>0 : cr&eacute;ation / entr&eacute;e de la commande</li>
<li>1 : validation technique</li>
<li>2 : validation commerciale</li>
<li>3 : mise en pr&eacute;paration</li>
<li>4 : pr&eacute;paration</li>
<li>5 : prise en compte de la pr&eacute;paration</li>
<li>6 : finalisation de la commande</li>
<li>7 : archivage</li>
</ul>
<p>Toutes les commandes compl&egrave;tes passent par l'int&eacute;gralit&eacute; de ces 8 &eacute;tapes. Certains &eacute;tats sont transitoires, d'autres peuvent durer le temps d'une op&eacute;ration plus ou moins longue (par exemple, l'&eacute;tat 4 dure pendant toute la phase de pr&eacute;paration logistique de la commande).</p>


<h2>D&eacute;tails des &eacute;tats</h2>
<h3>Etat 0</h3>
<p>L'&eacute;tat 0 correspond &agrave; la nouvelle commande. C'est le tout premier &eacute;tat dans lequel&nbsp;elle se trouve pendant toute la phase de cr&eacute;ation et se termine lors de la validation du contenu. Dans le cadre des commandes ouvertes, la commande &agrave; l'&eacute;tat 0 est celle en-cours, qui peut &ecirc;tre compl&eacute;t&eacute;e.</p>
<p>Une fois la commande sortie de l'&eacute;tat 0,&nbsp;le contenu, les conditions de ventes, la livraison et le mode incoterm ne sont normalement plus modifiables, ou sont du moins consid&eacute;r&eacute; comme accept&eacute;s par les parties.</p>
<h3>Etat 1</h3>
<p>Cet &eacute;tat&nbsp;est normalement transitoire et correspond &agrave; la validation technique de la commande. Particuli&egrave;rement utilis&eacute; lors de commande EDI ou e-commerce,&nbsp;une commande restant dans cet &eacute;tat plus de quelques minutes peut &ecirc;tre consid&eacute;r&eacute;e comme pr&eacute;sentant une anomalie. Les traitements standards dans cet &eacute;tat sont principalement des v&eacute;rification :</p>
<ul>
<li>de la coh&eacute;rence du compte client</li>
<li>de la coh&eacute;rence des conditions de ventes</li>
<li>de la pr&eacute;sence d'un mode de r&egrave;glement pour les &eacute;l&eacute;ments pay&eacute;es &agrave; la commande</li>
<li>etc.</li>
</ul>
<h3>Etat 2</h3>
<p>Il s'agit de l'&eacute;tape de v&eacute;rification commerciale d'une commande. Elle peut &ecirc;tre transitoire si toutes les conditions pour faire progresser une commande sont renseign&eacute;e ou &ecirc;tre un &eacute;tat d'attente demandant une intervention commerciale ou d'un &eacute;v&egrave;nement ext&eacute;rieur. C'est par exemple &agrave; cet &eacute;tat que seront toutes les commanes en attente d'un r&egrave;glement "non imm&eacute;diat" (Ch&egrave;que, Virement) ou demandant une validation par le service commercial (en cas de d&eacute;passement d'en cours, par exemple).</p>
<p>Les traitements standards :</p>
<ul>
<li>Validation du compte client (v&eacute;rification d'un nouveau client)</li>
<li>Attente du r&egrave;glement</li>
<li>Gestion du risque</li>
<li>Gestion de l'en-cours</li>
<li>...</li>
</ul>
<h3>Etat 3</h3>
<p>Cet &eacute;tat correspond au calcul de la pr&eacute;paration qu'il sera n&eacute;cessaire &agrave; r&eacute;aliser pour traiter la commande.&nbsp;Une commande ne reste dans cet &eacute;tat que le temps n&eacute;cessaire &agrave; d&eacute;finir le mode de pr&eacute;paration de tous les articles. En sortie de ce mode, les bons de pr&eacute;paration, ordre de fabrication et &eacute;changes EDI&nbsp;permettant d'assurer le traitement et l'exp&eacute;dition de la commande ont &eacute;t&eacute; cr&eacute;&eacute; et sont pr&ecirc;ts &agrave; &ecirc;tre trait&eacute;s.&nbsp;</p>
<blockquote>
<p>Si vous permettez la pr&eacute;paration partielle de commande, il est possible qu'en sortie de cet &eacute;tat, la commande ait &eacute;t&eacute; modifi&eacute;e et split&eacute;e en plusieurs commandes portant le m&ecirc;me num&eacute;ro et des identifiants d'ordre diff&eacute;rents. Cela signifie que le module de mise en pr&eacute;paration utilis&eacute; a d&eacute;termin&eacute; que les conditions de ventes engendraient la s&eacute;paration en diff&eacute;rentes sous commandes.</p>
</blockquote>
<h3>Etat 4&nbsp;</h3>
<p>Il s'agir probablement de l'&eacute;tat dans lequel la plupart des commandes resteront en attente : il s'agit de l'&eacute;tat d'attente du retour de sa pr&eacute;paration. Pour sortir de cet &eacute;tat, tous les ordres de pr&eacute;paration de la commande doivent &ecirc;tre trait&eacute;s.</p>
<p>Dans la plupart des cas, cette &eacute;tape consiste exclusivement en une attente de la fin des bons et autres ordres de pr&eacute;paration. Il est toutefois possible, en fonction, en cas de pr&eacute;paration partielle, que des pi&egrave;ces comptables (factures et avoirs) soient cr&eacute;&eacute;es pendant cette &eacute;tape pour refleter les conditions de ventes que vous avez choisi.</p>
<h3>Etat 5</h3>
<p>Cet &eacute;tat correspond &agrave; la finalisation de la commande, de la prise en compte de la pr&eacute;paration. C'est dans cet &eacute;tat que sont g&eacute;r&eacute;s les reliquats, les conditions de ventes, etc. Par exemple, c'est dans cet &eacute;tat que sont r&eacute;-&eacute;valu&eacute;s les montants des r&egrave;glements. Il s'agit d'un &eacute;tat transitoire.</p>
<h3>Etat 6</h3>
<p>Les commandes dans cet &eacute;tat, transitoire dans la plupart des cas, vont &ecirc;tre examin&eacute;es pour g&eacute;n&eacute;rer toutes les pi&egrave;ces comptables&nbsp;&agrave; r&eacute;aliser : c'est dans cette phase que sont, dans les cas habituels, g&eacute;n&eacute;r&eacute;s les factures, avoirs, consommation d'encours et de r&egrave;glement. Les modules&nbsp;standards sont, par exemple :</p>
<ul>
<li>Facturation des commandes</li>
<li>Mise en attente jusqu'&agrave; r&eacute;ception des colis</li>
<li>Calcul de l'encours client</li>
</ul>
<h3>Etat 7</h3>
<p>Dernier &eacute;tat de la progression de la commande, l'&eacute;tape 7 correspond &agrave; la fin de traitement d'une commande. Une fois cette &eacute;tape commenc&eacute;e, la commande est consid&eacute;r&eacute;e comme termin&eacute;e et peut-&ecirc;tre archiv&eacute;e.</p>


<h2>Pr&eacute;paration de commande</h2>
<p>&nbsp;</p>

