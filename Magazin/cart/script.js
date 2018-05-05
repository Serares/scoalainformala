
function desenare(data){

    var subtotal = [];
    
    var html = '';
    var tva = null;

    for(let produse in data){

        subtotal.push((data[produse].pret) * (data[produse].cantitate));

        console.log(data[produse].pret);
        var rand = `
        
        <tr>
                    <td>
                        <img href="${data[produse].imagine}">
                        ${data[produse].nume}
                    </td>
                    <td>
                        <input type="number" min="1" value="${data[produse].cantitate}">
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


    var req = new XMLHttpRequest;

    req.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            var date = JSON.parse(this.responseText);

            cerereAjax();

        }
    }

    req.open('put',`https://proiect-magazin.firebaseio.com/0/cart/${ind}.json`);
    req.send();




}

