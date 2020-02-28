# Gestion du risque

<p>En urgence, il est possible gr&acirc;ce &agrave; un param&egrave;tre bloquant d'arreter imm&eacute;diatement le traitement d'une commande pour analyse.</p>
<p>Ce m&ecirc;me param&egrave;tre permet naturellement de d&eacute;bloquer une commande en &eacute;tat de blocage.</p>
<p>Dans ses conditions, le blocage ou d&eacute;blocage se fera via une action du service client&egrave;le.</p>



## Gestion des commandes sur adresse à risque


<p>Ce traitement unitaire peut suspendre momentan&eacute;ment le traitement de la commande ou au contraire lui faire reprendre son cours normal.</p>
<p>Certaines commandes Web sont jug&eacute;es "&agrave; risque" car l'une des 3 valeurs suivantes coincident avec des crit&egrave;res black list&eacute;s : le code postal, l'email ou le nom.</p>
<p>Dans tous les cas, cette commande fait l'objet d'une anomalie &agrave; traiter.</p>
<p>En fin de traitement, on appelle un utilitaire charg&eacute; de sommer l'ensemble des scores des anomalies de cette nature et de toutes les autres.<br />En fonction du seuil de tol&eacute;rance fix&eacute;, la commande est alors automatiquement bloqu&eacute;e si cette somme est sup&eacute;rieure &agrave; ce seuil ou <br />au contraire debloqu&eacute;e si elle repasse sous celui-ci.</p>

## Gestion des commandes sur article à risque


<p>Ce traitement unitaire peut suspendre momentan&eacute;ment le traitement de la commande ou au contraire lui faire reprendre son cours normal.</p>
<p>Certains articles qualifi&eacute;s de "&agrave; risque" sont pond&eacute;r&eacute;s par un score plus ou moins &eacute;lev&eacute; en fonction du degr&eacute; de risque qu'il pr&eacute;sente.</p>
<p>Dans tous les cas, chaque article de ce type compris dans le panier de commande fait l'objet d'une anomalie &agrave; traiter.</p>
<p>En fin de traitement, on appelle un utilitaire charg&eacute; de sommer l'ensemble des scores des anomalies de cette nature et de toutes les autres.<br />En fonction du seuil de tol&eacute;rance fix&eacute;, la commande est alors automatiquement bloqu&eacute;e si cette somme est sup&eacute;rieure &agrave; ce seuil ou <br />au contraire debloqu&eacute;e si elle repasse sous celui-ci.</p>

## Gestion des commandes sur IP à risque


<p>Ce traitement unitaire peut suspendre momentan&eacute;ment le traitement de la commande ou au contraire lui faire reprendre son cours normal.</p>
<p>Certaines commandes Web sont jug&eacute;es "&agrave; risque" car l'adresse IP d'o&ugrave; elles ont &eacute;t&eacute; prises est black list&eacute;e.</p>
<p>Dans tous les cas, cette commande fait l'objet d'une anomalie &agrave; traiter.</p>
<p>En fin de traitement, on appelle un utilitaire charg&eacute; de sommer l'ensemble des scores des anomalies de cette nature et de toutes les autres.<br />En fonction du seuil de tol&eacute;rance fix&eacute;, la commande est alors automatiquement bloqu&eacute;e si cette somme est sup&eacute;rieure &agrave; ce seuil ou <br />au contraire debloqu&eacute;e si elle repasse sous celui-ci.</p>

