

function overlayOn(){
    document.getElementById("overlay").style.display = "block";
    document.querySelector('.dropdown-menu').style.display ="block" ;
}

function overlayOff(){
    document.getElementById("overlay").style.display = "none";
    document.querySelector('.dropdown-menu').style.display ="none";
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
            <span id="pret">${data[produs].pret}</span><span id="lei">LEI</span>
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
    setTimeout(carousel, 2000); // Change image every 2 seconds
}



function dropDown(elem,e){
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
                console.log(e);

                if((date[produs].nume.toLowerCase()).indexOf(inpVal.value.toLowerCase()) > -1){
                    var rand = `
                
                    <li>${date[produs].nume}</li>
                    
                    `;
                    html += rand;
                }
               
            }
            console.log(html);
            listProd.innerHTML = html;
        }
    }
    
    req.open('GET','https://proiect-magazin.firebaseio.com/0/produse/.json');
    req.send();
    
    

}
