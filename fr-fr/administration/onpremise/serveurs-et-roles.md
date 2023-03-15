# Serveurs et rôles

## Rôle Office

## Rôle e-commerce

### Configuration DNS e-commerce

Chaque site e-commerce que vous allez mettre à disposition doit avoir ses propres enregistrements DNS, qui 

## Rôle API

## Rôles Store & Signage

### Configuration DNS phygitale

Le principe est le même que pour le rôle e-commerce ci-dessus : vous devez configurer une url unique pour chaque catalogue que vous mettez à disposition. Si, par exemple, votre entreprise propose un catalogue pour la France et un pour l'Italie, vous devrez avoir deux enregistrements DNS pointant vers votre serveur Store & Signage.

Vous pouvez bien, entendu utiliser soit des enregistrement A ou des CNAME :

    store-fr    CNAME   monserveur.mondomaine.com
    store-it    CNAME   monserveur.mondomaine.com

ou

    store-fr    A   123.123.123.123
    store-it    A   123.123.123.123

Vous devrez ensuite déclarer ces urls dans les urls de vos catalogues phygitaux ou (dans les urls des sites e-commerce) dans Office.

## Rôles Orchestrator & Hub

Les rôles Orchestrator et Hub peuvent être déployés :

- sous forme de service sous Windows
- sous forme de container Docker sous Linux (et sous Windows dans certains cas).

