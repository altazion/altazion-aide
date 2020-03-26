# Modules fonctionnels

Nos solutions sont conçues pour être modulaires et vous permettre de n'activer que ce dont vous avez besoin, vous évitant d'être submergés par des centaines de fonctionnalités que vous ne souhaitez pas utiliser.

Vous pouvez retrouver, dans les paramètres de votre entreprise un catalogue de modules vous proposants l'intégralité de nos fonctionnalités et décider quelles sont celles qui vous intéressent.

Les modules sont regroupés par catégories :

|Catégorie|Description|
|---|---|
|[Catalogue](catalogue/index.md)|Gestion de vos produits|



<div id="modules-tree" style="width:100%; height: 460px"> </div>
<script src="../../../resources/treant.js"></script>
<script type='text/javascript'>
    var modules = {
        chart: {
        container: "#modules-tree"
        },
        nodeStructure: {
        text: { name: "Parent node" },
        children: [
            {
                text: { name: "First child" }
            },
            {
                text: { name: "Second child" }
            }
        ]
    }
    };
    var my_chart = new Treant(modules);
</script>