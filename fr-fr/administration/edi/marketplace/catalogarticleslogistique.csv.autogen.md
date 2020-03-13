## Personnalisable (CSV)

|Champ|Type|Obligatoire|Decription|
|---|---|---|---|
|art_ref|Text|**Oui**|Référence ou id externe de l'article|
|date_dispo_mini|DateTime|Non|Date de mise à disposition minimale : à renseigner pour les pré-commandes|
|code_frais_port|Text|Non|Code (à configurer dans le back-office) des frais de port si le produit ne suit pas les conditions par défaut|
|delai_preparation|Number|Non|Délai de préparation (en jours pleins) de l'article si différent de la valeur par défaut|
|est_immateriel|Bool|Non|A placer à true si votre produit n'est pas un produit physique (produit à télécharger, service, etc.)|
|fin_serie|Bool|Non|A placer à true pour définir que ce produit ne sera plus restocké|
