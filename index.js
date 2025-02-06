let scoreLeft = document.getElementById("scoreLeft");
let scoreRight = document.getElementById("scoreRight");

let rightScore = 0;
let leftScore = 0;

function rightAdd1Point() {
  rightScore += 1;
  scoreLeft.innerText = rightScore;
}

function rightAdd2Points() {
  rightScore += 2;
  scoreLeft.innerText = rightScore;
}

function rightAdd3Points() {
  rightScore += 3;
  scoreLeft.innerText = rightScore;
}

function leftAdd1Point() {
  leftScore += 1;
  scoreRight.innerText = leftScore;
}

function leftAdd2Points() {
  leftScore += 2;
  scoreRight.innerText = leftScore;
}

function leftAdd3Points() {
  leftScore += 3;
  scoreRight.innerText = leftScore;
}

// Select timer display
let timerDisplay = document.querySelector(".time h2");

// Set initial game time (12 minutes per quarter)
let gameTime = 12 * 60; // 12 minutes in seconds
let timerRunning = false;
let timer;

// Function to start countdown automatically
function startTimer() {
  if (timerRunning) return; // Prevent multiple intervals
  timerRunning = true;
  
  timer = setInterval(() => {
    if (gameTime <= 0) {
      clearInterval(timer);
      timerRunning = false;
      timerDisplay.innerText = "00:00"; // Stop at zero
      return;
    }

    gameTime--; // Decrease time
    let minutes = Math.floor(gameTime / 60);
    let seconds = gameTime % 60;

    // Update timer display
    timerDisplay.innerText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }, 1000);
}

// Function to reset the timer
function resetTimer() {
  clearInterval(timer);
  timerRunning = false;
  gameTime = 12 * 60; // Reset to 12 minutes
  timerDisplay.innerText = "12:00";
}

// Auto-start the timer when the page loads
window.onload = startTimer;