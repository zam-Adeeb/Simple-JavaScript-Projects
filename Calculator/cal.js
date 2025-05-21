const prompt=require("prompt-sync")()
function getnum(numstr){
    while(true){
        const num= parseFloat(prompt("Enter Number "+numstr+ ": "));
        if(isNaN(num)){
            console.log("Invalid input")
        }else {
            return num
        }
    }
}
const num1=getnum('One');
const num2=getnum('Two');
const op=prompt("Enter Sign: ");

let res;
let valid=true;

switch(op){
    case "+": res=num1+num2
            break;
    case "-": res=num1-num2
            break;
    case "*": res=num1*num2
            break;
    case "/": if(num2===0){
        valid=false;
        console.log("Cannot divide with 0");}
            
        res=num1/num2
            break;
    default:console.log("Invalid");
            valid=false;
            break;
}
if(valid)
    console.log(num1, op, num2,"=",res);

