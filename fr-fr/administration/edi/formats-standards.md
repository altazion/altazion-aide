# Formats standards

## Formats d'import

### Format Standard (RAW)

L'utilisation des formats RAW permettent d'accèlérer la prise en compte de vos données en utilisant un format de fichier standard. Le format est par contre très figé et doit être scrupuleusement respecté. Pour plus de souplesse dans vos échanges EDI, vous pouvez utiliser les formats personnalisables (cf. ci-dessous)

Les fichiers RAW doivent être :

*   Au format CSV, avec un séparateur point-virgule (ascii 0x3B)
*   Toutes les chaines doivent être placées entre double quotes (ascii 0x22). Les éventuelles doubles quotes dans vos colonnes doivent être doublées pour échappement.
*   Encodé en UTF-8, de préférence dans un fichier sans BOM/entête unicode
*   Les fins de lignes doivent être au format Windows (\\r\\n)
*   Les valeurs numériques seront présentées sans séparateur de regroupement et, dans le cas de valeur décimales, en utilisant le point . (ascii 0x2E) comme séparateur décimal
*   Les valeurs dates seront formatées selon la RFC 3339 et exprimées en UTC (par exemple 2010-01-01T00:00:01Z représente le 1er Janvier 2010 à minuit et 1 seconde UTC).
*   Les valeurs booléennes peuvent être passées sous la forme de true/false ou sous la forme 1/0 (1 valant "true", 0 valant "false")
*   Les colonnes fixes dont vous ne souhaitez pas renseigner la valeur doivent être laissées vides, sans aucun contenu.
*   Avoir une ligne avec les entetes de colonnes

_Attention, les entetes de colonnes sont à tritre informatif. L'ordre des colonnes est fixe et ne peut pas être changé : vous ne pouvez pas inverser deux colonnes dans le fichier._

### Format personnalisable (CSV)

Les médiations vous permettent d'accepter de très nombreux formats de fichiers textes, en paramètrant l'encodage, les caractères de séparation, etc. Toutefois, si vous créez un fichier spécifiquement pour une médiation, nous vous invitons à préférer les options suivantes :

*   Format d'encodage : UTF-8, sans entête Unicode de fichier
*   Fin de ligne au format Windows
*   Séparateur de colonne : pipe | (ascii 0x7C) ou point virgule ; (ascii 0x3B)
*   Si au moins l'une des colonnes peut contenir des caractères de commande, tels que des passages à la ligne, vous devez encadrer toutes les valeurs textes des différentes colonnes de double quotes " (ascii 0x22). Les doubles quotes présentes dans vos colonnes devront alors être doublés : ""
*   Les colonnes fixes dont vous ne souhaitez pas renseigner la valeur doivent être laissées vides, sans aucun contenu.

Et pour les valeurs des différents champs :

*   Les valeurs numériques seront présentées sans séparateur de regroupement et, dans le cas de valeur décimales, en utilisant le point . (ascii 0x2E) comme séparateur décimal
*   Sauf indications contraires, les colonnes Enum sont des numériques, entiers, devant être représenté sans aucune décimale ni séparateur.
*   Les valeurs dates seront formatées selon la RFC 3339 et exprimées en UTC (par exemple 2010-01-01T00:00:01Z représente le 1er Janvier 2010 à minuit et 1 seconde UTC.
*   Les valeurs booléennes peuvent être passées sous la forme de true/false ou sous la forme 1/0 (1 valant "true", 0 valant "false")

Ces préconisations ne sont en aucun cas obligatoires : il s'agit simplement des options par défaut de notre module d'import Texte.

### Contenu des fichiers

Sauf mention contraire dans la description d'un flux, tous les fichiers sont considérés comme des envoi complets et intégraux des données : chaque nouveau fichier _remplace intégralement_ les données se trouvant en base.

Par exemple, si vous automatisez un import hebdomadaire de vos articles, veillez bien à ce que tous les articles se trouvent dans votre fichier : si un article présent en base de données ne se trouve pas dans votre fichier, il sera considéré comme "archivé" et ne sera donc plus visible dans vos outils.