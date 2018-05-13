
var searchNavMob = document.querySelector('.search-navMobile input');
var dropMenMobile = document.querySelector('#dropMenMobile');

searchNavMob.addEventListener('click',function(){
    dropMenMobile.style.display = 'block';
});
document.getElementById("overlay").addEventListener('click',function(){
    dropMenMobile.style.display = 'none';
})

function overlayOn(){
    document.getElementById("overlay").style.display = "block";
    document.querySelector('.dropdown-menu').style.display ="block" ;
}

function overlayOff(){
    document.getElementById("overlay").style.display = "none";
    document.querySelector('.dropdown-menu').style.display ="none";
}

// hover peste btnContainer;
var btnContainer = document.querySelector('.btnCart');
btnContainer.addEventListener('mouseover',function(){

    document.querySelector('.btnCart span').style.backgroundColor = '#0039e6';
    document.querySelector('.btnCart button').style.backgroundColor = '#df2020';
});
btnContainer.addEventListener('mouseout',function(){

    document.querySelector('.btnCart span').style.backgroundColor = '#244196';
    document.querySelector('.btnCart button').style.backgroundColor = '#e41d34';
})

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + '.' + '$2');
    }
    return x1 + x2;
}

var idPagina = getParameterByName("id");
var listaNumeProduse = [];

function desenare(data){

    // pentru cantitate 
    function cantitateReturn(data){
        if(data.cantitate >0){
            return `<p style="color:green">Mai sunt in stoc:${data.cantitate} buc.</p>`;
        } else {
            return `<p>Stoc epuizat</p>`;
        }
    }
    
    document.querySelector('.titluProdus').innerHTML = `<h1>${data.nume}</h1>`;
    document.querySelector('.imagineProdus').innerHTML = `<img src="${data.imagine}">`;
    document.querySelector('.pretProdus').innerHTML = `<p>${addCommas(data.pret)}<span style="font-size:14px">LEI</span></p>`;
    document.querySelector('.cantitateProdus').innerHTML = `${cantitateReturn(data)}`;
    document.querySelector('.btnCart').innerHTML = `<span><img src="../home/img/cart.png"></span><button>Adauga in cos</button>`
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
            
            
            desenare(date);
            numarProduseCos();
            document.querySelector('#overlay2').style.display = "none";
            
            
            
        }
    }
    document.querySelector('#overlay2').style.display = "block";
    req.open('GET',`https://proiect-magazin.firebaseio.com/0/produse/${idPagina}.json`);
    req.send();

}
    

