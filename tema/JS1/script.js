// O functie care primeste un sir de caractere si returneaza lungimea sirului

    function lungime(a){

        return a.length;

    }

    console.log(lungime("1234bla"));


// O functie care primeste un array cu numere si returneaza maximul dintre acele numere

    function max(a){

        var max = a[0];
        for(let i=1;i<a.length;i++){

            if(max<a[i]){
                max = a[i];
            }

        }
        return max;
    }

    console.log("Maximul este ",max([5,3,8,9,10,11]));

// O functie care primeste un array cu numere si returneaza minimul dintre acele numere

function min(a){

    var min = a[0];
    for(let i=1;i<a.length;i++){

        if(min>a[i]){
            min = a[i];
        }

    }
    return min;
}

console.log("Minimul este ",min([5,3,8,9,10,11]));

// O functie care primeste un sir de caractere si returneaza un alt sir de caractere care contine doar cifrele din sirul respectiv de caractere

    var str = "b12351oo12SAD91bgwdf@#!$AS91021-1-2-3";

// Cum fac pentru numerele cu minus?;

    function numbers(a){

        var numbers2 = "";

        for(let i = 0; i<a.length;i++){

            if(a[i]== "1" || a[i] == "2" || a[i] == "3" || a[i] == "4" ||a[i] == "5" ||a[i] == "6" ||a[i] == "7" ||a[i] == "8" ||a[i] == "9"){

                
                numbers2 += a[i];
            }

        }
        // thenum = a.match(/\d+/)[0];
        // return thenum;
        // var numb = a.match(/\d/g);
        // numb = numb.join("");
        // return numb;
        return parseInt(numbers2);
    }
    console.log(numbers(str));

// O functie care primeste un sir de caractere si returneaza un alt sir de caractere care contine doar literele a-f, in aceeasi ordine ca in sirul initial

    var fraza = "543bo123oo";

    function sir(a){

        var litere = "";

        for(let i = 0; i<a.length;i++){

            if(a[i]!= "1" && a[i] != "2" && a[i] != "3" && a[i] != "4" && a[i] != "5" && a[i] != "6"  && a[i] != "7" && a[i] != "8" && a[i] != "9"){

                
                litere += a[i];
            }

        }

        return litere;

    }
    console.log(sir(fraza));

// O functie care primeste un sir de caractere si returneaza primele 5 litere din el (daca exista)

// Probabil este o modalitate mai desteapta;

function cinci(a){

    var litere = "";
    var cincilitere= "";

    for(let i = 0; i<a.length;i++){

        if(a[i]!= "1" && a[i] != "2" && a[i] != "3" && a[i] != "4" && a[i] != "5" && a[i] != "6"  && a[i] != "7" && a[i] != "8" && a[i] != "9"){

            
            litere += a[i];
            
        }     
    }

    for(let i =0;i<5;i++){

        
        if(litere[i] === undefined){
            return cincilitere;
        }
        cincilitere += litere[i];
    }
    return cincilitere;

    // if(litere.length>=5){

    //     return litere[0]+litere[1]+litere[2]+litere[3]+litere[4];

    // } else if( litere.length == 4 ){
    //     return litere[0]+litere[1]+litere[2]+litere[3];
    // } else if( litere.length == 3){
    //     return litere[0]+litere[1]+litere[2];
    // } else if( litere.length == 2){
    //     return litere[0]+litere[1];
    // } else if( litere.length == 1){
    //     return litere[0];
    // } else {
    //     return "Nu sunt destule caractere";
    // }
    

}

    console.log(cinci(fraza));

// O functie care primeste un sir de caractere si returneaza ultimele 10 litere (daca exista);
//  cum fac sa inversez rezultatul;

var zecelitere= "810defghia1bb";

    function zece(a){
        var litere = "";
        var celezece = "";
        var inversate = "";

        for(let i =a.length-1; i>=0;i--){

            if(a[i]!= "0" && a[i]!= "1" && a[i] != "2" && a[i] != "3" && a[i] != "4" && a[i] != "5" && a[i] != "6"  && a[i] != "7" && a[i] != "8" && a[i] != "9"){
    
                
                litere += a[i];
                
            }     
        }

        for(let i=litere.length-1;i>=0;i--){

            if(litere[i] == undefined){
                return celezece;
            }
            celezece += litere[i];
        }
        return celezece;
    }

    console.log("Ultimele zece litere",zece(zecelitere));

// O functie care primeste un sir de caractere si un caracter. Returneaza pozitia pe care se afla respectivul caracter pentru prima oara in sir

    function pozCaracter(a,b,c){
        var caracter = "";
        var num;

        for(let i=0;i<a.length;i++){

            if(a[i] === b){
                caracter += "primul caracter "+ b +" este la pozitia "+ i;
                return caracter;
            }

        }
        if(caracter == "" ){
            return "Nu exista acest caracter";
        }
        // return caracter;
    }

    console.log(pozCaracter(zecelitere,"1"));
    
    

