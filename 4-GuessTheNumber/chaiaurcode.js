let randomNumber = Math.round(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGusses = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();

    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please Enter a Valid Number');
  } else if (guess < 1) {
    alert('Please Enter a Valid Number greater than zero');
  } else if (guess > 100) {
    alert('Please Enter a Valid Number Less than hundred');
  } else {
    prevGuess.push(guess);
    if (numGusses === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
  userInput.value = '';
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too Low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is Too High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGusses++;
  remaining.innerHTML = `${11 - numGusses}`;
}

function displayMessage(msg) {
  lowOrHigh.innerHTML = `<h2>${msg}</h2>`;
}

function newGame() {
  randomNumber = Math.round(Math.random() * 100 + 1);
}

function endGame() {
  alert('game end call');
  guessSlot.innerHTML = '';
  remaining.innerHTML = `${10}`;
}
