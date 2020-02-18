# Gestion des commandes sur adresse à risque


<p>Ce traitement unitaire peut suspendre momentan&eacute;ment le traitement de la commande ou au contraire lui faire reprendre son cours normal.</p>
<p>Certaines commandes Web sont jug&eacute;es "&agrave; risque" car l'une des 3 valeurs suivantes coincident avec des crit&egrave;res black list&eacute;s : le code postal, l'email ou le nom.</p>
<p>Dans tous les cas, cette commande fait l'objet d'une anomalie &agrave; traiter.</p>
<p>En fin de traitement, on appelle un utilitaire charg&eacute; de sommer l'ensemble des scores des anomalies de cette nature et de toutes les autres.<br />En fonction du seuil de tol&eacute;rance fix&eacute;, la commande est alors automatiquement bloqu&eacute;e si cette somme est sup&eacute;rieure &agrave; ce seuil ou <br />au contraire debloqu&eacute;e si elle repasse sous celui-ci.</p>

