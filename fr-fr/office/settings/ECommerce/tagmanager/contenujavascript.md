# Contenu Javascript


Si les remplacements automatiques ne sont pas suffisants, vous pouvez aussi insérer tout code javascript nécessaire dans votre tag. Pour obtenir des informations concernant la navigation de l'utilisateur, vous pouvez utiliser l'object javascript E. Celui-ci contient des propriétés vous permettant de récupérer :

|Objet|Contenu|
|---|---|
|Panier.Data|Le contenu du panier, sous la forme d'un objet PanierResume|
|Process.Data|Les informations du processus de commande, sous la forme d'un ResumeProcess|
|ProductDetails|Sur une fiche produit, les donn&eacute;es de l'article, sous la forme d'un ArticleData|
|ProductsList|Sur une descente produit, les produits affich&eacute;s sous la forme d'un array d'ArticleData|


<h2>Panier</h2>
<p>En utilisant la syntaxe E.Panier.Data, vous obtiendrez un objet javascript&nbsp;qui correspond &agrave; la structure :</p>


<script src='https://gist.github.com/simplement-e/12e2b76d1ab6d5196bd0.js'></script>
<h3>Exemple</h3>

```csharp
class Panier
{
    LignePanier[] Lignes { get; set; }
    LignePanier FraisPort { get; set; }
    LignePanier[] Avantages { get; set; }
    bool EstValidable { get; set; }
    bool DemandeFraisPort { get; set; }
    string DestinationPrevueCodePostal { get; set; }
    string DestinationPrevueCodePays { get; set; }
    ErreurPanier ErreurPanier { get; set; }
    string Incitation { get; set; }
    string ModeLivraisonIdentifiant { get; set; }
    bool ModeLivraisonEstPointRetrait { get; set; }
    Guid ClientGuid { get; set; }
    string ClientNom { get; set; }
    bool EstClientConnecte { get; set; }
    decimal MontantTTC { get; set; }
    string MontantTTCFormate { get; set; }
}

enum MetaTypeArticle
{
    Produit,
    FraisDePort,
    Avantages,
    Services
}

class LignePanier
{
    MetaTypeArticle TypeArticle { get; set; }
    string Identifiant { get; set; }
    string IdentifiantLigneParent { get; set; }
    string Libelle { get; set; }
    string Reference { get; set; }
    decimal Quantite { get; set; }
    string GroupePanier { get; set; }
    decimal PuOriginalHT { get; set; }
    decimal PuOriginalTTC { get; set; }
    decimal PuFinalTTC { get; set; }
    decimal PuFinalHT { get; set; }
    decimal RemiseHT { get; set; }
    decimal RemiseTTC { get; set; }
    string ImageUrl { get; set; }
    bool LigneMiseAJour { get; set; }
    string Marque { get; set; }
    Guid? MagasinGuid { get; set; }
    string Groupe { get; set; }
}

class ErreurPanier
{
    string Message { get; set; }
    bool EstBloquante { get; set; }
    string MessageCorrection { get; set; }
    string UrlCorrection { get; set; }
    bool EstRedirectionAutomatique { get; set; }
}
```

```javascript
// Récupère le montant TTC du panier
var mntTTc = E.Panier.Data.MontantTTC;
// vérifie si le panier est en erreur ou non
if(E.Panier.Data.ErreurPanier==null) {
  // pas d'erreur
}
else {
  var err = E.Panier.Data.ErreurPanier.Message;
}
```
<h2>Process de commande</h2>
<p>A partir de la page panier et dans toutes les pages du process de commande, l'objet E.Process.Data est d&eacute;fini comme ceci :</p>


```csharp
class ResumeProcess
{
    Guid ClientGuid { get; set; }
    decimal MontantTTC { get; set; }
    string MontantTTCFormate { get; set; }
    Guid ModeLivraisonGuid { get; set; }
    string ModeLivraison { get; set; }
    decimal ModeLivraisonMontantTTC { get; set; }
    DateTime DateLivraisonPrevue { get; set; }
    bool DemandeAdresseLivraison { get; set; }
    bool DemandePointLivraison { get; set; }
    bool EstLivraisonMagasin { get; set; }
    string NomDestinataire { get; set; }
    bool EstValidable { get; set; }
    bool EstTerminee { get; set; }
    string NumeroCommande { get; set; }
    Guid GuidCommande { get; set; }
    AdresseClientProcess AdresseLivraison { get; set; }
    AdresseClientProcess AdresseFacturation { get; set; }
    PointLivraisonDetailProcess PointLivraisonAdresse { get; set; }
}

class AdresseClientProcess
{
    Guid Guid { get; set; }
    string Civilite { get; set; }
    string Nom { get; set; }
    string Prenom { get; set; }
    string Adresse { get; set; }
    string Ville { get; set; }
    string PayPk { get; set; }
    string Telephone { get; set; }
    string Mobile { get; set; }
    string CP { get; set; }
    string Email { get; set; }
}

class GeoLocalisationPointLivraisonProcess
{
    decimal Lattitude { get; set; }
    decimal Longitude { get; set; }
}

class PointLivraisonProcess
{
    Guid Guid { get; set; }
    string Civilite { get; set; }
    string Nom { get; set; }
    string Adresse { get; set; }
    string Ville { get; set; }
    string Telephone { get; set; }
    string CP { get; set; }
    string Email { get; set; }
    string Indication { get; set; }
    string[] Services { get; set; }
    GeoLocalisationPointLivraisonProcess Localisation { get; set; }
    bool EstActif { get; set; }
}


class PointLivraisonHoraireProcess
{
    string Jour { get; set; }
    string DebutPeriode1 { get; set; }
    string DebutPeriode2 { get; set; }
    string FinPeriode1 { get; set; }
    string FinPeriode2 { get; set; }
}


class PointLivraisonDetailProcess : PointLivraisonProcess
{
    PointLivraisonHoraireProcess[] Horaires { get; set; }
    string Commentaires { get; set; }
}
```

<h2>Articles</h2>
<p>Vous pouvez r&eacute;cup&eacute;rer des informations&nbsp;sur les articles affich&eacute;s en utilisant :</p>
<ul>
<li>dans une page de descente produit E.ProductsList (vous obtiendrez alors un Array de la classe ci-dessous)</li>
<li>dans une fiche produit via E.ProductDetails</li>
</ul>


```csharp
class ArticleBase
{
    decimal? SegmentationPrincipalePk { get; set; }
    string MainImage { get; set; }
    string SmallImage { get; set; }
    string IntermediateImage { get; set; }
    string Tag { get; set; }
    int TypeStockage { get; set; }
    bool EstArchive { get; set; }
    bool EstLivrable { get; set; }
    int ID { get; set; }
    Guid Guid { get; set; }
    decimal PuHT { get; set; }
    decimal PuTTC { get; set; }
    decimal? PuPromoHT { get; set; }
    decimal? PuPromoTTC { get; set; }
    DateTime? DateDebutPromo { get; set; }
    DateTime? DateFinPromo { get; set; }
    string Libelle { get; set; }
    string Reference { get; set; }
    string Description { get; set; }
    int? MarqueId { get; set; }
    bool EstUtilisableInternet { get; set; }
    bool EstMultiversion { get; set; }
    bool EstGenerique { get; set; }
    bool EstCompose { get; set; }
    decimal? PuConseilleHT { get; set; }
    decimal? PuConseilleTTC { get; set; }
    string Marque { get; set; }
    int MetaType { get; set; }
    bool DisponibleCommande { get; set; }
    bool DisponibleCentrale { get; set; }
    bool DisponibleMagasin { get; set; }
}
```