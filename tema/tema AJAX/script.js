// var butoane
var btnVremea = document.getElementById('afVremea');
var btnProg = document.getElementById('afProgn');

// var input
var input = document.getElementById('oras');
var alerta = document.getElementById('alert');

// var date afisate
var descr = document.getElementById('descr');
var umid = document.getElementById('umid');
var pres = document.getElementById('pres');
var temp = document.getElementById('temp');
var min = document.getElementById('min');
var max = document.getElementById('max');

// div prognoza 

var prognoze = document.querySelector('.prognoze');


console.log(prognoze);
// div cu date

var datDiv = document.querySelector('.date');

// zile ;
var zi1 = new Date();

var zi2 = new Date();
zi2.setDate(zi2.getDate() + 1);

var zi3 = new Date();
zi3.setDate(zi3.getDate() +2);

var zi4 = new Date();
zi4.setDate(zi4.getDate() +3);

var zi5 = new Date();
zi5.setDate(zi5.getDate() +4);

var zi6 = new Date();
zi6.setDate(zi6.getDate() +5);



// Harta
var latitudine;
var longitudine;

function myMap(lat,lon) {
    var mapProp= {
        center:new google.maps.LatLng(lat,lon),
        zoom:11,
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }


// activeaza cand se incarca pagina;
function pageLoad(elem,e){

   

btnVremea.addEventListener('click',function(elem,e){

    var req = new XMLHttpRequest();

    req.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            alerta.style.display = "none";

            var info = JSON.parse(this.responseText);
            
            latitudine = info.coord.lat;
            longitudine = info.coord.lon;

            myMap(latitudine,longitudine);

            // console.log(latitudine);
            // console.log(info);

            desenVreme(info);

        }else if (this.status == 404){
            alerta.style.display = "block";
        }

      } 

      req.open("GET", "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q="+input.value, true);
      req.send();
    
    

})

btnProg.addEventListener('click',function(elem,e){

    var req = new XMLHttpRequest;

    req.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200 ){

            var info = JSON.parse(this.responseText);

            console.log(info.list[0].dt);
            // ca sa stearga ce a fost cautat inainte

            prognoze.innerHTML = "";
            desenProgn(info);
            


        }

    }

    req.open('GET',"https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q="+input.value,true);
    req.send();

})


function desenVreme(dt){

    var dateIntr = `
            
            <img src="http://openweathermap.org/img/w/${dt.weather[0].icon}.png" alt="imgDesc">
            <p id="descr">Descriere :${dt.weather[0].description}</p> 
              <p id="umid"> Umiditate :${dt.main.humidity}</p>
             <p id="pres"> Presiune :${dt.main.pressure}</p>
             <p id="temp"> Temperatura curenta :${dt.main.temp}</p>
          <p id="min"> Minima zilei :${dt.main.temp_min}</p>
             <p id="max">  Maxima zilei :${dt.main.temp_max}</p>

            `;
            
            datDiv.innerHTML = dateIntr;

}


