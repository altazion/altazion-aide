# Commandes inter-structures


<p>Les commandes inter-structures sont destin&eacute;es &agrave; enregistrer des commandes pass&eacute;es entre deux magasins ou entre centrale et magasin. Elles peuvent aussi bien recouvrir des commandes qui seront directement retir&eacute;es par le client dans le magasin destinataire que des demandes de d&eacute;placement de stocks vers le demandeur.</p>
<p>Lorsque les commandes sont trait&eacute;es comme des r&eacute;servations dans un magasin destinataire, chaque commande peut recevoir des informations clients sous la forme&nbsp;:</p>
<ul>
<li>d&rsquo;un identifiant de compte client existant</li>
<li>des coordonn&eacute;es du client pour les clients de passage</li>
</ul>


<h2>Progression des &eacute;tats</h2>
<p>&nbsp;Chaque commande passe par 5 &eacute;tats successifs :</p>
<ul>
<li>0 : la commande vient d&rsquo;&ecirc;tre pass&eacute;e</li>
<li>1 : la commande a &eacute;t&eacute; prise en compte par le magasin de destination, et va &ecirc;tre pr&eacute;par&eacute;e</li>
<li>2 : la commande est pr&ecirc;te &agrave; &ecirc;tre enlev&eacute;e</li>
<li>3 : la commande est enlev&eacute;e</li>
<li>4 : la commande est archiv&eacute;e</li>
</ul>
<p>Les commandes inter-structures supportent des op&eacute;rations d'automatisation simples, en r&eacute;ponse aux changements d'&eacute;tats. Chaque modification d'&eacute;tat d'une commande d&eacute;clenche un <a href="/administration/personnalisation/evenements/ventes/evolcdeinterne.md">&eacute;v&egrave;nement de type EvolutionCommandeInterne</a>.</p>
<h3>Passage &agrave; l'&eacute;tat 1</h3>
<p>Le passage &agrave; l'&eacute;tat 1 correspond &agrave; l'acceptation, par le magasin destinataire, de la commande. Elle peut s'effectuer :</p>
<ul>
<li>sur la caisse ou un poste logistique, en acceptant la commande et/ou en &eacute;ditant son bordereau</li>
<li>via le suivi des commandes dans la gestion commerciale</li>
</ul>
<h3>Passage&nbsp;&agrave; l'&eacute;tat 2</h3>
<p>Une commande passe &agrave; l'&eacute;tat 2 s'effectue lorsque la commande est marqu&eacute;e comme pr&eacute;par&eacute;e. Cela peut &ecirc;tre fait :</p>
<ul>
<li>via la cloture de l'ordre de pr&eacute;paration sur un poste logistique</li>
<li>ou la saisie des articles pr&eacute;par&eacute; en caisse ou en gestion commerciale</li>
</ul>
<h3>Passage &agrave; l'&eacute;tat 3</h3>
<p>Vous pouvez faire passer une commande &agrave; l'&eacute;tat 3 en d&eacute;clarant la commande enlev&eacute;e en caisse ou en gestion commerciale</p>
<h3>Passage &agrave; l'&eacute;tat 4</h3>
<p>Les commandes ayant d&eacute;j&agrave; atteint l'&eacute;tat 3 sont archiv&eacute;es&nbsp;lorsque :</p>
<ul>
<li>vous&nbsp;fermez la caisse et &eacute;ditez le Z</li>
<li>vous cloturez une p&eacute;riode comptable en gestion commerciale.</li>
</ul>
<p>Une fois archiv&eacute;es, vous ne pouvez plus apporter de modification sur une commande. Vous pouvez toutefois r&eacute;aliser des retours, reprises, SAV&nbsp;et toute autre op&eacute;ration qui ne n&eacute;cessite pas de changer directement la commande.</p>

