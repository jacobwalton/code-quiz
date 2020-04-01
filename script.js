// var timeLeft = document.getElementById("timer")
// var startButton = document.getElementById("start-button")
var questions = document.getElementById("questions")
var choices = document.getElementById("choices")
var notification = document.getElementById("notification")
var completePage = document.getElementsByClassName("complete-page")
var score = document.getElementById("score")
var nameInput = document.querySelector("#name-input")
var submit = document.getElementById("submit")
var highScores = document.getElementsByClassName("high-scores")
var scoreTable = document.getElementById("score-table")
var startPage = document.querySelector("#start-page")
var questionPage = document.querySelector("#questions")


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
