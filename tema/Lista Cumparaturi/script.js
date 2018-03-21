

var input = document.querySelector('input[type="text"]');
var buton = document.querySelector('.btn');
var divProduse = document.querySelector('.produse');
var asc = document.querySelector('#asc');
var desc = document.querySelector('#desc');

var listaProd = [];



function addToList(){
	
	var valoareInp = input.value;
	
	listaProd.push(valoareInp);
	
}



function addProd(){
	
console.log(listaProd);
	var prod = "";
	
	
	for(let i=0;i<listaProd.length;i++){
		
		
		var str = `

		
			<p>${listaProd[i]} <span class="sterge" onclick="stergeElem(this,event)">Sterge</span></p>

	`;
		
		prod += str;
		
	}
	//  pot sa selectez toate butoanele cu clasa respectiva si sa iterez prin ele apoi sa iau evenimentul de pe butonul respectiv si sa ii pun display none parintelui 
	
	
	divProduse.innerHTML = prod;
	
}


	// stergere elemente

	function stergeElem(elem,e){

		// pot sa iterez prin toate elementele span dupa clasa si la respectivul span sa iau innerHTML
		console.log(elem.parentNode.innerHTML);
		elem.parentNode.style.textDecoration = "line-through";
		listaProd

	}


	// sortare ascendenta ;
	function sortareAsc(){
	
	
	listaProd.sort(function(a,b){
		// indiferent de litere mici sau mari
		var nA = a.toUpperCase();
		var nB = b.toUpperCase();

		if(nA<nA)
			return -1;
		if(nA>nB)
			return 1;
		
		return 0;
		
	})
	
	addProd();	
	
}
    
    desc.addEventListener('click', ()=>{

        
		
		sortareAsc();

        listaProd.reverse();
            
        addProd();

    })
    
    
    

 