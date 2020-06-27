# Format d'impression
exemple de fichier :
 ```xml
<Document>
	<Settings/>
	<PageModel>
		<Image position="0;0"   
			image="c:\facture.png"/>
		<String position="55;320" text="Facture" font="Arial; 8"/>  

	</PageModel>  
	<Page>  
	</Page>  

 </Document>
```

pour les définition si dessous, un attribut ou un elément enfant **en gras** est obligatoire, si celui-ci est _en italique_, une régle de gestion spécifique lui est attribué : reportez vous à la description de l'élément pour savoir laquelle.

## Element racine `<Document>`

Element enfant :  `<Settings>`, `<PageModel>`, `<Page>`, `<SimpleReport>`

## Element `<Settings>`

**Une seule instance de l'element Settings est autorisé**.

Element enfant :  `<DefaultFont>`, `<DefaultColor>`, `<Unit>`

## Element `<PageModel>`

Défini le modèle de page qui sera appliqué. (comparable à un fond de page). **Une seule instance de l'element PageModel est autorisé**.

Element enfant : `<Image>`, `<String>`, `<FilledRectangle>`, `<HollowRectangle>`, `<PageNumber>`, `<HorizontalLine>`

## Element `<Page>`

Défini une page dans le document à imprimer (seront imprimé dans l'ordre : le PageModel en fond puis les elements de cette Page)

Element enfant : `<Image>`, `<String>`, `<FilledRectangle>`, `<HollowRectangle>`, `<PageNumber>`, `<HorizontalLine>`

## Element `<SimpleReport>`

Permet de définir un report pour lequel la taille et la composition des lignes reste identique sur toutes les pages (l'odre d'impression PageModel puis SimpleReport est bien sûr réalisé). L'entete (`<header>`) sera repris sur toutes les pages et peut contenir aussi bien un entete que le pied de page, les `<rows>` seront ajoutés les unes après les autres avec passage de page dès que cela est nécéssaire

Element enfant : `<Header>`,_`<Row>`_

Attributs :

* **bodyLocation** : position du contenu du report (c'est a dire l'ensemble des rows) sous la forme "x;y" (ex : 65;48)
* **bodySize** : taille du contenu du report sous la forme "width;height" (ex : 550;450)
* **rowSize** : taille d'une ligne sous la forme "width;height" (ex : 550;50)

## Element `<Header>`

Représente l'entete (et le pied de page) d'un report.**Une seule instance de l'element Header est autorisé par report.**  

Element enfant : `<Image>`, `<String>`, `<FilledRectangle>`, `<HollowRectangle>`, `<PageNumber>`, `<HorizontalLine>`

## Element `<Row>`

Représente une ligne dans un report. **Si aucun élément Row n'est présent dans le Report, celui-ci n'est pas imprimé**.

Element enfant : `<Image>`, `<String>`, `<FilledRectangle>`, `<HollowRectangle>`, `<PageNumber>`, `<HorizontalLine>`

## Element `<Image>`

Ajoute une image dans un conteneur Page, PageModel etc.

Attributs :

* **position** : position sous la forme "x;y" (ex : 65;48)
* **image** : path vers l'image  (format de fichiers supportés : tous ceux de GDI+ dont : jpeg, gif, png, bmp...)
    * soit sous la forme "pathverslefichier.jpg" (ex : fondPage.jpg)
    * soit sous la forme "#nomdelassembly,nomdelaressource) (ex : #CPointSoftware.Tools,CPointSoftware.Tools.Logo.png)
* size : defini la taille de l'image sur la sortie au format "width;height", si cet élément n'est pas précisé, la taille de l'image est utilisé.

## Element `<Text>` ou `<String>`

Ajoute une chaine de caracteres dans un conteneur

Attributs :

* **position** : position sous la forme "x;y" (ex : 65;48)
* text : texte à imprimer
* font : la fonte à utiliser, le format est le suivante : {font-face} [, {size}] [,{normal|bold|italic}]
* stringFormat : alignement : {center}|{far}|{near}
* color : couleur au format HTML : #XXXXXX ou l'une des couleurs prédéfinies
* autoHeightExpand : si _true_, le champs s'etendra automatiquement au niveau de la hauteur pour correspondre au texte 
* size : defini la taille de la zone de texte sur la sortie au format "width;height"

## Element `<HorizontalLine>`

Dessine une ligne horizontale sur le conteneur

Attributs :

* **position** : position sous la forme "x;y" (ex : 65;48)
* color : couleur au format HTML : #XXXXXX ou l'une des couleurs prédéfinies
* size : defini la taille de la ligne (avec le height=epaisseur du trait)

## Element `<PageNumber>`

Affiche le n° de la page dans un conteneur

Attributs :

* **position** : position sous la forme "x;y" (ex : 65;48)
* _format_ : le masque utilisé pour l'impression, le texte renseigné dans cet attribut sera imprimé avec un remplacement à la string.format : format="Page {CurrentPage:00}" donnera Page 01\. Les champs connus sont CurrentPage, CurrPage et TotalPage
* font : la fonte à utiliser, le format est le suivante : {font-face} [, {size}] [,{normal|bold|italic}]
* stringFormat : alignement : {center}|{far}|{near}
* color : couleur au format HTML : #XXXXXX ou l'une des couleurs prédéfinies
* autoHeightExpand : si _true_, le champs s'etendra automatiquement au niveau de la hauteur pour correspondre au texte 
* size : defini la taille de la zone de texte sur la sortie au format "width;height"

## Element `<FilledRectangle>`

Affiche un rectangle (rempli) dans la page

Attributs :

* **position** : position sous la forme "x;y" (ex : 65;48)
* **color** : couleur au format HTML : #XXXXXX ou l'une des couleurs prédéfinies
* **size** : defini la taille de la zone de texte sur la sortie au format "width;height"

## Element `<HollowRectanbgle>`

Affiche un rectangle (vide) dans la page

Attributs :

* **position** : position sous la forme "x;y" (ex : 65;48)
* **color** : couleur au format HTML : #XXXXXX ou l'une des couleurs prédéfinies
* **size** : defini la taille de la zone de texte sur la sortie au format "width;height"