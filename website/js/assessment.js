function evaluateMCQ() {

    var questions = [];
    document.querySelectorAll('input[name^="question"]:checked').forEach(function(el) {
        questions.push(el.value);
      });
  });

  // Evaluate the MCQ answers.
  var correctAnswers = ['B', 'C', 'C', 'D', 'D', 'B', 'B'];
  var correctCount = 0;

  for (var i = 0; i < questions.length; i++) {
    if (correctAnswers.includes(questions[i])) {
      correctCount++;
    }
  }
    // Return a message indicating whether the user passed or failed the quiz.
    if (correctCount > 2) {
      alert("You passed the quiz!");
    } else {
      alert("You failed the quiz.");
    }
  }