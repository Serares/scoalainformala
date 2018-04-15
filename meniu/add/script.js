

var produs = {
    "nume":null,
    "reteta":null,
    "ingrediente":null,
    "url":null
}


function adaugaProdus(){

    var req = new XMLHttpRequest;

   var numInp = document.querySelector('input[placeholder="nume"]').value;
   var retetaInp = document.querySelector('input[placeholder="reteta"]').value;
   var ingredienteInp = document.querySelector('input[placeholder="ingrediente"]').value;
   var urlInp = document.querySelector('input[placeholder="url"]').value;
        
if(numInp == "" || retetaInp == "" || ingredienteInp == "" || urlInp == ""){
    document.querySelector('#alerta').style.display = "block";
    document.querySelector('#alerta2').style.display = "none";
} else {
            

    document.querySelector('#alerta').style.display = "none";
    document.querySelector('#alerta2').style.display = "block";  
        
    var prod = Object.create(produs);        
    prod.nume = numInp;
    prod.reteta = retetaInp;
    prod.ingrediente = ingredienteInp;
    prod.url = urlInp;   
    

    
    req.open('POST','https://datemeniu.firebaseio.com/menu.json');
    req.send(JSON.stringify(prod));

    document.querySelector('input[placeholder="url"]').value = "";
    document.querySelector('input[placeholder="ingrediente"]').value = "";
    document.querySelector('input[placeholder="reteta"]').value = "";
    document.querySelector('input[placeholder="nume"]').value = "";

    
    }
}


function redirectAdmin(){
    window.location = "/admin/index.html";
}
