// O functie care compara 2 valori si returneaza true daca sunt egale si false daca nu sunt egale

function egal(a,b){

    if(a === b){
        return true;
    } else {
        return false;
    }

}

console.log(egal(2,2));

// O functie care compara 2 valori si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea

function egal1(a,b){

    if(a < b){
        return -1
    } else if(a>b){
        return 1
    } else{
        return 0;
    }

}

console.log(egal1(1,-1));

// O functie care primeste 2 valori si returneaza maximul dintre cele 2;


function max(a,b){
    if(a>b){
        return a;
    } else {
        return b;
    }
}

console.log(max(4,5));

// O functie care primeste 2 valori si returneaza minimul dintre cele 2

function min(a,b){
    if(a>b){
        return b;
    } else {
        return a;
    }
}

console.log(min(4,5));


// O functie care face suma dintre 2 valori

    function sum(a,b){
        return a+b;
    }

    console.log(sum(10,2));

// O functie care face diferenta dintre 2 valori

function diff(a,b){
    return a-b;
}

console.log(diff(10,2));

// O functie care imparte 2 numere si returneaza rezultatul impartirii celor 2 numere (rezultatul trebuie sa fie integer --> fara zecimale)

    function impartire(a,b){

        return Math.floor(a/b);

    }

    console.log(impartire(11,3));

// O functie care imparte 2 numere si returneaza rezultatul impartirii celor 2 numere (rezultatul trebuie sa fie float --> cu zecimale)

function impartire1(a,b){

    return (a/b).toFixed(2);

}

console.log(impartire1(10,2));

// O functie care imparte 2 numere si returneaza restul impartirii celor 2 numere ( daca imparti 9 la 2, restul impartirii este 1, pentru 11 si 3, restul este 2, pentru 12 si 3 este 0)

    function rest(a,b){

        return a%b;

    }

    console.log(rest(9,2));
// Transforma din Miles/Galon in Litri/100KM

    function mpgtoLitri(a){

        var km = a* 1.609;
        var result1 = (4.55/km) *100;
        var result = 235 /a;
        console.log(result1," l/100km US");
        console.log(result," l/100km UK");

    }

    mpgtoLitri(60);



// Transforma din Celsius in Fahrenheit

    function celToFaren(a){

        var result = a * 1.8 +32;
        return result;
    }
    console.log("Celsius in Fahrenheit ",celToFaren(30));
// Transforma din Grade in Radiani

    function gradeToRadian(a){

        var result = a/63.6619772;
        var result2= a *(Math.PI/180);
        return result2;

    }
    console.log(gradeToRadian(1));
// Returneaza suplementul unui unghi (suma unghiurilor este 180)


    function suplement(a){

        var result = 180 -a;

        return result;

    }
    console.log(suplement(80));
// Returneaza complementul unui unghi (suma unghiurilor este 90)

    function compl(a){

        return 90-a;

    }
