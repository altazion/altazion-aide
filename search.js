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
            
            var tofetch = "https://aidesimplemente.search.windows.net/indexes/aide-altazion/docs?api-version=2019-05-06&$filter=type/any(t :";
            tofetch += tags;
            tofetch += ")&search=";
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
        tmp.href = data.value[i].url;
        tmp.innerText = data.value[i].title;
        for(var j=0;j<data.value[i].type.length;j++)
            tmp.classList.add(data.value[i].type[j]);

        item.appendChild(tmp);
        resultDiv.appendChild(item); 
    }
}

function hideSearch(){
    
}
