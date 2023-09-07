let timer;
let minutes = 20;
let seconds = 0;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        alert("Time's up!");
        // Add code here to handle what should happen when the timer reaches 0
    } else {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        displayTime();
    }
}

function displayTime() {
    let timerDisplay = document.getElementById("timer");
    timerDisplay.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}




function evaluateMCQ() {

  // Get the values of the MCQ questions.
  var questions = [];
  document.querySelectorAll('input[name="question"]:checked').forEach(function(el) {
    questions.push(el.value);
  });

  // Evaluate the MCQ answers.
  var correctAnswers = ['A', 'B'];
  var correctCount = 0;

  for (var i = 0; i < questions.length; i++) {
    if (correctAnswers.includes(questions[i])) {
      correctCount++;
    }
  }

  // Redirect to the results page.
  window.location.href = 'results.html?correct=' + correctCount;
}