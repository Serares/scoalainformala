
function desenare(data){

    var subtotal = [];
    
    var html = '';
    var tva = null;

    if(!data){

        let rand = `
        
        <tr>
                    <td>
                        Cosul este gol.
                    </td>
                    
            </tr>
        
        `;
        document.querySelector('.tblBod').innerHTML = rand;
        document.querySelector('.tva').innerHTML= "TVA";
        document.querySelector('.totalFinal').innerHTML = "<span>Totalul</span>";

    } else {
        
        for(let produse in data){
    
            subtotal.push((data[produse].pret) * (data[produse].cantitate));
    
            
            var rand = `
            
            <tr>
                        <td>
                            <img href="${data[produse].imagine}">
                            ${data[produse].nume}
                        </td>
                        <td>
                            <input type="number" min="1" value="${data[produse].cantitate}" id="${produse}">
                            <button onclick="adaugaCantitate('${produse}')">+</button><button onclick="scadeCantitate('${produse}')">-</button>
                        </td>
                        <td>
                        ${data[produse].pret}
                        </td>
                        <td>
                            ${(data[produse].pret) * (data[produse].cantitate)}
                        </td>
                        <td>
                        <button onclick="stergere('${produse}')">Sterge</button>
                        </td>
                </tr>
            
            `;
            html += rand;
        }
    
        var totalSubtotal = (subtotal.reduce(function(a,b){return a+b}));
    
        document.querySelector('.tva').innerHTML = `TVA-ul ${(19 /100)*totalSubtotal}`;
        document.querySelector('.totalFinal').innerHTML = `<span>Totalul</span><span>${(subtotal.reduce(function(a,b){return a+b})) + ((19 /100)*totalSubtotal)}</span>`;
        document.querySelector('.tblBod').innerHTML = html;
    }

    

}



function cerereAjax(){



    var req = new XMLHttpRequest;

    req.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var date = JSON.parse(this.responseText);
            desenare(date);
        }
    }

    req.open('get','https://proiect-magazin.firebaseio.com/0/cart.json');
    req.send();


}



function stergere(ind){

    var req = new XMLHttpRequest;

    req.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            var date = JSON.parse(this.responseText);
            cerereAjax();
        }
    }

    req.open('delete',`https://proiect-magazin.firebaseio.com/0/cart/${ind}.json`);
    req.send();

}


function adaugaCantitate(prod){

        //adaug produse in firebase;

    // document.querySelector(`#${prod}`).value++;
    var inputVal = document.querySelector(`#${prod}`).value;


    var date;


        var req = new XMLHttpRequest;

        req.onreadystatechange = function(){

            if(this.readyState == 4 && this.status == 200){
    
                date = JSON.parse(this.responseText);
                date.cantitate++;
                console.log(date);
                
                var req2= new XMLHttpRequest;

                req2.onreadystatechange = function(){

                    if(this.readyState == 4 && this.status == 200){
                        cerereAjax();
                    }

                }
                
            
            req2.open('PUT',`https://proiect-magazin.firebaseio.com/0/cart/${prod}.json`);
            req2.send(JSON.stringify(date));
            

            }
        }
    
        req.open('GET',`https://proiect-magazin.firebaseio.com/0/cart/${prod}.json`);
        req.send();

        
}



function scadeCantitate(prod){

    // document.querySelector(`#${prod}`).value--;
    var inputVal = document.querySelector(`#${prod}`).value;

    if(inputVal == 1){

        stergere(prod);

    } else {

        var date;

    var produs = function(cantitate,detalii,imagine,nume,pret){
        this.cantitate = cantitate;
        this.detalii = detalii;
        this.imagine = imagine;
        this.nume = nume;
        this.pret = pret;
    }

    var req = new XMLHttpRequest;

    req.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            date= JSON.parse(this.responseText);
            date.cantitate--;

            console.log(date);

            var req2 = new XMLHttpRequest;

            req2.onreadystatechange = function(){

                if(this.readyState == 4 && this.status == 200){
                    cerereAjax();
                }
            }
            req2.open('PUT',`https://proiect-magazin.firebaseio.com/0/cart/${prod}.json`);
            req2.send(JSON.stringify(date));

        }
    }

    req.open('GET',`https://proiect-magazin.firebaseio.com/0/cart/${prod}.json`);
    req.send();


    }
    
}

function stergeCart(){

    var req = new XMLHttpRequest;

    req.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            var date = JSON.parse(this.responseText);
            cerereAjax();
        }
    }

    req.open('delete',`https://proiect-magazin.firebaseio.com/0/cart/.json`);
    req.send();

}



