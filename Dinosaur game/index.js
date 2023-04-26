score=0;
cross=true;
backmusic=new Audio('./images/music.mp3');
gameoversound=new Audio('./images/gameover.mp3');
setTimeout(() => {
  backmusic.play();
},500);
var dinoxval=0;
document.onkeydown = function(e){
    console.log(e.keyCode)
    if(e.keyCode=='38'){
        dino=document.querySelector('.dinoimg');
        dino.classList.add('animatedino');
        setTimeout(()=>{
            dino.classList.remove('animatedino')
        },700);
      }
    if(e.keyCode==39){
            dino=document.querySelector('.dinoimg');
            dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            console.log(dinoX);
            dinoxval=dinoX;
            if(dinoX<1000){
            dino.style.left= dinoX +250 +"px";
            }
    }
    if(e.keyCode==37){
        dino=document.querySelector('.dinoimg');
        dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        console.log(dinoX);
        dinoxval=dinoX;
        if(dinoX>140){
        dino.style.left=(dinoX -200) +"px";
        }
}}


setInterval(() => {
    dino=document.querySelector('.dinoimg');
    gameover=document.querySelector('.gameover');
    dushman=document.querySelector('.dushmanani');
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
     dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    
    ox=parseInt(window.getComputedStyle(dushman,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(dushman,null).getPropertyValue('top'));
     offsetX=Math.abs(dx-ox);
     offsetY=Math.abs(dy-oy);
    //  console.log(offsetX,offsetY);
     if(offsetX<100 && offsetY<50){
        dushman.classList.remove('dushmanani');
        dushman.style.left=dinoxval+"px";
        gameover.style.visibility='visible';
        gameoversound.play();
        setTimeout(() => {
          backmusic.pause();
          gameoversound.pause();
        }, 1000);
        
       }
       else if(offsetX<140 && cross){
        score+=1;
        updatescore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);
       }
 }, 100);
function updatescore(score) {
    scorecount.innerHTML="Your Score: "+score;
   }