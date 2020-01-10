# NOS APIS

Vous trouverez dans cette section la description de nos APIs au format REST. Si vous utilisiez nos WebServices SOAP, les points API decrit dans cette partie de l'aide remplacent les méthodes que vous utilisiez.

## Nos différentes APIs

Elles sont regroupées en trois grandes parties, en fonction de leur destination et/ou de leur contexte d'utilisation :

- les API Principales permettent de connecter une application métier à l'intégralité de notre plateforme et sont à privilégier dans le cadre d'une application complexe, modifiant directement les données de votre entreprise
- Les API e-commerce sont exclusivement disponibles dans un site e-commerce et permettent d'interagir avec le catalogue de ce dernier ainsi qu'avec tous les process de commande
- Les API Phygitales sont destinées aux devices d'aides à la ventes : elles sont par exemple utilisée dans nos tablettes vendeurs, outils d'aides à la ventes, etc.

Il est à noter que le niveau de sécurité de l'api e-commerce est très réduit.

## Conventions d'appels

Les APIs suivent les principes habituels des services REST : chaque opération est réalisée via un appel HTTP/HTTPS à une url donnée, éventuellement complétée de paramètres ou d'un corps de requête. Lorsqu'un corps de requete est demandé, celui-ci devra être passé au format JSON, avec un ContentType "application/json".

Les données passées en tant que paramètres d'url doivent suivre les conventions suivantes :

- Les valeurs numériques seront présentées sans séparateur de regroupement et, dans le cas de valeur décimales, en utilisant le point . (ascii 0x2E) comme séparateur décimal
- Les valeurs dates seront formatées selon la RFC 3339 et exprimées en UTC (par exemple 2010-01-01T00:00:01Z représente le 1er Janvier 2010 à minuit et 1 seconde UTC.
- Les valeurs booléennes peuvent être passées sous la forme de true/false

## EXEMPLE D'APPEL

Obtenir les détails d'un article depuis les APIs principales :


``` text
GET http://demo-api-simplement-e.azurewebsites.net/api/catalogue/articles/000008/data HTTP/1.1
cache-control: no-cache
Authorization: Basic R**********************************************************==
Accept: */*
Host: demo-api-simplement-e.azurewebsites.net
accept-encoding: gzip, deflate
Connection: keep-alive




HTTP/1.1 200 OK
Cache-Control: no-cache
Pragma: no-cache
Content-Length: 1675
Content-Type: application/json; charset=utf-8
Expires: -1
Vary: Accept-Encoding
Date: Thu, 14 Dec 2017 13:52:43 GMTGET http://demo-api-simplement-e.azurewebsites.net/api/catalogue/articles/000008/data HTTP/1.1
cache-control: no-cache
Authorization: Basic ******
Accept: */*
Host: demo-api-simplement-e.azurewebsites.net
accept-encoding: gzip, deflate
Connection: keep-alive
{
    "AutresReferences": null,
    "EmplacementStockMagasin": "Inconnu",
    "Dimensions": null,
    "Taxes": null,
    "Parent": null,
    "Disponibilites": null,
    "Instances": null,
    "Documents": null,
    "Videos": null,
    "MoreImages": [],
    "Labels": null,
    "Attributs": {
        "42232ade-9d98-44a7-a9dd-06b44d86084f": "False",
        "a8f0cf4e-87b3-4330-b747-1293e8fd50a0": "112g",
        "8edd8a5c-4dcd-4755-8ec0-2262c130af3e": "34g",
        "be87c2b8-25e2-4758-89c6-2a60fe3c985b": "False",
        "0d7f6856-169b-4ed0-8b2e-2cd712b9dc9f": "False",
        "6820cfc6-a9ca-4e5a-8b33-3c59a6f3bb52": "Fraise",
        "3ef27b27-8aa4-4852-8d77-508dd3cc18c7": "Conserver au frais 1 jour avant de consommer",
        "0969d3fe-b00c-461c-8a5c-53190e4be498": "Pâte feuilletée, Sucre glace, Lait, Oeuf, Fraise, Sucre, Farine, Crème liquide, Vanille",
        "cb00acfd-dc59-4a4e-9e27-53eddfbc2f9f": "False",
        "0c2ff3b6-0c4d-4f5b-95fc-7715da77e7da": "False",
        "2d483472-c600-48b9-a95e-87829ade479f": "114g",
        "0f73e6fd-0c5d-4135-8d80-8bd56817b49e": "False",
        "7ac80cd0-f12f-47d0-93ae-afe6ea5f62b6": "762kcal",
        "51af4605-a8ba-4bc9-827b-b465814bf4fb": "False",
        "2a62193d-7a9e-4d4a-9d82-c8c59a8425b5": "False",
        "abebf55d-6c39-43fd-8c33-cad864aaaf18": "False",
        "fb44706c-b03b-4780-aff3-d5bf7cbe3aa2": "False",
        "d9fd174f-84f8-4707-ab0d-d9f6b6843cff": "False",
        "4109a60c-cd4b-40cc-90d2-ec836c70e296": "False",
        "2d972dc7-a881-4132-9f31-f9d11d2fca26": "Individuel",
        "d6d87a3d-ef1d-421c-ab3d-fb4b9b1fc42e": "False"
    },
    "AttributsPrives": {},
    "LogosUrls": null,
    "ArticlesAssocies": null,
    "SuggestionsAuto": null,
    "Services": null,
    "Avis": null,
    "Url": null,
    "OriginalImageUrl": null,
    "EstEnPromo": false,
    "PctRemise": null,
    "AllTags": [],
    "IntermediateImage": null,
    "Marque": null,
    "SegmentationPrincipalePk": null,
    "MainImage": null,
    "SmallImage": null,
    "Tag": null,
    "DisponibleCommande": false,
    "DisponibleCentrale": false,
    "DisponibleMagasin": false,
    "TypeStockage": "StockePump",
    "EstArchive": false,
    "EstLivrable": true,
    "ID": 62329,
    "Guid": "7bc07706-7c8b-4d4e-8f3d-f7a7db3cbd89",
    "PuHT": 0,
    "PuTTC": 0,
    "PuPromoHT": null,
    "PuPromoTTC": null,
    "DateDebutPromo": null,
    "DateFinPromo": null,
    "Libelle": "Mille feuilles fraises",
    "Reference": "000008",
    "Description": "L'un des plus grands classiques des desserts français se pare désormais de ses fraises les plus fondantes et sucrées pour satisfaire pleinement vos exigences !",
    "MarqueId": -1,
    "EstUtilisableInternet": true,
    "EstMultiversion": true,
    "EstGenerique": false,
    "EstCompose": false,
    "PuConseilleHT": 1.55,
    "PuConseilleTTC": 1.7,
    "MetaType": "Produit"
}
```