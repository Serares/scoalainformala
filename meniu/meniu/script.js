

function desenare(data){

    var tabel = document.querySelector('.tblProduse');
    var html = "";
    var inp = document.querySelector('input[placeholder="ingrediente"]').value;
    

    for(let i in data){

        var nfo = data[i]

        
        for(let i in nfo){

        if(nfo[i].ingrediente.indexOf(inp) > -1){

            var rand = `
            
            <tr>
            
            <td>

            <div class="img">
            <img src="mancare.jpg">
            </div>
            
            
            </td>
            
            <td>

            <div class="descriere">

            <h2>${nfo[i].nume}</h2>
            <p>${nfo[i].ingrediente}</p>

            </div>
         
            </td>

            <td>
            <div class="detalii">
            <a href="../detalii/detalii.html?id=${i}"><button>Detalii</button></a>
            </div>
            </td>

            </tr>
            
            
            `;

            html+= rand;

        }  
                  
        }
    }

    tabel.innerHTML = html;
    document.querySelector('input[placeholder="ingrediente"]').value = "";
}



function cerereAjax(){

    var req = new XMLHttpRequest;

   
    req.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            
            var date = JSON.parse(this.responseText);

            desenare(date);
            
        }
    }

    
    req.open('GET','https://restaurant-menu-v1.firebaseio.com/.json');
    req.send();
    

}





function tastaEntr(elem,e){

    
    if(e.key == "Enter"){
        cerereAjax();
    }
}


function contactRedir(){

    window.location = '../contact/contact.html';

}
