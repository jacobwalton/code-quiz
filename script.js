// var timeLeft = document.getElementById("timer")
// var startButton = document.getElementById("start-button")
var questions = document.getElementById("questions")
var notification = document.getElementById("notification")
var completePage = document.getElementsByClassName("complete-page")
var score = document.getElementById("score")
var nameInput = document.querySelector("#name-input")
var submit = document.getElementById("submit")
var highScores = document.getElementsByClassName("high-scores")
var scoreTable = document.getElementById("score-table")
var startPage = document.querySelector("#start-page")
var questionPage = document.querySelector("#questions")
var questionText = document.querySelector("#question-text")


document.getElementById("start-button").addEventListener("click",function(){

timeLeft=75;

var triggerTime = setInterval(function(){
    document.getElementById("timer").innerHTML = timeLeft--;
    console.log(timeLeft);
    if (timeLeft == 0)
        clearInterval(triggerTime);

}, 1000);
startPage.style.display = "none";
questionPage.style.display = "block"
});


var questionText = document.querySelector("#question-text");
questionText.textContent="An external Javascript MUST include which of the following?";
var answerOne = document.querySelector("#answer-one");
answerOne.textContent="<script> </script>";
var answerTwo = document.querySelector("#answer-two");
answerTwo.textContent="A link to your html";
var answerThree = document.querySelector("#answer-three");
answerThree.textContent="console.log";
var answerFour = document.querySelector("#answer-four");
answerFour.textContent="None of the Above";