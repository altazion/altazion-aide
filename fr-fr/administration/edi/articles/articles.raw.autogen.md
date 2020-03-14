## Standard

|Champ|Type|Obligatoire|Decription|
|---|---|---|---|
|iar_external_id|Text|**Oui**|Référence ou id externe de l'article|
|iar_external_id_parent|Text|Non|Référence ou id externe de parent de l'article. Cet article doit exister ou se trouver dans le même fichier. Laisser vide pour un article sans parent.|
|iar_reference|Text|**Oui**|Référence de l'article|
|iar_libelle|Text|**Oui**|Libellé de l'article|
|iar_type_article|Text|Non|Type d'article|
|iar_description|Text|**Oui**|Description externe de l'article|
|iar_marque|Text|Non|Marque de l'article|
|iar_famille|Text|Non|Famille (interne) de l'article|
|iar_ssfamille|Text|Non|Sous-Famille (interne) de l'article|
|iar_tva|Number|Non|Taux de TVA de l'article (sous la forme 0.2 pour 20%)|
|iar_prix_ttc|Number|**Oui**|Prix TTC de l'article|
|iar_prix_ht|Number|Non|Prix HT de l'article. Si non fourni, calculé à partir du prix TTC et du taux de TVA|
|iar_prix_promo_ht|Number|Non|Prix HT promotionnel de l'article (attention, colonnes HT/TTC inversées par rapport au prix de base)|
|iar_prix_promo_ttc|Number|Non|Prix TTC promotionnel de l'article. (attention, colonnes HT/TTC inversées par rapport au prix de base)|
|iar_date_debut_promo|DateTime|Non|Date de début de la promo|
|iar_date_fin_promo|DateTime|Non|Date de fin de la promo|
|iar_segment_niv1|Text|Non|Nom du segment de niveau 1 dans lequel se trouve l'article. Ne pas renseigner en même temps que le seg_pk.|
|iar_segment_niv2|Text|Non|Nom du segment de niveau 2 dans lequel se trouve l'article. Ne pas renseigner en même temps que le seg_pk.|
|iar_segment_niv3|Text|Non|Nom du segment de niveau 3 dans lequel se trouve l'article. Ne pas renseigner en même temps que le seg_pk.|
|iar_segment_niv4|Text|Non|Nom du segment de niveau 4 dans lequel se trouve l'article. Ne pas renseigner en même temps que le seg_pk.|
|iar_segment_niv5|Text|Non|Nom du segment de niveau 5 dans lequel se trouve l'article. Ne pas renseigner en même temps que le seg_pk.|
|iar_segment_niv6|Text|Non|Nom du segment de niveau 6 dans lequel se trouve l'article. Ne pas renseigner en même temps que le seg_pk.|
|iar_seg_pk|Number|Non|Identifiant interne du segment 'feuille' dans lequel se trouve l'article.|
|iar_est_valide|Bool|Non|'true' pour considérer l'article comment valide et commercialisable, false pour l'exclure de la vente|
|iar_importance|Number|Non|Importance de l'article (plus l'importance est elevée, plus l'article est mis en avant)|
|iar_code_prepa|Number|Non|Code du type de préparation pour cet article|
|iar_type_stock|Number|Non|Type de stock (0 = non géré/drop shipping, 1=immatériel, 2=FIFO, 3=PUMP)|
|iaw_url_img_big|Text|Non|Url vers l'image grand format|
|iaw_url_img_small|Text|Non|Url vers l'image petit format|
|iaw_url_img_tiny|Text|Non|Url vers une imagette très réduite de l'article|
|iaw_meta_description|Text|Non|Meta description pour les moteurs de recherche|
|iaw_url_externe|Text|Non|Url vers la fiche produit de l'article sur un site externe|
|iaw_qte_seuil_dispolimitee|Number|Non|Quantité à partir de laquelle le produit est marqué comme 'en disponibilité limitée'|
