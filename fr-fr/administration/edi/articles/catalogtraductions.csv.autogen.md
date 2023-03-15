## Personnalisable (CSV)

|Champ|Type|Obligatoire|Decription|
|---|---|---|---|
|type|Enum|**Oui**|Le type de données (par exemple : 'SEGMT' pour segmentation, 'MARQU' pour les marques, cf. remarques)|
|code|Text|**Oui**|Code de la valeur à traduire (doit matcher avec le code externe correspondant dans la table à traduire)|
|langue|Text|**Oui**|Le code langue (sur deux caractères)|
|codevaleur|Text|Non|Dans le cas de ATVAL : code de la valeur énumérée, ignoré pour tous les autres types|
|libelle|Text|Non|Le libellé traduit|
