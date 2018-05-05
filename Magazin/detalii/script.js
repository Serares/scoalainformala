
function overlayOn(){
    document.getElementById("overlay").style.display = "block";
}

function overlayOff(){
    document.getElementById("overlay").style.display = "none";
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var idPagina = getParameterByName("id");

function desenare(data){

    document.querySelector('.titluProdus').innerHTML = `<h1>${data.nume}</h1>`;
    document.querySelector('.imagineProdus').innerHTML = `<img href="${data.imagine}">`;
    document.querySelector('.pretProdus').innerHTML = `<p>${data.pret}</p>`;
    document.querySelector('.cantitateProdus').innerHTML = `<p>Mai sunt in stoc:${data.cantitate} buc.</p>`;
    document.querySelector('.btnCart').innerHTML = `<button onclick="addToCart()">Adauga in cos</button>`
}


var date;


    var obj = {
        "nume":null,
        "imagine":null,
        "detalii":null,
        "cantitate":null,
        "pret":null,
    }


    
function cerereAjax(){
    var req = new XMLHttpRequest;

    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            
            date = JSON.parse(this.responseText);
            
            console.log(date);
            desenare(date);
            document.querySelector('#overlay2').style.display = "none";
            
            
            
        }
    }
    document.querySelector('#overlay2').style.display = "block";
    req.open('GET',`https://proiect-magazin.firebaseio.com/0/produse/${idPagina}.json`);
    req.send();

}
    

function addToCart(){

    var objTrimis = Object.create(obj);
    objTrimis.nume = date.nume;
    objTrimis.imagine = date.imagine;
    objTrimis.detalii = date.detalii;
    objTrimis.cantitate = document.querySelector('input[type="number"]').value;
    objTrimis.pret = date.pret;



    var req = new XMLHttpRequest;
    console.log();
    req.open('POST',`https://proiect-magazin.firebaseio.com/0/cart/.json`);
    req.send(JSON.stringify(objTrimis));

    document.querySelector('#alertaCumparare').style.display ='block';

    setTimeout(function(){
        document.querySelector('#alertaCumparare').style.display ='none';
    },1000);

}

