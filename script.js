let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('#reset-btn');
let winnerText = document.querySelector('#winText');
let winnerContainer = document.querySelector('.winner');
let newGame = document.querySelector('#newbtn');

let turnO = true;

let winpattern = [
    [0,4,8],
    [0,1,2],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let reset=()=>{
    turnO = true;
    enableBoxes();
    winnerContainer.classList.add('hide');
}
let enableBoxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
     }
}
boxes.forEach((box) =>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText = "X";
            turnO = false;

        }
        else{
            box.innerText = "O";
            turnO = true;
        }
        // prevent further interaction.
        box.disabled = true;
        checkPattern();
    });
})

let disableBoxes = ()=>{
     for(let box of boxes){
        box.disabled = true;
     }
}
let showWinner = (winner)=>{
    winnerText.innerText = `Congratulation You won...`
    blaskConfetti();
    winnerContainer.classList.remove('hide');
    disableBoxes();
    
}
let checkPattern = ()=>{
    for(let pattern of winpattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos2Val!=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
            else{
                
            }
        }
    }
}
const blaskConfetti = ()=> {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
}
resetbtn.addEventListener('click',reset);
newGame.addEventListener('click',reset);