    var timerDuration = 800; // 10 minutes...
    var timerDisplay = document.getElementById('timer-display');
    var scoreDisplay = document.getElementById('score');
    var timerInterval;

    function updateTimer() {
      var minutes = Math.floor(timerDuration / 60);
      var seconds = timerDuration % 60;
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      timerDisplay.textContent = minutes + ":" + seconds;
      timerDuration--;
      if (timerDuration < 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = "Time's up!";
        submitQuiz();
      }
    }

    timerInterval = setInterval(updateTimer, 1000);

        function submitQuiz() {
            var score = calculateScore();
            document.getElementById('score_input').value = score; // Set the score value to the hidden input field
            document.getElementById('submitButton').form.submit(); // Submit the form
        }

        function calculateScore() {
            var score = 0;
            var q1Answer = document.querySelector('input[name="q1"]:checked');
            var q2Answer = document.querySelector('input[name="q2"]:checked');
            if (q1Answer && q1Answer.value === "1") {
                score++;
            }
            if (q2Answer && q2Answer.value === "3") {
                score++;
            }
            // Add more questions and check answers here
            return score;
        }
        