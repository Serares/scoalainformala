

function overlayOn(){
    document.getElementById("overlay").style.display = "block";
}

function overlayOff(){
    document.getElementById("overlay").style.display = "none";
}



function desenare(data){

    var html = ``;
    for(var obj in data){

        console.log(data[obj]);

            var produse = `
        
        <div class="cartonas" >

        <div id="imagineProdus" onclick="redirectDetalii()">
            <img src="${data[obj].imagine}" alt="imgProdus">
        </div>

        <div id="pretProdus">
            <span id="pret">${data[obj].pret}</span><span id="lei">LEI</span>
        </div>

        <div id="detaliiProdus">
            <span>${data[obj].detalii}</span>
        </div>

        <div id="btnProdus">
            <a href="#"><button onclick="drawDetalii(${obj})">Vezi detalii</button></a>
        </div>

    </div>
        
        `;
        html+= produse;
 
    }

    document.querySelector('.iteme').innerHTML = html;

}


function cerereAjax(){

    var req = new XMLHttpRequest;

    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            var date = JSON.parse(this.responseText);
            console.log(date);
            desenare(date);
        }
    }

    req.open('GET','https://proiect-magazin.firebaseio.com/.json');
    req.send();

}
