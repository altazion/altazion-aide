# Dossiers


<h3>Dossiers applicatifs</h3>
<p>Lors la mise en place d&rsquo;une solution [e], chaque r&ocirc;le utilise un dossier sp&eacute;cifique, qui peut &ecirc;tre chang&eacute; lors de l&rsquo;installation. Vous trouverez les chemins par d&eacute;faut dans le tableau ci-dessous. Ces dossiers sont enti&egrave;rement g&eacute;r&eacute;s par nos outils et ne doivent en aucun cas &ecirc;tre modifi&eacute;s une fois l'installation termin&eacute;e.</p>
<table>
<tbody>
<tr>
<td>Module</td>
<td>Dossier d'installaton&nbsp;</td>
</tr>
<tr>
<td>Serveur Gestion commerciale</td>
<td>{Program_files}\CPoint\[e]\services</td>
</tr>
<tr>
<td>Serveur e-commerce</td>
<td>{Program_files}\CPoint\[e]\ecommerce</td>
</tr>
<tr>
<td>Serveur logistique</td>
<td>{Program_files}\CPoint\[e]\logistique</td>
</tr>
</tbody>
</table>
<h3>Dossiers de solution</h3>
<p>La personnalisation de la solution effectu&eacute;e par nos services est install&eacute;e dans d&rsquo;autres dossiers. Ceux-ci compl&egrave;tent les dossiers applicatifs et ne doivent &ecirc;tre modifi&eacute;s qu&rsquo;avec l&rsquo;accord de nos services.&nbsp;</p>
<table>
<tbody>
<tr>
<td>Module&nbsp;</td>
<td>Chemin&nbsp;</td>
</tr>
<tr>
<td>Configuration g&eacute;n&eacute;rale</td>
<td>{Common_AppData}\Cpoint\[e]\bin\config</td>
</tr>
<tr>
<td>Serveur Gestion commerciale</td>
<td>{Common_AppData}\CPoint\[e]\bin\service</td>
</tr>
<tr>
<td>Serveur e-commerce</td>
<td>&nbsp;{Common_AppData}\CPoint\[e]\bin\ecommerce</td>
</tr>
<tr>
<td>Serveur logistique</td>
<td>&nbsp;{Common_AppData}\CPoint\[e]\bin\logistique</td>
</tr>
</tbody>
</table>
<h3>Dossiers d'extensibilit&eacute;</h3>
<p>Si vous avez d&eacute;velopp&eacute; des &eacute;l&eacute;ments personnalis&eacute;s (modules, mod&egrave;les de documents, etc.), vous pouvez utiliser le dossier d&rsquo;extensibilit&eacute; pour les d&eacute;ployer. L&rsquo;ajout d&rsquo;un module ou d&rsquo;un document dans l&rsquo;un de ses sous-dossiers le rend accessible par nos applicatifs.</p>
<table>
<tbody>
<tr>
<td>Module&nbsp;</td>
<td>Chemin&nbsp;</td>
</tr>
<tr>
<td>Serveur Gestion commerciale</td>
<td>{Common_AppData}\CPoint\[e]\extensibility\services</td>
</tr>
<tr>
<td>Serveur e-commerce</td>
<td>{Common_AppData}\CPoint\[e]\extensibility\ecommerce</td>
</tr>
<tr>
<td>Serveur logistique</td>
<td>{Common_AppData}\CPoint\[e]\extensibility\logistique</td>
</tr>
</tbody>
</table>
<h3>PROGRAMMES CLIENTS</h3>
<p>Les dossiers des diff&eacute;rentes applications clientes suivent les r&egrave;gles habituelles de d&eacute;ploiement d&rsquo;applications sous Windows. Vous trouverez donc celles-ci :</p>
<ul>
<li>Soit dans le sous-dossier {Program_files}\CPoint\[e]\ si vous effectuez une installation &laquo; par machine &raquo;</li>
<li>Soit dans le sous-dossier {Local_AppData}\CPoint\[e]\ dans le cadre d&rsquo;un d&eacute;ploiement &laquo; par utilisateur &raquo;</li>
</ul>
<h3>MISES A JOUR</h3>
<p>Si vous avez opt&eacute; pour un d&eacute;ploiement de type &laquo; par utilisateurs &raquo;, les mises &agrave; jour de vos postes clients peuvent &ecirc;tre centralis&eacute;es. La mise &agrave; disposition d&rsquo;un fichier&nbsp; &laquo; .[e]-update &raquo; dans l&rsquo;un des dossiers suivants permettra le d&eacute;ploiement automatique de celui-ci :</p>
<table>
<tbody>
<tr>
<td>
<p>Poste client (Gestion commerciale, logistique, Point de vente)</p>
</td>
<td>{Common_AppData}\CPoint\[e]\updates\client&nbsp;</td>
</tr>
<tr>
<td>Moniteur d&rsquo;activit&eacute;</td>
<td>{Common_AppData}\CPoint\[e]\updates\activity</td>
</tr>
</tbody>
</table>
<p>Si votre serveur est connect&eacute; &agrave; Internet et que votre contrat de mise &agrave; jour est activ&eacute;, ces dossiers sont g&eacute;r&eacute;s automatiquement par nos services (t&eacute;l&eacute;chargement automatique des correctifs, mise &agrave; disposition de nouvelles fonctionnalit&eacute;s, etc.).</p>


