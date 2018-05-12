

function desenare(data){

    var html = ``;

    for(prod in data){

        if(data[prod] === null){
            continue;
        }
        
            var produse = `
        
            <tr>
            <td>
            <img src="${data[prod].imagine}">
            </td>
            <td>
            <a href="#" onclick="editareProd('${prod}')">${data[prod].nume}</a>
            </td>
            <td>
            ${data[prod].pret}
            </td>
            <td>
            ${data[prod].cantitate}
            </td>
            <td>
            <button onclick="stergeProdus('${prod}')">Remove</button>
            </td>
            </tr>
        
        `;
        html+= produse;
 
    }

    document.querySelector('.totTabelul').style.display="block";
    document.querySelector('.bodTabel').innerHTML = html;

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
    
    req.open('GET','https://proiect-magazin.firebaseio.com/0/produse/.json');
    req.send();

}


function stergeProdus(id){

    var req = new XMLHttpRequest;

    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            cerereAjax();
           
        }
    }
    
    req.open('DELETE',`https://proiect-magazin.firebaseio.com/0/produse/${id}/.json`);
    req.send();

    
}


function addProduct(){

    // creez un div cu inputuri ca sa le preiau valorile si sa le trimit in firebase;

    var tabelProduse = document.querySelector('.tabel-produse');
    document.querySelector('.totTabelul').style.display="none";
    document.querySelector('.actual').innerHTML = "Adauga Produs";


    var rand = `

    <div class="inputField">

    <input type="text" placeholder="Nume">
    <input type="text" placeholder="Imagine">
    <input type="text" placeholder="Detalii">
    <input type="number" placeholder="Cantitate">
    <input type="number" placeholder="pret">
    <button onclick="adaugare()">Adaugare</button>
    </div>
    `;

    // este += pentru ca nu trebuie sa inlocuiesc html-ul care e deja acolo trebuie doar sa le suprapun cumva. 
    tabelProduse.innerHTML += rand;

}


function adaugare(){

    // functia trimite datele catre fire base;

    var numeInp = document.querySelector('input[placeholder="Nume"]').value;
    var imagineInp = document.querySelector('input[placeholder="Imagine"]').value;
    var detaliiInp = document.querySelector('input[placeholder="Detalii"]').value;
    var cantitateInp = document.querySelector('input[placeholder="Cantitate"]').value;
    var pretInp = document.querySelector('input[placeholder="pret"]').value;

    var objTrimis ={
        "nume": numeInp,
        "imagine": imagineInp,
        "detalii":detaliiInp,
        "cantitate": cantitateInp,
        "pret": pretInp
    };

    console.log(objTrimis);
    var req = new XMLHttpRequest;

    req.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            cerereAjax();
        }
    }
    

    req.open('POST','https://proiect-magazin.firebaseio.com/0/produse/.json');
    req.send(JSON.stringify(objTrimis));
    // dau remove la divul de inputuri pe care il creez cu functia addProduct();

    document.querySelector('.tabel-produse').removeChild(document.querySelector('.inputField'));
    document.querySelector('.actual').innerHTML = "Produse";
}



function editareProd(prd){
//  trebuie un meniu cu inputuri pentru modificarea respectivului produs
    // cerere AJAX ca sa iau datele produsului si sa le pun in imputuri

    var req = new XMLHttpRequest;

    req.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            var date = JSON.parse(this.responseText);
            console.log(date);

            var tabelProduse = document.querySelector('.tabel-produse');
            document.querySelector('.totTabelul').style.display="none";
            document.querySelector('.actual').innerHTML = "Editare Produs";


            var rand = `

            <div class="inputFieldEdit">

            <input type="text" placeholder="Nume" value="${date.nume}">
            <input type="text" placeholder="Imagine" value="${date.imagine}">
            <input type="text" placeholder="Detalii" value="${date.detalii}">
            <input type="number" placeholder="Cantitate" value="${date.cantitate}">
            <input type="number" placeholder="pret" value="${date.pret}">
            <button onclick="editare('${prd}')">Schimba</button>
            </div>

            `;

     
            tabelProduse.innerHTML += rand;
           
        }
    }
    
    req.open('GET',`https://proiect-magazin.firebaseio.com/0/produse/${prd}.json`);
    req.send();

    
}


function editare(id){

    var numeInp = document.querySelector('input[placeholder="Nume"]').value;
    var imagineInp = document.querySelector('input[placeholder="Imagine"]').value;
    var detaliiInp = document.querySelector('input[placeholder="Detalii"]').value;
    var cantitateInp = document.querySelector('input[placeholder="Cantitate"]').value;
    var pretInp = document.querySelector('input[placeholder="pret"]').value;

    var objTrimis ={
        "nume": numeInp,
        "imagine": imagineInp,
        "detalii":detaliiInp,
        "cantitate": cantitateInp,
        "pret": pretInp
    };

    var req = new XMLHttpRequest;

    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            document.querySelector('.tabel-produse').removeChild(document.querySelector('.inputFieldEdit'));
            document.querySelector('.actual').innerHTML = "Produse";
            cerereAjax();
            
           
        }
    }
    
    req.open('PUT',`https://proiect-magazin.firebaseio.com/0/produse/${id}.json`);
    req.send(JSON.stringify(objTrimis));


}



