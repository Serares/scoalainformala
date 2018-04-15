function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



function desenare(data){
    var tabel = document.querySelector('.tblProduse');

    var html = `
    
    <tr>

    <td>
        <h2>${data.nume}</h2>
    
    </td>

    </tr>
    
    `;

    tabel.innerHTML = html;

}


function cerereAjax(){

    

    var req = new XMLHttpRequest;

   
    req.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            var date = JSON.parse(this.responseText);

            desenare(date);

        }
    }

    
    req.open('GET',`https://datemeniu.firebaseio.com/menu/${getParameterByName("id")}.json`);
    req.send();


}


function stergere(){

    var req = new XMLHttpRequest;

   
    req.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            window.location = "/admin/index.html";

        }
    }

    
    req.open('DELETE',`https://datemeniu.firebaseio.com/menu/${getParameterByName("id")}.json`);
    req.send();

}

