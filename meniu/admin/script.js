
function desenare(data){

    var tabel = document.querySelector('.tblProduse');
    var html = "";
    
    

    for(let i in data){

        var nfo = data[i]

        
        for(let i in nfo){

        

            var rand = `
            
            <tr>
            
            <td>

            <div class="img">
            <img src="../meniu/mancare.jpg">
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
            <a href="../delete/index.html?id=${i}"><button class="btnSterge">Sterge</button></a>
            <a href="../edit/edit.html?id=${i}"><button>Modifica</button></a>
            </div>
            </td>

            </tr>
            
            
            `;

            html+= rand;

         
                  
        }
    }

    tabel.innerHTML = html;
    // document.querySelector('#overlay').style.display = "none";

}


function cerereAjax(){

    var req = new XMLHttpRequest;

   
    req.onreadystatechange = function(){


        

        if(this.readyState == 4 && this.status == 200){

            
            var date = JSON.parse(this.responseText);

            desenare(date);
            console.log(date);
            document.querySelector('#overlay').style.display = "none";
        }
    }

    

    document.querySelector('#overlay').style.display = "block";   
    req.open('GET','https://datemeniu.firebaseio.com/.json');
    req.send();

}


function redirectAdd(){
    
    window.location = "scoalainformala/meniu/add/add.html";

}
