

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

    document.querySelector('.imgPreparat').innerHTML = `<img src="../meniu/mancare.jpg">`;
    document.querySelector('.numeProdus').innerHTML = `<h2>${data.nume}</h2>`;
    document.querySelector('.retetaProdus').innerHTML = `<p>${data.reteta}</p>`;
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

    req.open('GET',`https://restaurant-menu-v1.firebaseio.com/menu/${getParameterByName("id")}.json`);
    req.send();

}