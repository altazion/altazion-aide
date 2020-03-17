# Importer un flux en mode RAW via API

Les données importables via cette procédure sont obligatoirement défini dans l'un des formats RAW tels que décrit dans la partie correspondante de ce site d'aide. _L'utilisation de tout autre format d'import sera rejeté et pourra conduire à la corruption de votre base de données_.

Pour lancer un import de données en mode API, créez un nouveau projet c# dans votre IDE (Visual Studio, par exemple).

Si vous utilisez Xamarin Workbook, vous pouvez télécharger cette documentation en format interactif : [AppelAPIImportFichier.workbook](https://datasimplemente.blob.core.windows.net:443/integrateurs/edi/AppelAPIImportFichier.workbook)

Ajouter ensuite le nuget JSON.net, afin de simplifier les appels aux méthodes REST, puis les usings et structures de données suivantes :

```csharp
using Newtonsoft.Json; 
using System;
using System.Net;
using System.Text;

public class RawStandardFile
{
    public string Url { get; set; }
} 

public class MediationStatus
{
    public bool? IsCompleted { get; set; }
    public List<MediationMessage> Messages { get; set; }
}

public enum MediationMessageKind
{
    Information = 0,
    Error = 1
}

public class MediationMessage
{
    public DateTimeOffset Date { get; set; }
    public string Message { get; set; }
    public MediationMessageKind Kind { get; set; }
}
```

Vous devez ensuite récupérer le compte d'une application connecté sur votre tenant. Connectez vous sur votre back-office simplement-e, puis dans Paramètres > Extensibilité > Application connectée, récupérez les identifiants de votre application ou créez-en une nouvelle.

Avec ces identifiants, nous allons établir une connexion avec authentification basic _(ce mode n'est disponible que si vous utilisez simplement-e via un lien sécurisé HTTPS)_

````csharp
// remplacez ci-dessous par vos identifiants API
string basic = string.Format("{0}:{1}", "##votre id application##", "##votre clef secrete##");
basic = Convert.ToBase64String(Encoding.UTF8.GetBytes(basic));

WebClient cli = new WebClient();
cli.Proxy = WebRequest.DefaultWebProxy;
// remplacez ci-dessous par votre url API
cli.BaseAddress = "##l'url racine de votre service API##";
cli.Headers.Add("Authorization", "basic:" + basic);
cli.Encoding = Encoding.UTF8;
cli.Headers.Add("Content-Type", "text/json");
```

Construisez ensuite l'appel pour déclencher l'import. Si vous êtes OnPremise et avez accès aux disques de votre serveur, vous pouvez déclencher un import sur un fichier local. Dans le cas contraire, vous devrez, avant de déclencher l'import, déposer votre fichier sur un emplacement accessible via une url utilisant http:// ou https://.

```csharp
string rawJson;
rawJson = cli.UploadString("app/mediations/standard/#flux#", // nom du flux à importer
                 "PUT", 
                 JsonConvert.SerializeObject(new RawStandardFile()
                 {
                     Url = "http://monserver.mondomaine.com/staging/file123.csv"
                 }));
Guid importGuid = JsonConvert.DeserializeObject<Guid>(rawJson);
```

Pour obtenir l'état d'avancement de l'import, il suffit d'appeler, de façon régulière le point API correspondant.

_Attention, dans cette version de l'API, le booléen IsCompleted de la structure d'état n'est pas renseigné pour les soumissions "manuelles" via l'API ou via la fonctionnalité de "test de flux" dans le front-office. Il est par contre correctement renseigné pour toute les soumissions faisant partie d'une médiation. Dans le cadre de ce mini projet, il vous faudra analyser le texte des messages pour déterminer l'état d'avancement de l'import._

```csharp
rawJson = cli.DownloadString("app/mediations/status/" + importGuid.ToString());
var status = JsonConvert.DeserializeObject<MediationStatus>(rawJson);
```

Le premier appel retournera probablement une liste de messages vides : il faut quelques secondes avant que le traitement soit effectivement déclenché. Si, au bout de 30 secondes, vous ne recevez toujours aucun message, vérifiez que le service de traitement est actif sur votre serveur.
