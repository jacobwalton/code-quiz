// var timeLeft = document.getElementById("timer")
// var startButton = document.getElementById("start-button")
var notification = document.querySelector("#notification")
var completePage = document.getElementsByClassName("complete-page")
var score = document.getElementById("score")
var nameInput = document.querySelector("#name-input")
var submit = document.getElementById("submit")
var highScores = document.getElementsByClassName("high-scores")
var scoreTable = document.getElementById("score-table")
var startPage = document.querySelector("#start-page")
var questionOne = document.querySelector("#question-one")
var questionTwo = document.querySelector("#question-two")
var questionThree = document.querySelector("#question-three")
var questionFour = document.querySelector("#question-four")
var questionFive = document.querySelector("#question-four")
var questionOneText = document.querySelector("#question-one-text")
var questionTwoText = document.querySelector("#question-two-text")
var questionThreeText = document.querySelector("#question-three-text")
var questionFourText = document.querySelector("#question-four-text")
var questionFiveText = document.querySelector("#question-five-text")


document.getElementById("start-button").addEventListener("click", function () {

    timeLeft = 75;

    var triggerTime = setInterval(function () {
        document.getElementById("timer").innerHTML = timeLeft--;
        console.log(timeLeft);
        if (timeLeft == 0)
            clearInterval(triggerTime);

    }, 1000);
    startPage.style.display = "none";
    questionOne.style.display = "block"
});

function notificationFunction() {
    setTimeout(function(){notification.style.display = "none";}, 2000);
}
var questionOneText = document.querySelector("#question-one-text");
questionOneText.textContent = "An external Javascript file MUST include which of the following?";
var qOneAOne = document.querySelector("#q-one-a-one");
qOneAOne.textContent = "<script> </script>";
var qOneATwo = document.querySelector("#q-one-a-two");
qOneATwo.textContent = "A link to your html";
var qOneAThree = document.querySelector("#q-one-a-three");
qOneAThree.textContent = "console.log";
var qOneAFour = document.querySelector("#q-one-a-four");
qOneAFour.textContent = "None of the Above";

qOneAOne.addEventListener("click", function () {
    notification.style.display = "block";
    notification.textContent = "Incorrect";
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
    timeLeft = timeLeft - 10;
    notificationFunction();
})
qOneATwo.addEventListener("click", function () {
    notification.style.display = "block";
    notification.textContent = "Incorrect";
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
    timeLeft = timeLeft - 10;
    notificationFunction();
})
qOneAThree.addEventListener("click", function () {
    notification.style.display = "block";
    notification.textContent = "Incorrect";
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
    timeLeft = timeLeft - 10;
    notificationFunction();
})
qOneAFour.addEventListener("click", function () {
    notification.style.display = "block";
    notification.textContent = "Correct";
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
    notificationFunction();
})




var questionTwoText = document.querySelector("#question-text");
questionTwoText.textContent = "What characters are used to wrap around an array?";
var qTwoAOne = document.querySelector("#q-two-a-one");
qTwoAOne.textContent = "()";
var qTwoATwo = document.querySelector("#q-two-a-two");
qTwoATwo.textContent = "[]";
var qTwoAThree = document.querySelector("#q-two-a-three");
qTwoAThree.textContent = "{}";
var qTwoAFour = document.querySelector("#q-two-a-four");
qTwoAFour.textContent = "//";

qTwoAOne.addEventListener("click", function () {
    notification.style.display = "block";
    notification.textContent = "Incorrect";
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
    timeLeft = timeLeft - 10;
    notificationFunction();
})

qTwoATwo.addEventListener("click", function () {
    notification.style.display = "block";
    notification.textContent = "Correct";
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
    notificationFunction();
})


qTwoAThree.addEventListener("click", function () {
    notification.style.display = "block";
    notification.textContent = "Incorrect";
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
    timeLeft = timeLeft - 10;
    notificationFunction();
})

qTwoAFour.addEventListener("click", function () {
    notification.style.display = "block";
    notification.textContent = "Incorrect";
    questionOne.style.display = "none";
    questionTwo.style.display = "block";
    timeLeft = timeLeft - 10;
    notificationFunction();
})

// var questionThreeText = document.querySelector("#question-text");
// questionThreeText.textContent = "How would you declare a Javascript variable called 'count'";
// var qThreeAOne = document.querySelector("#q-three-a-one");
// qThreeAOne.textContent = "variable = count";
// var qThreeATwo = document.querySelector("#q-three-a-two");
// qThreeATwo.textContent = "variable count";
// var qThreeAThree = document.querySelector("#q-three-a-three");
// qThreeAThree.textContent = "var count";
// var qThreeAFour = document.querySelector("#q-three-a-four");
// qThreeAFour.textContent = "None of the above";



// var questionFourText = document.querySelector("#question-text");
// questionFourText.textContent = "Which of the following is NOT a Javascript value?";
// var qFourAOne = document.querySelector("#q-four-a-one");
// qFourAOne.textContent = "Number";
// var qFourATwo = document.querySelector("#q-four-a-two");
// qFourATwo.textContent = "String";
// var qFourAThree = document.querySelector("#q-four-a-three");
// qFourAThree.textContent = "Operator";
// var qFourAFour = document.querySelector("#q-four-a-four");
// qFourAFour.textContent = "Boolean";



// var questionFiveText = document.querySelector("#question-text");
// questionFiveText.textContent = "Javascript is __________";
// var qFiveAOne = document.querySelector("#q-five-a-one");
// qFiveAOne.textContent = "Fun";
// var qFiveATwo = document.querySelector("#q-five-a-two");
// qFiveATwo.textContent = "Easy";
// var qFiveAThree = document.querySelector("#q-five-a-three");
// qFiveAThree.textContent = "Simple";
// var qFiveAFour = document.querySelector("#q-five-a-four");
// qFiveAFour.textContent = "The devil";
