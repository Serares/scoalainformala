
var ques = document.querySelectorAll('.qes1');
var para = document.getElementsByClassName('cont');

var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var q4 = document.getElementById('q4');

var c1 = document.querySelector('#c1');
var c2 = document.querySelector('#c2');
var c3 = document.querySelector('#c3');
var c4 = document.querySelector('#c4');

q1.addEventListener('click',function(){

    
    // c1.setAttribute('class','show-cont');
    if(c1.className == 'cont'){
        c1.setAttribute('class','show-cont');
    } else {
        c1.setAttribute('class','cont');
    }

});

q2.addEventListener('click',function(){

    
    // c1.setAttribute('class','show-cont');
    if(c2.className == 'cont'){
        c2.setAttribute('class','show-cont');
    } else {
        c2.setAttribute('class','cont');
    }

});

q3.addEventListener('click',function(){

    
    // c1.setAttribute('class','show-cont');
    if(c3.className == 'cont'){
        c3.setAttribute('class','show-cont');
    } else {
        c3.setAttribute('class','cont');
    }

});

q4.addEventListener('click',function(){

    
    // c1.setAttribute('class','show-cont');
    if(c4.className == 'cont'){
        c4.setAttribute('class','show-cont');
    } else {
        c4.setAttribute('class','cont');
    }

});