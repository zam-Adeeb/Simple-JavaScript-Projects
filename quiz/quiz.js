const prompt=require("prompt-sync")()
const fs=require("fs")

function loadQues(){
    try {
        const data=fs.readFileSync("ques.json","utf8")
        const quiz=JSON.parse(data).quiz
        return quiz
    }
    catch(e){
        console.log("Error occured loading file",e)
        return []
    }
}

function getRamQues(quiz,numQues){
    if(numQues> quiz.length){
        numQues=quiz.length
    }
    const shuffled=quiz.sort(()=>{
        return 0.5 -Math.random()
    })
    return shuffled.slice(0,numQues)
}

function askQues(quiz){
    console.log(quiz.question)
    for (let i=0;i<quiz.options.length;i++){
        const option =quiz.options[i]
        console.log(`${i+1}.${option}`)
    }
    const choice=parseInt(prompt("Enter the option number: "))
    if(isNaN(choice) || choice<1 || choice>quiz.options.length){
        console.log("Inavlid choice")
        return false
    }
    const choicevalue=quiz.options[choice-1]
    return choicevalue===quiz.answer
}

const numQues=parseInt(prompt("Enter the number of question: "));
const quiz=loadQues()
const ranQues=getRamQues(quiz,numQues)

let correct=0;
const time=Date.now()

for(let question of ranQues){
    const isCorrect=askQues(question)
    console.log()
    if(isCorrect)
        correct++
}
const totaltime=Date.now()-time
console.log('Correct: ',correct)
console.log('Time: ',totaltime/1000+"s")
console.log('Score: ',Math.round((correct/numQues)*100,2)+"%")