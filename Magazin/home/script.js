

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

function desenare(data){

    var html = ``;


    for(let produs in data){

        

            var rand = `
        
        <div class="cartonas" >

        <div id="imagineProdus">
           <a href="../detalii/index.html?id=${produs}"> <img src="${data[produs].imagine}" alt="imgProdus"></a>
        </div>

        <div id="pretProdus">
            <span id="pret">${addCommas(data[produs].pret)}</span><span id="lei">LEI</span>
        </div>

        <div id="detaliiProdus">
        <a href="../detalii/index.html?id=${produs}"><span>${data[produs].detalii}</span></a>
        </div>

        <div id="btnProdus">
            <a href="../detalii/index.html?id=${produs}"><button>Vezi detalii</button></a>
        </div>

    </div>
        
        `;
        html+= rand;
 
    }

    document.querySelector('.iteme').innerHTML = html;

}


function cerereAjax(){

    var req = new XMLHttpRequest;

    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            var date = JSON.parse(this.responseText);
            
            desenare(date);
            document.querySelector('#overlay2').style.display = "none";
            numarProduseCos();
        }
    }
    document.querySelector('#overlay2').style.display = "block";
    req.open('GET','https://proiect-magazin.firebaseio.com/0/produse/.json');
    req.send();

}


// carousel
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2500); // Change image every 2 seconds
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
            }
        }
    }
    
    req.open('GET','https://proiect-magazin.firebaseio.com/0/cart/.json');
    req.send();

}


