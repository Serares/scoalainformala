var input = document.querySelector('input[type="text"]');
var buton = document.querySelector('.btn');
var divProduse = document.querySelector('.produse');
var asc = document.querySelector('#asc');
var desc = document.querySelector('#desc');
var produseFromDiv = divProduse.getElementsByTagName('p');



// creez o instanta de obiect
var objProd = {
		
		prod: null,
		marcat: false
			
	}

var listaProd = [];

function mark(index){

	if(listaProd[index].marcat == true){
		return "marcat";
	} else {
		return "nemarcat";
	}

	
}

function numeBtn(inde){
	if(mark(inde) == "marcat"){
		return 'Debifeaza';
	} else {
		return 'Bifeaza';
	}
}

function clasaBtn(ind){
	if(mark(ind) == "marcat"){
		return 'btnDeselect';
	} else {
		return 'btnMark';
	}
}


// functie care deseneaza html
function desenare(){

	var html ="<p class='titlu'> Produs </p>";

	for(let i=0;i<listaProd.length;i++){
		
		var rand = `
		
		<div><span class="${mark(i)}">${listaProd[i].prod}</span> <span onclick="marcheaza(${i})" class="${clasaBtn(i)}">${numeBtn(i)}</span> </div>
		
		`
		html += rand;
	}

	divProduse.innerHTML = html;

}


// functie care pusheaza obiectele in array

 function createArr(elem,e){
	var val = input.value;

	var prodct = Object.create(objProd);

	prodct.prod = val;
	prodct.marcat = false;

	listaProd.push(prodct);

	desenare();

 }

// functia de marcare a produsului care apeleaza functia draw() dupa ce a setat proprietatea pe true;
 function marcheaza(ind){

	if(listaProd[ind].marcat == true){
		listaProd[ind].marcat = false;
	} else if(listaProd[ind].marcat == false){
		listaProd[ind].marcat = true;
	}
	
	console.log(listaProd[ind]);
	desenare();

 }


 function sortareAsc(){

	listaProd.sort(function(a,b){
		var aG = a.prod;
		var bG = b.prod;
		if(aG.toUpperCase()<bG.toUpperCase())
			return -1
		if(aG.toUpperCase()>bG.toUpperCase())
		return 1
		else 
		return 0;
	})
	desenare();
 }


 function sortareDesc(){

	listaProd.sort(function(a,b){
		var aG = a.prod;
		var bG = b.prod;
		if(aG.toUpperCase()<bG.toUpperCase())
			return 1
		if(aG.toUpperCase()>bG.toUpperCase())
		return -1
		else 
		return 0;
	})
	desenare();
 }



function insertText(elem,e){

	

	if(e.keyCode == 13){
		createArr();
	}

}