// O functie care primeste un sir de caractere si un caracter. Returneaza pozitia pe care se afla respectivul caracter pentru ultima oara in sir

    function lastCar(a,b){

        var caracter= "";
        for(let i=a.length-1;i>=0;i--){

            if(a[i] === b){
               caracter += "ultimul caracter "+a[i] +" este la pozitia "+i;
               return caracter;
            }

        }
        if(caracter == "" ){
            return "Nu exista acest caracter";
        }

    }
    console.log(lastCar(zecelitere,"1"));

// O functie care primeste o lista de siruri de caractere si returneaza sirurile concatenate

    var siruri = ["abc","def","ghi"];

    function concat(a){
        var sir ="";

        for(let i =0;i<a.length;i++){
            sir+= a[i];
        }
        if(sir == "" ){
            return "Lista este goala";
        }
        return sir;
    }

    console.log(concat(siruri));


// O functie care primeste o lista de siruri de caractere si inca un sir de caractere si returneaza sirurile concatenate despartite prin respectivul sir ( de ex ["asd", "qwe", "zxc"] si despartitorul este ": ", rezultatul este  "asd: qwe: zxc")

    function concatDel(a,b){

        var sir="";

        for(let i =0;i<a.length;i++){

            if(i == a.length-1){
                sir+= a[i];
                return sir;
            }
            sir += a[i] + b;

        }

        return sir;

    }
    console.log(concatDel(siruri,"/"));

// Calculeaza factorialul unui numar

    

    function factorial(a){
        var numere=[];

        for(let i =1;i<=a;i++){

            numere+= i;

        }
        var fact= 1;

        for(let i=0;i<numere.length;i++){
            fact *= numere[i];
        }
        return "Factorialul pentru "+a+" este "+ fact;
    }

    console.log(factorial(5));

// Calculeaza cel mai mare divizor comun al 2 numere

    function cmmdc(a,b){

        var divA = [];
        var divB = [];
        var comuni = [];
        var mare = [];

        for(let i =1;i<a;i++){
            if(a%i == 0){
                divA.push(i);
            }
        }

        for(let i =1;i<b;i++){
            if(b%i == 0){
                divB.push(i);
            }
        }

        for(let i =0; i<divA.length; i++){
            for(let j = 0; j<divB.length; j++){
                if(divA[i] === divB[j]){
                    comuni.push(divA[i]);
                }
            }
        }

        mare = max(comuni);
        return mare;

    }

    console.log("Cel mai mare divizor comun este ", cmmdc(100,50));

// Calculeaza cel mai mic multiplu comun al 2 numere




// Returneaza un array care sa contina toti divizorii unui numar. Ex pentru 64: trebuie sa returneze [2,4,8,16,32]

    function divizorii(a){
        var list=[];

        for(let i =1;i<a;i++){

            if(a%i == 0){

                if(i == list.length-1){
                    list+= i;
                    return list;
                }
                list+= i +",";
            }

        }
        return "Divizorii lui "+ a+" sunt " + list;

    }

    console.log(divizorii(62));


// Returneaza un array care sa contina toti divizorii primi a unui numar. Ex pentru 64: trebuie sa returneze [2,2,2,2,2,2,2,2]




// Returneaza un array care sa contina toti divizorii unici primi a unui numar: Ex pentru 64: trebuie sa returneze [2]
// prim 


function prime(a){

    for(let i=2;i<a;i++){

        if(a%i == 0){
            return "Nu este prim"
        }
    }

    return "Este prim";

}


function divizorPrim(a){

    var list=[];

    for(let i =1;i <= a ;i++){

        if(a%i == 0 && prime(i) == "Este prim"){

            
            list += i + " ";
            
        }

    }

    
    return list;

}
    console.log("Divizorii primi ",divizorPrim(64));

// Care primeste 2 arrayuri ca parametriu si returneaza un singur array cu toate elementele

    var ar1= [1];
    var ar2 = [2,3,4,5,"sapte"];

    function legare(a,b){

        var tot=[];

        for(let i= 0;i<a.length;i++){
            tot.push(a[i]);
        }

        for(let j=0;j<b.length;j++){
            tot.push(b[j]);
        }
        return tot;
    }
    console.log(legare(ar1,ar2));

// Care returneaza un String in ordine inversa. Ex: pentru ABC returneaza CBA
    var inve = "mihaita";
    function inversStr(a){
        var strinv ="";
        for(let i = a.length-1;i>=0;i--){

            strinv+= a[i];

        }
        return "Inversul lui "+a+ " este " +strinv;
    }
    console.log(inversStr(inve));

// Care verifica daca un numar este palindrom (se scrie la fel si de la sfarsit la inceput si de la inceput la sfarsit. Ex: ASDDSA)

    var pal = "racecar";

    function palindrom(a){

        for(let i = 0; i< a.length; i++){
            if(a[i] != a[ a.length -i-1]){
                return false +" "+a;
            }
        }

        return true+" "+a;
    }
    console.log("palindrom",palindrom(pal));



    

    