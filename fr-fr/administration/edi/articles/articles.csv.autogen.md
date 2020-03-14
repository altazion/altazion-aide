|Champ|Type|Obligatoire|Decription|
|---|---|---|---|
|art_id|Text|**Oui**|Identifiant (externe) du produit|
|art_ref|Text|**Oui**|Référence du produit|
|tar_libelle|Text|Non|Type d'article|
|art_parent_id|Text|Non|Id ou référence du produit parent|
|art_libelle|Text|**Oui**|Libellé du produit|
|art_description|Text|**Oui**|Description du produit, vous pouvez utilisez des tags HTML simples comme <b>, <br /> <em>, etc.|
|mar_libelle|Text|Non|Libellé de la marque|
|seg_level_1|Text|Non|Libellé du niveau 1 de catégorie|
|seg_level_2|Text|Non|Libellé du niveau 2 de catégorie|
|seg_level_3|Text|Non|Libellé du niveau 3 de catégorie|
|seg_level_4|Text|Non|Libellé du niveau 4 de catégorie|
|seg_level_5|Text|Non|Libellé du niveau 5 de catégorie|
|seg_level_6|Text|Non|Libellé du niveau 6 de catégorie|
|art_pu_final_ttc|Number|Non|PU TTC final (payé par le client)|
|art_pu_base_ttc|Number|Non|PU TTC (barré en cas de promo)|
|art_date_debut_promo|DateTime|Non|Date de début de la promo|
|art_date_fin_promo|DateTime|Non|Date de fin de la promo|
|art_poids|Number|Non|Poids (en grammes)|
|arw_url_image|Text|Non|Url de l'image principale|
|arw_url_produit|Text|Non|Url du produit en cas d'utilisation d'un site e-commerce tiers|
|art_en_elaboration|Bool|Non|1 pour définir ce produit à 'non validé'. Veuillez ne mettre que l'un des deux champs suivants art_en_elaboration OU art_est_publie. Valeur par défaut : false|
|art_est_publie|Bool|Non|1 pour définir ce produit à 'validé'.Veuillez ne mettre que l'un des deux champs suivants art_en_elaboration OU art_est_publie. Valeur par défaut : true|
|code_prepa|Text|Non|Code du type de prépa à utiliser. Ne pas utiliser en même temps qu'un champ prepa:|
|prepa:[XXX]|Bool|Non|Active le type de préparation [XXX]. Ne pas utiliser en même temps que le champ code_prepa. Vous pouvez ajouter une colonne de ce type pour chaque type de prépa souhaité|
|art_type_stock|Enum|Non|Type de stockage : 0 = non stocké, 1=immatériel, 2=stocké FIFO, 3=stocké PUMP|
|ref:[XXX]|Text|Non|Permet d'ajouter une reférence supplémentaires. Par exemple, pour une colonne ref:[EAN13] : 01234567890123|
|prefixedattr|Text|Non|Permet de définir la valeur de plusieurs attributs, en mettant sous la forme XXX=YYY. Par exemple Couleur=Rouge|
|attr:|Text|Non|Permet de définir la valeur d'un attribut. Vous pouvez ajouter autant de colonnes de ce type que nécessaire|
