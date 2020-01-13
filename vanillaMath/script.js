
var correctAnswer;

function resetInput(){
    document.getElementById("answer").value = " ";
}

function randomNumber(){
    return Math.floor(Math.random() * 10 + 1)
}

function makeQuestion(){
    var number1 = randomNumber();
    var number2 = randomNumber();
    correctAnswer = number1 + number2;
    document.getElementById("question").innerText = " ";
    document.getElementById("question").append("What's " + number1 + " + " + number2 + "?");

}

makeQuestion();

function checkAnswer(){
    var answer = document.getElementById("answer").value;
    if(answer == correctAnswer){
        return "Correct";
    }
    else {
        return "Incorrect";
    }
}

function appendResult(result){
    document.getElementById("result").innerText = " ";
    document.getElementById("result").append(result);
}

document.getElementById("submitButton").addEventListener("click", function(){
    appendResult(checkAnswer());
    resetInput();
    makeQuestion();
})


