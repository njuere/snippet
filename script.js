let right = document.getElementById('right');
let burger = document.getElementById('burger');

burger.onclick = function(){
    if(right.style.display == 'none'){
        right.style.display = 'block'
    } else{
        right.style.display = 'none'
    }
}