let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msgContainer");


let turn0 = true; //playerX, player0

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false; // to change the turn to other player
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const resetGame=()=>{
    turn0=true;
    enableboxes();
   msgContainer.classList.add("hide");
}

 const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 };

 const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
       box.innerText="";
    }
 };

const showwinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableboxes();  
};

const checkWinner = () => {
    for(let pattern of winPatterns){
      let pos1= boxes[pattern[0]].innerText;
      let pos2=boxes[pattern[1]].innerText;
      let pos3=boxes[pattern[2]].innerText;

      if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2&&pos2===pos3){
            console.log("Winner",pos1);
            showwinner(pos1);
        }
      }
    }
}



newbtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);