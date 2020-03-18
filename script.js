var secondsDisplay = document.getElementById("seconds");
var allDoneDisplay = document.getElementById("score");
var initials = document.getElementById("initials");
var highScore = document.getElementById("scoreList");
var questionArray = ["Commonly used data types DO NOT include:",
    "The condition in an if/else statement is enclosed within ______.",
    "Arrays in JavaScript can be used to store ______.",
    "String values must be enclosed within _______ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:"
];
var answer1Array = ["1. strings", "1. quotes", "1. numbers and strings", "1. commas", "1. JavaScript"];
var answer2Array = ["2. booleans", "2. curly brackets", "2. other arrays", "2. curly brackets", "2. terminal/bash"];
var answer3Array = ["3. alerts", "3. parenthesis", "3. booleans", "3. quotes", "3. for loops"];
var answer4Array = ["4. numbers", "4. square brackets", "4. all of the above", "4. parenthesis", "4. console.log"];
var correctAnswer = ["3", "3", "4", "3", "4"];
var i = 0;
var seconds = 75;
var interval = "";
var highScoreDisplay = userName + seconds;
var userName = "";

var buttonInput = "";
var answer = "";

localStorage.setItem("highScoreList", highScore.value )

$(highScore).append(localStorage.getItem("highScore"));

//hide quiz buttons
$(".quizPage").hide();
$(".finishForm").hide();
$(".feedbackCorrect").hide();
$(".feedbackWrong").hide();
//create a  listener to start quiz/timer on button click
$(".submit").on("click", function() {
    userName = initials.value
    highScoreDisplay = userName + "-" + seconds;
    $("#scoreList").append(highScoreDisplay);
    localStorage.setItem("highScore", highScoreDisplay);
    window.location.href = "highscores.html";

});
$(".startButton").on("click", function () {
    $(".startPage").hide();
    $(".quizPage").show();
    quizQuestions();
    //listeners on answer button class
    //if statement to strictly compare value on button click

    console.log("yes")
    //call timer function
    interval = setInterval(function () {
        if (seconds > 0) {
            seconds--;
            renderTime();
        }
        else {
            finished();
            
        }
    }, 1000);
});

$(".answerButton").on("click", function () {
    renderTime();
    $(".feedbackCorrect").hide();
    $(".feedbackWrong").hide();
    buttonInput = this.value;
    console.log(buttonInput)
    if (correctAnswer[i] === buttonInput) {
        $(".feedbackCorrect").show();
    } else {
        $(".feedbackWrong").show();
        seconds = seconds - 10;
    }
    i++
    setTimeout(function () {
        $(".feedbackCorrect").hide();
        $(".feedbackWrong").hide();
    }, 1000);
    console.log(i)
    quizQuestions();
});

function quizQuestions() {
    //set .question h1 text to the questions
    $(".question").text(questionArray[i])
    $(".answer1").text(answer1Array[i])
    $(".answer2").text(answer2Array[i])
    $(".answer3").text(answer3Array[i])
    $(".answer4").text(answer4Array[i])
    if(i >= questionArray.length) {
        finished();
        
    }
};

function renderTime() {
    secondsDisplay.textContent = seconds
};

function finished () {
    clearInterval(interval);
        $(".quizPage").hide();
        $(".finishForm").show();
        allDoneDisplay.textContent = seconds
}


        //create timer function w/one second decrementing interval starting at 75

        //