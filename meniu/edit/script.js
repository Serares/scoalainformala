function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function afisare(){

    var req = new XMLHttpRequest;

   
    req.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            
            var date = JSON.parse(this.responseText);

            document.querySelector('input[placeholder="nume"]').value =date.nume;;
            document.querySelector('input[placeholder="ingrediente"]').value = date.ingrediente;
            document.querySelector('input[placeholder="reteta"]').value = date.reteta;
            document.querySelector('input[placeholder="imagine"]').value = date.imagine;

            var numeAfis = document.querySelector('.nume');
            var ingAfis = document.querySelector('.ingrediente');
            var retetaAfis = document.querySelector('.reteta');
            var imgAfis = document.querySelector('.imagine');
            
            numeAfis.textContent = date.nume;
            ingAfis.textContent = date.ingrediente;
            retetaAfis.innerHTML = date.reteta;
            imgAfis.textContent = date.imagine;


            console.log(date);
            document.querySelector('#loading').style.display = "none";
        }
    }

    
    req.open('GET',`https://datemeniu.firebaseio.com/menu/${getParameterByName("id")}.json`);
    req.send();


}


function modificare(){

    var inpNum = document.querySelector('input[placeholder="nume"]').value;
    var inpIngr = document.querySelector('input[placeholder="ingrediente"]').value;
    var inpRet = document.querySelector('input[placeholder="reteta"]').value;
    var inpImg = document.querySelector('input[placeholder="imagine"]').value;

    var objProd = {

        "nume":null,
        "ingrediente":null,
        "reteta":null,
        "imagine":null

    }

    if(inpNum.length == 0 || inpIngr.length == 0 || inpRet.length == 0 || inpImg.length == 0){

        document.querySelector('#alerta').style.display = "block";

    } else {
        document.querySelector('#alerta').style.display = "none";

        var req = new XMLHttpRequest;

    req.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            afisare();
            
        }
    }
   
    var p = Object.create(objProd);
    p.nume = inpNum;
    p.ingrediente = inpIngr;
    p.reteta = inpRet;
    p.imagine = inpImg;

    req.onload = function(){
        document.querySelector('#loading').style.display = "block";
    }
    
    req.open('PUT',`https://datemeniu.firebaseio.com/menu/${getParameterByName("id")}.json`);
    req.send(JSON.stringify(p));

    inpNum = document.querySelector('input[placeholder="nume"]').value = "";
    inpIngr = document.querySelector('input[placeholder="ingrediente"]').value = "";
    inpRet = document.querySelector('input[placeholder="reteta"]').value = "";
    inpImg = document.querySelector('input[placeholder="imagine"]').value = "";
    }
    
    
}

