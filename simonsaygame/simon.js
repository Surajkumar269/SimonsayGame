let gameSeq = [];
let userSeq = [];

let btns=["red", "purple", "green", "yellow"];

let started=false;
let level = 0;
h2=document.querySelector("h2");
document.addEventListener("keypress", function() {
if(started==false){
    console.log("Game is started");
    started=true;
    levelUp();
}
});

function btnFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
btn.classList.remove("flash");
},500);
}

function userFlash(btn){
btn.classList.add("userflash");
setTimeout(function(){
btn.classList.remove("userflash");
},500);
}

function levelUp() {
    userSeq = [];
   level++; 
   h2.innerText=`Level ${level}`;
// random button choose
let randomIndex = Math.floor(Math.random() * btns.length);
let randomColor = btns[randomIndex];
let randomBtn = document.querySelector(`.${randomColor}`);
// console.log(randomBtn);
// console.log( randomIndex);
// console.log(randomColor);
gameSeq.push(randomColor);
console.log(gameSeq);
   btnFlash(randomBtn);
}

function checkAnswer(idx) {
    // console.log("current level: " , level);
  
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length === gameSeq.length) {
          setTimeout(levelUp, 500);
         }
    }
    else{
         h2.innerHTML=`Game Over!  Your Score was<b> ${level} </b><br/>Press any key to start.`;  
         document.querySelector("body").style.backgroundColor = "red";
         setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
         }, 500);          
         reset();
    }
}
    

function btnPress(){
    console.log(this);
     let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAnswer(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
  function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
  }   
    