function addToCart(){

    var req2 = new XMLHttpRequest;

    req2.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            
        var produseCart = JSON.parse(this.responseText);
        var found = false;
        var idProdusCart = '';
        
            // cauta prin numele din card si verifica daca se gaseste numele ca sa nu il mai adauge
        for(let produse in produseCart){
            
            if(produseCart[produse].nume === date.nume){
                found = true;
                console.log('produsul exista');
                idProdusCart+=produse;
                break;
            } else {

                found = false;
                   
            }
        }
            // block ce adauga produsul sau mareste cantitatea
            if(!found){

                let objTrimis = Object.create(obj);
                objTrimis.nume = date.nume;
                objTrimis.imagine = date.imagine;
                objTrimis.detalii = date.detalii;
                objTrimis.cantitate = document.querySelector('input[type="number"]').value;
                objTrimis.pret = date.pret;
            
            
            
                var req = new XMLHttpRequest;
                
                req.open('POST',`https://proiect-magazin.firebaseio.com/0/cart/.json`);
                req.send(JSON.stringify(objTrimis));
                // actualizeaza numarul din cart
                numarProduseCos();
                document.querySelector('#alertaCumparare').style.display ='flex';
            
                setTimeout(function(){
                    document.querySelector('#alertaCumparare').style.display ='none';
                },2500);

            } else {
                // un request GET ca sa iau datele produsului si un request PUT ca sa incrementez cantitatea produsului din cart;

                var reqGetProdusCart = new XMLHttpRequest;
                reqGetProdusCart.onreadystatechange = function(){

                    if(this.readyState == 4 && this.status == 200){
                        var produsDinCart = JSON.parse(this.responseText);
                        console.log(parseInt(produsDinCart.cantitate));
                        var req3 = new XMLHttpRequest;

                        let objTrimis = Object.create(obj);
                        objTrimis.nume = date.nume;
                        objTrimis.imagine = date.imagine;
                        objTrimis.detalii = date.detalii;
                        objTrimis.cantitate = parseInt(document.querySelector('input[type="number"]').value)+(parseInt(produsDinCart["cantitate"]));
                        objTrimis.pret = date.pret;
                        
                        req3.open('PUT',`https://proiect-magazin.firebaseio.com/0/cart/${idProdusCart}.json`);
                        req3.send(JSON.stringify(objTrimis));
                        // alerta de adaugare cantitate
                        // actualizeaza numarul din cart
                        numarProduseCos();
                        document.querySelector('#adaugareCantitate').style.display ='flex';
            
                        setTimeout(function(){
                            document.querySelector('#adaugareCantitate').style.display ='none';
                        },2500);       
                    }
                }

                reqGetProdusCart.open('GET',`https://proiect-magazin.firebaseio.com/0/cart/${idProdusCart}.json`);
                reqGetProdusCart.send();
                   
            } 
        }
    }
    
    req2.open('GET',`https://proiect-magazin.firebaseio.com/0/cart/.json`);
    req2.send();


}

function dropDown(){
    var listProd = document.querySelector('.listaProduseInp');
    var inpVal = document.querySelector('input[placeholder="cauta"]');
    
    var date;
    var html ="";
    var req = new XMLHttpRequest;

    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            date = JSON.parse(this.responseText);
            // console.log(date);
            
            for(let produs in date){
                

                if((date[produs].nume.toLowerCase()).indexOf(inpVal.value.toLowerCase()) > -1){
                    var rand = `
                
                    <a href="../detalii/index.html?id=${produs}"><li>${date[produs].nume}</li></a>
                    
                    `;
                    html += rand;
                }
               
            }
            
            listProd.innerHTML = html;
            
        }
    }
    
    req.open('GET','https://proiect-magazin.firebaseio.com/0/produse/.json');
    req.send();
    
    

}

function dropDownMobile(){

    
    var listProdMobile = document.querySelector('.listaProduseInpMobile');
    var inpValMob = document.querySelector('#srchinpMobile');
    
    var date;
    var html ="";
    var req = new XMLHttpRequest;

    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            date = JSON.parse(this.responseText);
            // console.log(date);
            
            for(let produs in date){
                
                
                if((date[produs].nume.toLowerCase()).indexOf(inpValMob.value.toLowerCase()) > -1){
                    console.log(produs);
                    var rand = `
                
                    <a href="../detalii/index.html?id=${produs}"><li>${date[produs].nume}</li></a>
                    
                    `;
                    html += rand;
                }
               
            }
            
            listProdMobile.innerHTML = html;
        }
    }
    
    req.open('GET','https://proiect-magazin.firebaseio.com/0/produse/.json');
    req.send();   
}

// afiseaza numarul de produse din cart

function numarProduseCos(){

    var numarProduseSpan = document.querySelector('.numarProduseCart');
    var numarProduseSpanMob = document.querySelector('.numarProduseCartMobile');
    var req = new XMLHttpRequest;
    
        req.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
    
                var date = JSON.parse(this.responseText);
                var numar=0;
                for(let produs in date){
                    
                    numar++;
                }
                console.log(numar);
                numarProduseSpan.innerHTML = numar;
                numarProduseSpanMob.innerHTML = numar;
                if(numar <1){
                    numarProduseSpan.style.display = "none";
                } else {
                    numarProduseSpan.style.display = "block";
                }
            }
        }
        
        req.open('GET','https://proiect-magazin.firebaseio.com/0/cart/.json');
        req.send();
    
    }