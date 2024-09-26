function makeBubbles(){
    var pompom="";

for(var i=1; i<=168; i++){
    var num= Math.floor(Math.random()*10)
    pompom += `<div class="main-bottom-bubbles">${num}</div>` ;
}
document.querySelector('#main-bottom').innerHTML=pompom;
}

var timer=10;
function timeCounter(){
    var timeInt=setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timeId").textContent=timer;
        }
        else{
            clearInterval(timeInt);
            document.querySelector("#main-bottom").innerHTML=`<h1 >Game Over</h1>`;
        }
    },1000);
    
}

var hitrn
function hit(){
     hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitt").textContent=hitrn;
}

var currentScore=0;
function increaseScore(){
    currentScore += 1;
    document.querySelector("#score").textContent=currentScore
}


document.querySelector("#main-bottom").addEventListener("click",function(a){
    var clickedNumber=Number(a.target.textContent)
    if(clickedNumber===hitrn){
        increaseScore();
        makeBubbles();
        hit();
    }
})


timeCounter();
makeBubbles();
hit();


