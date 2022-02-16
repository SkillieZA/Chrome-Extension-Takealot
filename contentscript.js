setTimeout(function(){

    
    //document.body.style.backgroundColor = "blue";
    var items = document.getElementsByClassName("grid-x grid-padding-x");

    var img = document.createElement('img'); 
    img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'; 
	
    //alert(items.length);
    
    for (let index = 1; index < items.length; index++) {
        const item = items[index];
        
        var a = item.querySelector("div.cell.shrink.detail-item-module_thumbnail_2gBDf > a");
        if (!a){
            continue;
        }
        var href = a.attributes["href"];
        if (!href)
        {
            continue;
        }
        href = href.value;

        var plid = href.substring(href.indexOf("PLID")+4);

        if (plid && plid.length > 0){
            var img = document.createElement('img'); 
            img.src = 'https://mytestskilliecompany.flowgear.net/PriceHistoryChart/PLID/' + plid + '/?date=2021-10-13&auth-key=eDyH1GY4njJvd4EJPGpcc02vEJisof7nyuRIBvCcKbmlDyi4oB-2AzUuAeRYr2Kj75OEwbXQS49vOVLP1KZ9hA'; 
            item.appendChild(img);
            //alert(plid);
        }



    }

  

    var test = document.querySelector("#shopfront-app > div.grid-container.account-module_account_2ZM2T > div > section > div > div > div:nth-child(1) > div > div.detail-module_wishlist_2mEDL > div:nth-child(1) > div:nth-child(1) > div > div > div")



 }, 5000);



