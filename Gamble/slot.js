// Slot Machni

const prompt=require("prompt-sync")();

const ROWS=3;
const COLS=3;
const Symbols_count={
    "A":2, "B":4,"C":6,"D":8
}
const Symbols_vals={
    "A":5,"B":4,"C":3,"D":2
}

const Deposit=()=>{
    while(true){  // way of defining a function
        const DepositAmount=prompt("Enter a Deposit amount: ");
        const numberDepositAmount= parseFloat(DepositAmount);

        if (isNaN(numberDepositAmount)||numberDepositAmount<=0){
            console.log("Invalid deposit amount")
        } else{
            return numberDepositAmount;
        }
    }
};

const Bet=()=>{
    while(true){  
        const Lines=prompt("Enter the number of line to bet on: ");
        const NumberofLines= parseFloat(Lines);

        if (isNaN(NumberofLines)||NumberofLines <= 0 || NumberofLines > 3){
            console.log("Invalid no of lines")
        } else{
            return NumberofLines;
        }
    }
}

const BetAmount=(Balance,Lines)=>{
    while(true){  
        const bet=prompt("Enter the total bet per lines: ");
        const Numberbet= parseFloat(bet);

        if (isNaN(Numberbet) || Numberbet <= 0 || Numberbet > Balance/Lines){
            console.log("Invalid no of lines")
        } else{
            return Numberbet;
        }
    }
}

const spin=()=>{
    const symbols=[];
    for (const [symbol,count] of Object.entries(Symbols_count)){
        for (let i=0;i<count;i++){
            symbols.push(symbol);
        }
    }
    const reels=[];
    // const reels=[[],[],[]];
    for(let i=0;i<COLS;i++){
        reels.push([]); //
        const reel=[...symbols];
        for(let j=0;j<ROWS;j++){
            const rendomIndex=Math.floor(Math.random()*reel.length);
            const selected=reel[rendomIndex];
            reels[i].push(selected);
            reel.splice(rendomIndex,1);
        }
    }
    return reels;
};

const transpose=(reels)=>{
    const rows=[];
    for (let i=0;i<ROWS;i++){
        rows.push([]);
        for(let j=0;j<COLS;j++){
            rows[i].push(reels[j][i])
        }
    }
    return rows;
};

const print=(rows)=>{
    for(const row of rows){
        let rowString="";
        for(const [i,symbol]of row.entries()){
            rowString+=symbol
            if(1!=row.length-1){
                rowString+=" | "
            }
        }
        console.log(rowString);
    }
};

const getWin=(rows,bet,Lines)=>{
    let win=0;
    for(let row=0;row<Lines;row++){
        const symbols=rows[row];
        let allSame=true;
        for(const symbol of symbols){
            if(symbol!=symbols[0]){
                allSame=false;
                break;
            }
        }
        if(allSame){
            win+=bet*Symbols_vals[symbols[0]]
        }
    }
    return win;
};

const game=()=>{

    let Balance = Deposit();
    while(true){
        console.log("you have a balance of $"+Balance);
        const NumberofLines=Bet();
        const bet=BetAmount(Balance,NumberofLines);
        Balance-=bet*NumberofLines;
        const reels=spin();
        const rows=transpose(reels);
        print(rows);
        const win=getWin(rows,bet,NumberofLines);
        Balance+=win;
        console.log("You won, $" +win.toString());
        if(Balance<=0){
            console.log("No More Money");
            break;
        }
        const playAgain=prompt("Do you want to play again (y/n)?: ");
        if(playAgain!="y"){
            break;
        }
    }
};

game();