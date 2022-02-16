// I don't know how to detect when the page have loaded, so just waiting 5 seconds
setTimeout(function(){

    // Get a list of items
    var items = document.getElementsByClassName("grid-x grid-padding-x");
    
    for (let index = 1; index < items.length; index++) {
        const item = items[index];
        
        var a = item.querySelector("div.cell.shrink.detail-item-module_thumbnail_2gBDf > a");
        if (!a){
            continue;
        }
        var href = a.attributes["href"];
        if (!href){
            continue;
        }

        href = href.value;

        var plid = href.substring(href.indexOf("PLID")+4);

        // Insert the graph into the current div
        if (plid && plid.length > 0){
            var img = document.createElement('img'); 
            img.src = 'https://mytestskilliecompany.flowgear.net/PriceHistoryChart/PLID/' + plid + '/?date=2021-10-13&auth-key=eDyH1GY4njJvd4EJPGpcc02vEJisof7nyuRIBvCcKbmlDyi4oB-2AzUuAeRYr2Kj75OEwbXQS49vOVLP1KZ9hA'; 
            item.appendChild(img);
        }
    }
 }, 5000);



