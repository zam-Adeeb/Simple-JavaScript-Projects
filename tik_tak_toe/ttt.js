const prompt=require("prompt-sync")()

function makeMove(turn,board){
    while(turn){
        const row = parseInt(prompt("\nEnter row: "));
        const col = parseInt(prompt("Enter col: "));

        if (isNaN(row)||row<1||row>3) 
            console.log('Invalid row...')
        else if (isNaN(col) || col <1 || col>3) 
            console.log("Invalid colum...")
        else if (board[row-1][col-1]!==" ") 
            console.log("Invalid position...")
        else {
            board[row-1][col-1]=turn
            break
        }
    }
}

function printboard(board){
    for (let i=0;i<board.length;i++){
        const row = board[i]
        let rowString = ""
        for(let j=0;j<row.length;j++){
            rowString+=row[j]
            if(j!== row.length-1) 
                rowString+= " | "
        }
        console.log(rowString)
        if(1!== board.length-1) 
            console.log("---------")
    }
}

function checkwin(board){
    const lines=[
        [[0,0],[0,1],[0,2]], // row 1
        [[1,0],[1,1],[1,2]], // row 2
        [[2,0],[2,1],[2,2]], // row 3
        [[0,0],[1,1],[2,2]], //col 1
        [[0,1],[1,1],[2,1]], // col 2
        [[0,2],[1,2],[2,2]], // col 3
        [[0,0],[1,1],[2,2]],  //dig 1
        [[0,2],[1,1],[2,0]]  // dig 2
    ]
    for (let line of lines){
        let win=turn;
        for (let pos of line){
            const[row,col]=pos
            if (board[row][col]!== turn){
                win=false
                break
            }
        }
        if (win) 
            return true
    }
    return false
}

const board = [
        [" "," "," "],
        [" "," "," "],
        [" "," "," "]
    ]

let turn = "x";
let turnCount = 0;
let win = false;

while(turnCount<9){
    console.log(turn,"players turn.")
    makeMove(turn, board)
    printboard(board)
    console.log()
    win=checkwin(board,turn)
    if (win){
        console.log(turn,"has won!")
        break;
    }
    if(turn==="x") 
        turn="o"
    else 
        turn="x"

    turnCount++;
}
if (turnCount===9)
    console.log("Tie game!")