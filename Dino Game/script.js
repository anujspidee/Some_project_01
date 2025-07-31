const Dino = document.querySelector('.Dino');
const cactus = document.querySelector('.cactus');


function jump(){
    if(Dino.classList != 'jump'){
    Dino.classList.add('jump');
    setTimeout(function(e){
    Dino.classList.remove('jump');
},300);
}
}
let isAlive = setInterval(function(){
    let DinoTop = parseInt(window.getComputedStyle(Dino).getPropertyValue('top')); 
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    
    

    if(cactusleft < 50 && cactusleft > 0 && DinoTop >= 250 ){
        alert('Game Over') ;
    }
})

document.addEventListener('keydown',function(e){
    jump();
})


 