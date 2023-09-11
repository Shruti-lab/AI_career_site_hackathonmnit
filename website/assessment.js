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


var score = 0; // Initialize score variable
var domain;
var personalityChoices = {};
var questions = {}; // To store questions and selected choices

function evaluateAptitudeTest() {
    var ele = document.getElementsByName('science_domain');

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            domain = ele[i].value;
        }
    }
    console.log(domain)
        const questions = [
            {
                correctAnswer: 'C',
                selectedAnswer: document.querySelector('input[name="1q1"]:checked').value
            },
            {
                correctAnswer: 'C',
                selectedAnswer: document.querySelector('input[name="1q2"]:checked').value
            },
            {
                correctAnswer: 'C',
                selectedAnswer: document.querySelector('input[name="1q3"]:checked').value
            },
            {
                correctAnswer: 'D',
                selectedAnswer: document.querySelector('input[name="1q4"]:checked').value
            },
            {
                correctAnswer: 'D',
                selectedAnswer: document.querySelector('input[name="1q5"]:checked').value
            },
            {
                correctAnswer: 'B',
                selectedAnswer: document.querySelector('input[name="1q6"]:checked').value
            }
        ];

        questions.forEach(question => {
            if (question.correctAnswer === question.selectedAnswer) {
                score++;
            }
        });

        evaluatePersonalityTest();

        // Redirect to results page
        window.location.href = 'try.html';
    }
    

    function evaluatePersonalityTest() {
    
  
      // Retrieve and store the answers for each question
      var questions = document.querySelectorAll('.quiz2 ol li');
      questions.forEach(function (question, index) {
          var questionNumber = '2q' + (index + 1);
          var selectedChoice = document.querySelector('input[name="2q' + (index + 1) + '"]:checked');
          
          if (selectedChoice) {
            var choiceLabel = question.querySelector('label[for="' + selectedChoice.id + '"]');
            personalityChoices[questionNumber] = choiceLabel.textContent;
            questions[questionNumber] = question.querySelector('p').textContent; // Store the question
        }
        console.log(domain);
          console.log(personalityChoices);
          console.log(score);
          console.log(questions); // This will log the questions along with selected choices
          
      });}

      function sendDataToServer() {
        const data = {
            domain: domain,
            score: score, // Replace with your actual score
            questions: questions,
            personalityChoices: personalityChoices // Replace with your actual personality choices
        };
    
        fetch('/api/send-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(responseData => {
            // Handle the response from the server
            console.log(responseData);
            // You can display the career options to the user here
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
    
    // Call the function when you want to send the data to the server
    sendDataToServer();
    

  
      // Now you have the personality assessment choices in the `personalityChoices` object
      //console.log(personalityChoices);*/

  



/*
function evaluateMCQ() {

  // Get the values of the MCQ questions.
  var questions = [];
  document.querySelectorAll('input[name="question"]:checked').forEach(function(el) {
    questions.push(el.value);
    console.log(questions);
  });

  // Evaluate the MCQ answers.
  var correctAnswers = ['A', 'B'];
  var correctCount = 0;

  for (var i = 0; i < questions.length; i++) {
    if (correctAnswers.includes(questions[i])) {
      correctCount++;
    }
  }
  console.log("correct answers for aptitude test:",correctCount);

  // Redirect to the results page.
  window.location.href = 'results.html?correct=' + correctCount;
}*/

/*function displayRadioValue() {
  var ele = document.getElementsByName('science_domain');
  var domain;

  for (i = 0; i < ele.length; i++) {
      if (ele[i].checked){
          domain = ele[i].value;
      }
  }

  if (domain) {
      // Assuming you have a function to send data to the OpenAI API
      sendToOpenAI(domain);
  } else {
      alert("Please select a domain.");
  }
}*/

/*function sendToOpenAI(domain) {
  // Assuming you have a function to send data to the OpenAI API
  // You would put your API call code here
  // For example:
  fetch('https://api.openai.com/v1/complete', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_API_KEY'
      },
      body: JSON.stringify({
          prompt: 'Given the selected domain is ' + domain + ',...',
          max_tokens: 50,
          temperature: 0.8,
      })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}*/

    