<h2>DONNEES</h2>
<p>Les dossiers dans lesquels sont mises &agrave; disposition ou pr&eacute;lev&eacute;es les donn&eacute;es (hormis la base SQL Serveur), sont personnalisables au travers d&rsquo;une strat&eacute;gie ActiveDirectory. Les chemins donn&eacute;s dans ce document correspondent aux valeurs par d&eacute;faut.</p>
<h3>BASE DE DONNEES</h3>
<p>Si vous n&rsquo;avez pas opt&eacute; pour l&rsquo;installation du r&ocirc;le &laquo; Serveur de base de donn&eacute;es &raquo; mais avez utilis&eacute; une instance SQLServer d&eacute;j&agrave; disponible dans votre entreprise, la gestion des fichiers des diff&eacute;rentes bases de donn&eacute;es et leurs sauvegardes n&rsquo;est pas assur&eacute;e par notre solution.</p>
<p>Le r&ocirc;le &laquo; Serveur de base de donn&eacute;es &raquo; cr&eacute;e trois bases de donn&eacute;es dans le dossier par d&eacute;faut suivant (vous pouvez personnaliser celui-ci pendant l&rsquo;installation, mais toute modification ult&eacute;rieure devra &ecirc;tre r&eacute;alis&eacute;e par votre DBA sous la supervision de nos services) :</p>
<table>
<tbody>
<tr>
<td>Base de donn&eacute;es</td>
<td>{Common_AppData}\CPoint\[e]\data\db</td>
</tr>
</tbody>
</table>
<p>Ces bases de donn&eacute;es sont sauvegard&eacute;es selon un rythme param&eacute;trable dans les dossiers suivants :</p>
<table>
<tbody>
<tr>
<td>Sauvegarde int&eacute;grale&nbsp;</td>
<td>{Common_AppData}\CPoint\[e]\data\dbbackup</td>
</tr>
<tr>
<td>Sauvegarde des journaux SQL<br /><span style="font-size: 8pt;">(pour restauration rapide en cas d&rsquo;anomalie)</span></td>
<td>{Common_AppData}\CPoint\[e]\data\logbackup</td>
</tr>
</tbody>
</table>
<h3>DOCUMENTS COMPTABLES</h3>
<p>Si vous avez opt&eacute; pour la g&eacute;n&eacute;ration de documents (PDF, XPS) lors de la cr&eacute;ation d&rsquo;un document comptable (Facture, devis, avoirs, etc.), vous les trouverez dans le dossier suivant, sur le serveur abritant le r&ocirc;le &laquo; Serveur Gestion Commerciale &raquo;.</p>
<table>
<tbody>
<tr>
<td>
<p>Documents contractuels ou l&eacute;gaux (Factures, Avoirs&hellip;)</p>
</td>
<td>{Common_AppData}\CPoint\[e]\data\legal\{Type }<br /><span style="font-size: 8pt;">(Chaque type de document poss&egrave;de son propre sous dossier)&nbsp;</span></td>
</tr>
<tr>
<td>
<p>Autres documents (par exemple : tarifs, relances&hellip;)</p>
</td>
<td>{ Common_AppData }\CPoint\[e]\data\documents\{Type}<br /><span style="font-size: 8pt;">(Chaque type de document poss&egrave;de son propre sous dossier)&nbsp;</span></td>
</tr>
</tbody>
</table>
<h3>FICHIERS D&rsquo;ECHANGES</h3>
<p>Les fichiers d&rsquo;&eacute;changes sont regroup&eacute;s dans deux dossiers (en fonction du fait que vous soyez exp&eacute;diteur ou destinataire de celui-ci). Dans chacun de ceux-ci, vous trouverez des sous-dossiers correspondant &agrave; chaque fonction. Veuillez vous reporter &agrave; la documentation de celle-ci pour plus d&rsquo;informations.</p>
<table>
<tbody>
<tr>
<td>Fichiers sortants</td>
<td>{Common_AppData}\CPoint\[e]\data\in\&nbsp;</td>
</tr>
<tr>
<td>Fichiers entrants</td>
<td>{Common_AppData}\CPoint\[e]\data\out\</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>


<h2>FICHIERS JOURNAUX</h2>
<p>Les journaux contenant la liste des op&eacute;rations r&eacute;alis&eacute;es par chacun des modules de votre solution sont d&eacute;pos&eacute;s dans les dossiers suivants. Seul le fichier &laquo; courant &raquo; est disponible sous la forme d&rsquo;un fichier texte ou Xml, les autres sont archiv&eacute;s sous forme compress&eacute;e.</p>
<table>
<tbody>
<tr>
<td>Gestion commerciale</td>
<td>{Common_AppData}\CPoint\[e]\services\logs</td>
</tr>
<tr>
<td>Logistique et serveur de traitement</td>
<td>{Common_AppData}\CPoint\[e]\logistique\logs</td>
</tr>
<tr>
<td>Point de ventes</td>
<td>{Common_AppData}\CPoint\[e]\POSCentral\logs&nbsp;</td>
</tr>
<tr>
<td>e-commerce</td>
<td>{Common_AppData}\CPoint\[e]\ecommerce\logs</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>

