# Importer un flux en mode RAW via API


<p>Les donn&eacute;es importables via cette proc&eacute;dure sont obligatoirement d&eacute;fini dans l'un des formats RAW tels que d&eacute;crit dans la partie correspondante de ce site d'aide. <em>L'utilisation de tout autre format d'import sera rejet&eacute; et pourra conduire &agrave; la corruption de votre base de donn&eacute;es</em>.</p>  <p>Pour lancer un import de donn&eacute;es en mode API, cr&eacute;ez un nouveau projet c# dans votre IDE (Visual Studio, par exemple).</p>  <p>Si vous utilisez Xamarin Workbook, vous pouvez t&eacute;l&eacute;charger cette documentation en format interactif : <a href="https://datasimplemente.blob.core.windows.net:443/integrateurs/edi/AppelAPIImportFichier.workbook">AppelAPIImportFichier.workbook</a></p>  <p>Ajouter ensuite le nuget JSON.net, afin de simplifier les appels aux m&eacute;thodes REST, puis les usings et structures de donn&eacute;es suivantes :</p>


<script src='https://gist.github.com/simplement-e/d5f4cccd7d8e9b15cc77a7d9897b2eed.js'></script>
<p>Vous devez ensuite r&eacute;cup&eacute;rer le compte d&rsquo;une application connect&eacute; sur votre tenant. Connectez vous sur votre back-office simplement-e, puis dans Param&egrave;tres &gt; Extensibilit&eacute; &gt; Application connect&eacute;e, r&eacute;cup&eacute;rez les identifiants de votre application ou cr&eacute;ez-en une nouvelle.</p>  <p>Avec ces identifiants, nous allons &eacute;tablir une connexion avec authentification basic <em>(ce mode n&rsquo;est disponible que si vous utilisez simplement-e via un lien s&eacute;curis&eacute; HTTPS)</em></p>


<script src='https://gist.github.com/simplement-e/ae736d3703420a87e3353d89b1e0db08.js'></script>
<p>Construisez ensuite&nbsp;l&rsquo;appel pour d&eacute;clencher l&rsquo;import. Si vous &ecirc;tes OnPremise et avez acc&egrave;s aux disques de votre serveur, vous pouvez d&eacute;clencher un import sur un fichier local. Dans le cas contraire, vous devrez, avant de d&eacute;clencher l&rsquo;import, d&eacute;poser votre fichier sur un emplacement accessible via une url utilisant http:// ou https://.</p>


<script src='https://gist.github.com/simplement-e/51f1fb624d5a77a783e5a56eac7058dc.js'></script>
<p>Pour obtenir l&rsquo;&eacute;tat d&rsquo;avancement de l&rsquo;import, il suffit d&rsquo;appeler, de fa&ccedil;on r&eacute;guli&egrave;re le point API correspondant.</p>  <p><em>Attention, dans cette version de l&rsquo;API, le bool&eacute;en IsCompleted de la structure d&rsquo;&eacute;tat n&rsquo;est pas renseign&eacute; pour les soumissions &ldquo;manuelles&rdquo; via l&rsquo;API ou via la fonctionnalit&eacute; de &ldquo;test de flux&rdquo; dans le front-office. Il est par contre correctement renseign&eacute; pour toute les soumissions faisant partie d&rsquo;une m&eacute;diation. Dans le cadre de ce mini projet, il vous faudra analyser le texte des messages pour d&eacute;terminer l&rsquo;&eacute;tat d&rsquo;avancement de l&rsquo;import.</em></p>


<script src='https://gist.github.com/simplement-e/6580419d0108cd45392c42676fa31e89.js'></script>
<p>Le premier appel retournera probablement une liste de messages vides : il faut quelques secondes avant que le traitement soit effectivement d&eacute;clench&eacute;. Si, au bout de 30 secondes, vous ne recevez toujours aucun message, v&eacute;rifiez que le service de traitement est actif sur votre serveur.</p>

