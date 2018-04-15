

var tbl = document.querySelector('.tbl');
var alerta = document.querySelector('#alerta');
var tduri = document.getElementsByTagName('td');
var overlay = document.querySelector('.overlay');

var randX = {
	
	"alerta":false,
	"bifat":true,
	"imagineX": 'url(imgX.jpg)',
	"imagine0":	'url(img0.png)'
}




for(let i=0;i<tduri.length;i++){
	
	tduri[i].addEventListener('click',function(e){
		
		this.setAttribute('bifat','true');
		
		if(randX.bifat == true){
			
			this.className = "esteX";
			this.style.backgroundImage = randX.imagineX;
			this.style.backgroundSize = "cover";
			this.style.pointerEvents = "none";
			randX.bifat = false;
			
		}else if(randX.bifat == false){
			this.className = "este0";
			this.style.backgroundImage = randX.imagine0;
			this.style.backgroundSize = "cover";
			randX.bifat = true;
			this.style.pointerEvents = "none";
		}
		
		
		
		if(tduri[0].className == "esteX" && tduri[1].className == "esteX" && tduri[2].className == "esteX"){
			alerta.textContent = "A castigat X";
			alerta.style.display = "block";
			randX.alerta = true;
		} else if(tduri[0].className == "este0" && tduri[1].className == "este0" && tduri[2].className == "este0"){
			alerta.textContent = "A castigat 0";
			alerta.style.display = "block";
			randX.alerta = true;
		}
		
		if(tduri[3].className == "esteX" && tduri[4].className == "esteX" && tduri[5].className == "esteX"){
		alerta.textContent = "A castigat X";
			alerta.style.display = "block";
			randX.alerta = true;
		} else if(tduri[3].className == "este0" && tduri[4].className == "este0" && tduri[5].className == "este0"){
			alerta.textContent = "A castigat 0";
			alerta.style.display = "block";
			randX.alerta = true;
		}
		
		if(tduri[6].className == "esteX" && tduri[7].className == "esteX" && tduri[8].className == "esteX"){
		alerta.textContent = "A castigat X";
			alerta.style.display = "block";
			randX.alerta = true;
		} else if(tduri[6].className == "este0" && tduri[7].className == "este0" && tduri[8].className == "este0"){
			alerta.textContent = "A castigat 0";
			alerta.style.display = "block";
			randX.alerta = true;
		}
		
		if(tduri[0].className == "esteX" && tduri[3].className == "esteX" && tduri[6].className == "esteX"){
		alerta.textContent = "A castigat X";
			alerta.style.display = "block";
			randX.alerta = true;
		} else if(tduri[0].className == "este0" && tduri[3].className == "este0" && tduri[6].className == "este0"){
			alerta.textContent = "A castigat 0";
			alerta.style.display = "block";
			randX.alerta = true;
		}
		
		if(tduri[1].className == "esteX" && tduri[4].className == "esteX" && tduri[7].className == "esteX"){
		alerta.textContent = "A castigat X";
			alerta.style.display = "block";
			randX.alerta = true;
		} else if(tduri[1].className == "este0" && tduri[4].className == "este0" && tduri[7].className == "este0"){
			alerta.textContent = "A castigat 0";
			alerta.style.display = "block";
			randX.alerta = true;
		}
		
		if(tduri[2].className == "esteX" && tduri[5].className == "esteX" && tduri[8].className == "esteX"){
		alerta.textContent = "A castigat X";
			alerta.style.display = "block";
			randX.alerta = true;
		} else if(tduri[2].className == "este0" && tduri[5].className == "este0" && tduri[8].className == "este0"){
			alerta.textContent = "A castigat 0";
			alerta.style.display = "block";
			randX.alerta = true;
		}
		
		if(tduri[0].className == "esteX" && tduri[4].className == "esteX" && tduri[8].className == "esteX"){
		alerta.textContent = "A castigat X";
			alerta.style.display = "block";
			randX.alerta = true;
		} else if(tduri[0].className == "este0" && tduri[4].className == "este0" && tduri[8].className == "este0"){
			alerta.textContent = "A castigat 0";
			alerta.style.display = "block";
			randX.alerta = true;
		}
		
		if(tduri[2].className == "esteX" && tduri[4].className == "esteX" && tduri[6].className == "esteX"){
			alerta.textContent = "A castigat X";
			alerta.style.display = "block";
			randX.alerta = true;
		} else if(tduri[2].className == "este0" && tduri[4].className == "este0" && tduri[6].className == "este0"){
			alerta.textContent = "A castigat 0";
			alerta.style.display = "block";
			randX.alerta = true;
		}
		
		if(randX.alerta == true){
			overlay.style.display = "block";
		}
		if(randX.bifat == true){
			document.querySelector('.alertX').style.visibility = "";
			document.querySelector('.alert0').style.display = "none";
		}
		else if(randX.bifat == false){
			document.querySelector('.alert0').style.display = "inline-block";
			document.querySelector('.alertX').style.visibility = "hidden";
		}
		
		
		
	})
	
	
	
}

function reset(){
	
	randX.bifat = true;
	randX.alerta = false;
	overlay.style.display = "none";
	document.querySelector('.alertX').style.visibility = "";
	document.querySelector('.alert0').style.display = "none";
	
	for(let i =0;i<tduri.length;i++){
		tduri[i].removeAttribute('bifat');
		tduri[i].style.backgroundImage = "";
		tduri[i].style.pointerEvents = "auto";
		tduri[i].className = "";
	}
}

overlay.addEventListener('click',function(){
	reset();
});




