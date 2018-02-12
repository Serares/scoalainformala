
var ques = document.querySelectorAll('.qes1');
var para = document.getElementsByClassName('cont');


    for(var i = 0; i< ques.length; i++){

        ques[i].onclick() = function(e){

            e.target.style.backgroundColor = "red";
        }

    }