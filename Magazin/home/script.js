

function overlayOn(){
    document.getElementById("overlay").style.display = "block";
}

function overlayOff(){
    document.getElementById("overlay").style.display = "none";
}



function desenare(data){

    var html = ``;
    for(var i=0;i< data[0].produse.length;i++){

        var arr = data[0].produse[i];
        
        console.log(arr.cantitate);
        

            var produse = `
        
        <div class="cartonas" >

        <div id="imagineProdus">
           <a href="../detalii/index.html?id=${i}"> <img src="${arr.imagine}" alt="imgProdus"></a>
        </div>

        <div id="pretProdus">
            <span id="pret">${arr.pret}</span><span id="lei">LEI</span>
        </div>

        <div id="detaliiProdus">
            <span>${arr.detalii}</span>
        </div>

        <div id="btnProdus">
            <a href="../detalii/index.html?id=${i}"><button>Vezi detalii</button></a>
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
            document.querySelector('#overlay2').style.display = "none";
        }
    }
    document.querySelector('#overlay2').style.display = "block";
    req.open('GET','https://proiect-magazin.firebaseio.com/.json');
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
