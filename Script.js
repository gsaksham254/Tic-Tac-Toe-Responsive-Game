let Boxes = document.querySelectorAll(".active");
let Reset = document.querySelector(".reset");
let Hide = document.querySelector(".win");
let draw = document.querySelector(".draw");
let newGame = document.querySelector(".New-game");
Hide.classList.add("hide");
draw.classList.add("hide");
let count0 = true;
let Draw = 0;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let boxDisable =()=>{
    for(Box of Boxes){ 
        Box.disabled = true;
    }
}
let boxEnable =()=>{
    for(Box of Boxes){ 
        count0 = true;
        Box.disabled = false;
        Box.innerHTML = "";
        Hide.classList.add("hide");
        draw.classList.add("hide");
    }
}

Boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
        if (Box.innerHTML === "") {
            if (count0) {
                Box.innerHTML = "O";
                Box.style.color = "red";
                count0 = false;
                Draw++;
            } else {
                Box.innerHTML = "X";
                Box.style.color = "blue";
                count0 = true;
                Draw++;
            }
        }
        checkWin();
        checkDraw();
    })
})
const checkWin = () => {
    for(winPattern of winPatterns){
        let Pos1 = Boxes[winPattern[0]].innerHTML;
        let Pos2 = Boxes[winPattern[1]].innerHTML;
        let Pos3 = Boxes[winPattern[2]].innerHTML;
        if(Pos1 != "" && Pos2 != "" && Pos3 != ""){
            if(Pos1 == Pos2 && Pos2 == Pos3){
                boxDisable();
                Hide.classList.remove("hide");
                Hide.innerText = `Winner Winner Tic-Tac-Toe Dinner \n Winner is (${Pos1})`;
            }
        }
    }
}

const checkDraw = ()=>{
    if(Draw == 9){
        boxDisable();
        draw.classList.remove("hide");
    }    
}

Reset.addEventListener("click", boxEnable);
newGame.addEventListener("click", boxEnable);


// console.log(winPattern[0],winPattern[1],winPattern[2]);
// console.log(Boxes[winPattern[0]].innerHTML,Boxes[winPattern[1]].innerHTML,Boxes[winPattern[2]].innerHTML);
// // console.log(Boxes[winPattern[0]],Boxes[winPattern[1]],Boxes[winPattern[2]]);
