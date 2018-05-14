

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

    var subtotal = [];
    
    var html = '';
    var tva = null;

    if(!data){

        let rand = `
        
        <tr>
                    <td colspan="5">
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
                            <img src="${data[produse].imagine}">
                            ${data[produse].nume}
                        </td>
                        <td id="tdCantitate">
                            <div class="inpQ">
                            <input type="number" min="1" value="${data[produse].cantitate}" id="${produse}" readonly>
                            </div>
                            <div class="btnsQ">
                            <div onclick="adaugaCantitate('${produse}')">+</div><div onclick="scadeCantitate('${produse}')">-</div>
                            </div>
                        </td>
                        <td>
                        ${addCommas(data[produse].pret)}
                        </td>
                        <td>
                            ${addCommas((data[produse].pret) * (data[produse].cantitate))}
                        </td>
                        <td id="btnStergere">
                        <button onclick="stergere('${produse}')">Sterge</button>
                        </td>
                </tr>
            
            `;
            html += rand;
        }
    
        var totalSubtotal = (subtotal.reduce(function(a,b){return a+b}));
    
        document.querySelector('.tva').innerHTML = `<span>TVA-ul:</span><span id="tvaNr">${addCommas((19 /100)*totalSubtotal)}<span>`;
        document.querySelector('.totalFinal').innerHTML = `<span>Totalul:</span><span id="totalFinalNr">${addCommas((subtotal.reduce(function(a,b){return a+b})) + ((19 /100)*totalSubtotal))}</span>`;
        document.querySelector('.tblBod').innerHTML = html;
    }

    

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

    document.querySelector(`#${prod}`).value++;
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

    document.querySelector(`#${prod}`).value--;
    var inputVal = document.querySelector(`#${prod}`).value;

    if(inputVal < 1){

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

function cumparaProduse(){
    var date;
    var prodOb ={
        cantitate: null,
        detalii: null,
        imagine:null,
        nume: null,
       pret:null
    };

    var req1 = new XMLHttpRequest;
    
    req1.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

           date = JSON.parse(this.responseText);
            
            for(let produs of date){
                
            }

        }
    }

    req1.open('get',`https://proiect-magazin.firebaseio.com/0/cart/.json`);
    req1.send();
}

