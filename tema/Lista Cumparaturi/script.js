

var input = document.querySelector('input[type="text"]');
var buton = document.querySelector('.btn');
var divProduse = document.querySelector('.produse');
var asc = document.querySelector('#asc');
var desc = document.querySelector('#desc');

var listaProd = [];

// function checked(elem,e){
//     console.log(elem.children);

//     var chbx = elem.children;
//     if(chbx.checked == "true"){
//         console.log("este checked")
//     } else {
//         console.log('nu este checked');
//     }
//     // elem.style.textDecoration = "line-through";

// }

function addToList(){
	
	var valoareInp = input.value;
	
	listaProd.push(valoareInp);
	
}



function addProd(){
	
console.log(listaProd);
	var prod = "";
	
	
	for(let i=0;i<listaProd.length;i++){
		
		
		var str = `

		
			<p>${listaProd[i]}</p>

	`;
		
		prod += str;
		
	}
	
	
	divProduse.innerHTML = prod;
	
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
    
    
    

 