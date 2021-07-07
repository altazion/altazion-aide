var idxSearch = 0;

function setupSearch(id, tags) {
    document.getElementById(id).oninput = function(ev) {
        
        

        if(idxSearch>0)
            clearTimeout(idxSearch);

        var ctn = ev.target.value;
        if(ctn.length==0) {
            document.getElementById("altazion-search").classList.remove("visible");
        }
        else {
            var sbox = document.getElementById("altazion-search");
            var input = document.getElementById(id);
            sbox.scrollTop = input.scrollTop + input.scrollHeight + 10;

            document.getElementById("altazion-search").classList.add("visible");
            document.getElementById("altazion-search-wait").classList.add("visible");
            
            var tofetch = "https://aidesimplemente.search.windows.net/indexes/azureblob-index/docs?api-version=2019-05-06&search=";
            tofetch += ctn;
            
            idxSearch = setTimeout(function() {
                
                fetch(tofetch, { headers: {'Content-Type': 'application/json', 'api-key':'49367045F36D07C494C5589504195957'} }).then(function(response){
                    return response.json();
                }).then(function (data) {
                    showSearch(data);
                });
            }, 250);
        }
    }
    var tmp = document.createElement("div");
    tmp.id = "altazion-search";
    tmp.className = "altazion-search";
    document.body.appendChild(tmp); 

    var tmp2 = document.createElement("div");
    tmp2.id = "altazion-search-results";
    tmp2.className = "results";
    tmp.appendChild(tmp2); 

    tmp2 = document.createElement("div");
    tmp2.id = "altazion-search-wait";
    tmp2.className = "wait";
    tmp.appendChild(tmp2); 

    tmp = document.createElement("link");
    tmp.setAttribute("rel","stylesheet");
    tmp.setAttribute("href","/search.css");
    document.head.appendChild(tmp);
}

function URLTokenDecode(token) {

    if (token.length == 0) return null;

    // The last character in the token is the number of padding characters.
    var numberOfPaddingCharacters = token.slice(-1);

    // The Base64 string is the token without the last character.
    token = token.slice(0, -1);

    // '-'s are '+'s and '_'s are '/'s.
    token = token.replace(/-/g, '+');
    token = token.replace(/_/g, '/');

    // Pad the Base64 string out with '='s
    for (var i = 0; i < numberOfPaddingCharacters; i++)
        token += "=";

    return token;
}

function showSearch(data) {
    
    var resultDiv = document.getElementById("altazion-search-results");
    document.getElementById("altazion-search-wait").classList.remove("visible");
    while(resultDiv.hasChildNodes()) {
        resultDiv.removeChild(resultDiv.childNodes[0]);
    }
    for(var i= 0; i< data.value.length && i < 10; i++) {
        var item = document.createElement("div");
        item.className = "result";

        var tmp = document.createElement("a");

        var url = atob(URLTokenDecode(data.value[i].metadata_storage_path));

        if(url.endsWith("/toc.html"))
            continue;
        if(url.endsWith(".partial.html"))
            continue;
        if(url.endsWith(".include.html"))
            continue;
        
        var tags = new Array();
        if(url.startsWith("https://altazion.blob.core.windows.net/aide-publique/dev/"))
            tags.push("dev");    
        if(url.startsWith("https://altazion.blob.core.windows.net/aide-publique/aide/"))
            tags.push("aide");
        if(url.startsWith("https://altazion.blob.core.windows.net/aide-publique/dev/hub/")
            || url.startsWith("https://altazion.blob.core.windows.net/aide-publique/aide/fr-fr/hub/"))
            tags.push("altazion-hub");
        if(url.startsWith("https://altazion.blob.core.windows.net/aide-publique/aide/fr-fr/office/"))
            tags.push("altazion-office");
            if(url.startsWith("https://altazion.blob.core.windows.net/aide-publique/dev/ecommerce/")
            || url.startsWith("https://altazion.blob.core.windows.net/aide-publique/dev/ecommerce/")
            || url.startsWith("https://altazion.blob.core.windows.net/aide-publique/aide/fr-fr/commerce/")
            || url.startsWith("https://altazion.blob.core.windows.net/aide-publique/aide/fr-fr/ecommerce/"))
            tags.push("altazion-commerce");
        url = url.replace("https://altazion.blob.core.windows.net/aide-publique/dev/", "https://www.altazion.dev/");
        url = url.replace("https://altazion.blob.core.windows.net/aide-publique/aide/", "https://aide.altazion.com/");

        tmp.href = url;

        var title = data.value[i].metadata_title;
        if(title!=null)
        {
            title = title.replace("| Aide - Altazion", "");
            title = title.trim();
        }

        if(title==null || title == "") {
            title = url;
        }
        
        
        tmp.innerText = title;
        for(var j=0;j<tags.length;j++)
             tmp.classList.add(tags[j]);

        item.appendChild(tmp);
        resultDiv.appendChild(item); 
    }
}

function hideSearch(){
    
}
