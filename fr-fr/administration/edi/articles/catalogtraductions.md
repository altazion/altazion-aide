# Traduction des données produits

Intégration des traductions des données produits


[!include[catalogtraductions.csv.autogen](catalogtraductions.csv.autogen.md)]

<!-- [!include[catalogtraductions.raw.autogen](catalogtraductions.raw.autogen.md)]--> 

<!-- [!include[catalogtraductions.xml.autogen](catalogtraductions.xml.autogen.md)]--> 

### Remarques

Vous pouvez utiliser les codes "types" suivants pour les imports :

**Code**

**Description**

SEGMT

Segmentations (catégories publiques) des produits. 

MARQU

Marques

ATTRT

Définitions d'attributs personnalisés sur les articles

ATVAL

Valeur énumérée d'un attribut personnalisé. Pour ce type d'import, vous devez absolument préciser un code d'attribut (dans la colonne code) et un code de valeur (dans codevaleur)

CRITR

Définition d'un critère. **Attention, les critères basés sur un attribut prendront automatiquement la traduction du nom de l'attribut : il n'est pas possible de traduire séparément le libellé.**

#### Exemple de fichier
