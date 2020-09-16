# Configuration générale

## Connexion à la base de données

La connexion à la base de données est placée dans un fichier nommé `cpointsoftware.config` dans [le dossier de configuration générale](dossier.md#dossiers-de-solution).

Il se compose comme suit :

```xml
<?xml version='1.0' encoding='utf-8' ?>
<Configuration>
 <Sections>
  <Section name='Framework' assemblyName='CPointSoftware.Framework' 
       className='CPointSoftware.Framework.Configuration.ConfigurationHandler'/>
 </Sections>
 <Settings >
  <Framework>
    <Connections>
      <Connection name='Equihira' default='true'
           connectionString='...' />
    </Connections>
  </Framework>
 </Settings>
</Configuration>
```

La chaine de connexion principale, `name='Equihira' default='true'` correspond à la connexion à la base de données SQL Serveur.

Selon votre installation et les modules installés, vous pourriez avoir besoin d'ajouter des noeuds pour les connexions aux services suivants :

|Name|Type|Chaine de connexion|
|---|---|---|
|Faneon|Service comptabilité|Connexion à la base d'export des données comptables|
|Wenjian|Base documentaire|Connexion à la base documentaire|
|Knowledge|__[obsolète]__|Ne plus utiliser, le service Knowledge est maintenant hébergé en mode SaaS.

Chacun des noeuds supplémentaire devra voir son attribut `default` placé à `false`. Par exemple :

```xml
<Connection name='Equihira' default='true'
    connectionString='...' />
<Connection name='Wenjian' default='false'
    connectionString='...' />
```

## Path vers les applications

Dans le même dossier de configuration générale, vous pourrez retrouver un fichier `applicationspath.config`

Ce fichier contient les path vers les différentes instances de nos applications qui sont installées sur votre serveur. Ce fichier est automatiquement mis à jour par les modules leur de leur démarrage, mais vous pouvez souhaiter ajouter des paths pour déclarer des versions distinctes de la production.

Ce fichier est utilisé par le [module de mise à jour](versions.md) pour déterminer les dossiers dans lesquels installer les nouvelles releases.

