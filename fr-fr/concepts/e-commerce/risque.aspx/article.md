# Gestion des commandes sur article à risque


<p>Ce traitement unitaire peut suspendre momentan&eacute;ment le traitement de la commande ou au contraire lui faire reprendre son cours normal.</p>
<p>Certains articles qualifi&eacute;s de "&agrave; risque" sont pond&eacute;r&eacute;s par un score plus ou moins &eacute;lev&eacute; en fonction du degr&eacute; de risque qu'il pr&eacute;sente.</p>
<p>Dans tous les cas, chaque article de ce type compris dans le panier de commande fait l'objet d'une anomalie &agrave; traiter.</p>
<p>En fin de traitement, on appelle un utilitaire charg&eacute; de sommer l'ensemble des scores des anomalies de cette nature et de toutes les autres.<br />En fonction du seuil de tol&eacute;rance fix&eacute;, la commande est alors automatiquement bloqu&eacute;e si cette somme est sup&eacute;rieure &agrave; ce seuil ou <br />au contraire debloqu&eacute;e si elle repasse sous celui-ci.</p>