function desenProgn(d){

    // arraiuri cu obiectele json ce sunt din ziua respectiva;
    var dturizi1 = [];
    var dturizi2 = [];
    var dturizi3 = [];
    var dturizi4 = [];
    var dturizi5 = [];
    var dturizi6 = [];

    for(var i in d.list){

        var obj = d.list[i];

       
        
        var date = new Date(obj.dt*1000);

        // aici fac push la obiecte in array;

        if(date.getDate() == zi1.getDate()) dturizi1.push(obj);
        if(date.getDate() == zi2.getDate()) dturizi2.push(obj);  
        if(date.getDate() == zi3.getDate()) dturizi3.push(obj);
        if(date.getDate() == zi4.getDate()) dturizi4.push(obj);
        if(date.getDate() == zi5.getDate()) dturizi5.push(obj);
        if(date.getDate() == zi6.getDate()) dturizi6.push(obj);

    }

    

    // datele afisate

    var div1 = `<div style="background-color: #80bfff; margin: auto; margin-left: 27px; margin-top: 10px; padding: 4px; color: white; border-radius: 4px;font-size: 15px;">${zi1.getDate()+`-`+`0`+(zi1.getMonth()+1)+`-`+zi1.getFullYear()}</div>`;

    var div2 = `<div style="background-color: #80bfff; margin: auto; margin-left: 27px; margin-top: 10px; padding: 4px; color: white; border-radius: 4px;font-size: 15px;">${zi2.getDate()+`-`+`0`+(zi2.getMonth()+1)+`-`+zi2.getFullYear()}</div>`;
    var div3 = `<div style="background-color: #80bfff; margin: auto; margin-left: 27px; margin-top: 10px; padding: 4px; color: white; border-radius: 4px;font-size: 15px;">${zi3.getDate()+`-`+`0`+(zi3.getMonth()+1)+`-`+zi3.getFullYear()}</div>`;
    var div4 = `<div style="background-color: #80bfff; margin: auto; margin-left: 27px; margin-top: 10px; padding: 4px; color: white; border-radius: 4px;font-size: 15px;">${zi4.getDate()+`-`+`0`+(zi4.getMonth()+1)+`-`+zi4.getFullYear()}</div>`;
    var div5 = `<div style="background-color: #80bfff; margin: auto; margin-left: 27px; margin-top: 10px; padding: 4px; color: white; border-radius: 4px;font-size: 15px;">${zi5.getDate()+`-`+`0`+(zi5.getMonth()+1)+`-`+zi5.getFullYear()}</div>`;
    var div6 = `<div style="background-color: #80bfff; margin: auto; margin-left: 27px; margin-top: 10px; padding: 4px; color: white; border-radius: 4px;font-size: 15px;">${zi6.getDate()+`-`+`0`+(zi6.getMonth()+1)+`-`+zi6.getFullYear()}</div>`;

    // divurile in care vor fi toate cartonasele cu intervale orare

    var prog1 = document.createElement('div');
    var prog2 = document.createElement('div');
    var prog3 = document.createElement('div');
    var prog4 = document.createElement('div');
    var prog5 = document.createElement('div');
    var prog6 = document.createElement('div');

    

    // creez cartonase pentru fiecare interval 

    for(let i=0;i<dturizi1.length;i++){

         div1 += `
        
        <div class="intervale" style="text-align: center; margin-top:18px;  width:100%;">
        <img src="http://openweathermap.org/img/w/${dturizi1[i].weather[0].icon}.png" alt="imgDesc">
        
        <p> Ora: ${dturizi1[i].dt_txt.substring(11)}
        <p>temperatura: ${dturizi1[i].main.temp}</p>
        <p>Descriere:${dturizi1[i].weather[0].description} </p>
        </div>
        
        `;
        
    }

    for(let i=0;i<dturizi2.length;i++){

        div2 += `

        <div class="intervale" style="text-align: center; margin-top:18px;  width:100%;">
        <img src="http://openweathermap.org/img/w/${dturizi2[i].weather[0].icon}.png" alt="imgDesc">
        <p> Ora: ${dturizi2[i].dt_txt.substring(11)}
        <p>temperatura: ${dturizi2[i].main.temp}</p>
        <p>Descriere:${dturizi2[i].weather[0].description} </p>
        </div>
        
       
       `;
       
   }

   for(let i=0;i<dturizi3.length;i++){

    div3 += `

    <div class="intervale" style="text-align: center; margin-top:18px;  width:100%;">
    <img src="http://openweathermap.org/img/w/${dturizi3[i].weather[0].icon}.png" alt="imgDesc">
    <p> Ora: ${dturizi3[i].dt_txt.substring(11)}
    <p>temperatura: ${dturizi3[i].main.temp}</p>
    <p>Descriere:${dturizi3[i].weather[0].description} </p>
    </div>
    
   
   `;
   
}

for(let i=0;i<dturizi4.length;i++){

    div4 += `

    <div class="intervale" style="text-align: center; margin-top:18px;  width:100%;">
    <img src="http://openweathermap.org/img/w/${dturizi4[i].weather[0].icon}.png" alt="imgDesc">
    <p> Ora: ${dturizi4[i].dt_txt.substring(11)}
    <p>temperatura: ${dturizi4[i].main.temp}</p>
    <p>Descriere:${dturizi4[i].weather[0].description} </p>
    </div>
    
   
   `;
   
}

for(let i=0;i<dturizi5.length;i++){

    div5 += `

    <div class="intervale" style="text-align: center; margin-top:18px;  width:100%;">
    <img src="http://openweathermap.org/img/w/${dturizi5[i].weather[0].icon}.png" alt="imgDesc">
    <p> Ora: ${dturizi5[i].dt_txt.substring(11)}
    <p>temperatura: ${dturizi5[i].main.temp}</p>
    <p>Descriere:${dturizi5[i].weather[0].description} </p>
    </div>
    
   
   `;
   
}

for(let i=0;i<dturizi6.length;i++){

    div6 += `

    <div class="intervale" style="text-align: center; margin-top:18px; width:100%;">
    <img src="http://openweathermap.org/img/w/${dturizi6[i].weather[0].icon}.png" alt="imgDesc">
    <p> Ora: ${dturizi6[i].dt_txt.substring(11)}
    <p>temperatura: ${dturizi6[i].main.temp}</p>
    <p>Descriere:${dturizi6[i].weather[0].description} </p>
    </div>
    
   
   `;
   
}

    // stil pentru divurile mari

    prog1.innerHTML = div1;
    
    prog1.style.width = "11%";
    prog1.style.marginLeft = "100px";
    document.querySelector(".prognoze").appendChild(prog1);

    prog2.innerHTML = div2;
    
    prog2.style.width = "11%";
    prog2.style.marginLeft = "20px";
    document.querySelector(".prognoze").appendChild(prog2);

    prog3.innerHTML = div3;
    
    prog3.style.width = "11%";
    prog3.style.marginLeft = "20px";
    document.querySelector(".prognoze").appendChild(prog3);

    prog4.innerHTML = div4;
    
    prog4.style.width = "11%";
    prog4.style.marginLeft = "20px";
    document.querySelector(".prognoze").appendChild(prog4);

    prog5.innerHTML = div5;
    
    prog5.style.width = "11%";
    prog5.style.marginLeft = "20px";
    document.querySelector(".prognoze").appendChild(prog5);

    prog6.innerHTML = div6;
    
    prog6.style.width = "11%";
    prog6.style.marginLeft = "20px";
    document.querySelector(".prognoze").appendChild(prog6);

    console.log("div1",div1);

    // prog1.innerHTML += div1;
    // prognoze.innerHTML += div2;

}



// paranteza de la pageLoad
}