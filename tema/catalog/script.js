var input = document.querySelector('input[type="text"]');
var tHead = document.querySelector('.thd');
var tBod = document.querySelector('.tbod');

var obj = {

    nume: "",
    nota: null,


}


var ObjElevi = [];

function desen(){

    var randHead = "<tr><td>Nume</td><td>Media</td><td>Vezi note:</td></tr>";
    var randBody = "";

    tHead.innerHTML = randHead;

    for(let i =0;i<ObjElevi.length;i++){

        var rand = `
        
            <tr>
                <td>
                ${ObjElevi[i].nume}
                </td>
                <td>
                Media 
                </td>
                <td>
                <button> Vezi note </button>
                </td>
            </tr>
        
        `;
        randBody += rand;
    }

    tBod.innerHTML = randBody;
}



function adaugaElev(){

    var val = input.value;

    var elev = Object.create(obj);
    elev.nume = val;
    elev.nota = null;

    ObjElevi.push(elev);

    desen();
}




