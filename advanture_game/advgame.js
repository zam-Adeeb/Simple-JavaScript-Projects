const prompt =require("prompt-sync")();
const name = prompt("Write your Advanture Name? ");
console.log("Hello Advanturer,", name,"Welcome to this fantasy World!");

const shouldPlay=prompt('Are you ready to begun your advanture?');

if(shouldPlay.toLowerCase() === "yes"){
    console.log("Let the Advanture begin!!!");

    //Game logic
    const LR=prompt("You are entering a maze, do you want to go left or right? (L/R): ");
    if(LR.toLowerCase()==="l"){
        console.log("You go left and see a bridge...");
        const cross = prompt("Do you want to cross the bridge? (Y/N): ");
        if (cross.toLowerCase()==="y"){
            console.log("You cross but the bridge breaks and you fall in the river...");
        } else if (cross.toLowerCase()==="n"){
            console.log("You are exiting the maze. You are now entering the Main Lands of Fantasy words")
        }
    }else if (LR.toLowerCase()==="r"){
        console.log("You go right and fall off a cliff...");
    }

} else if(shouldPlay.toLowerCase() === "no"){
    console.log("Sorry, To See to go Advanturer :( ");
}else{
    console.log("Invalid input...");
}