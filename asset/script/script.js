// game message
const START_MSG = "Ai đạt tới 5 điểm trước sẽ thắng.";
const WIN_MSG = "Thắng rồi, bạn thật may mắn!";
const LOSE_MSG = "Thua keo này ta bày keo khác.";
const DRAW_MSG = "Hòa! Lượt sau quyết phân thắng bại."
const FINAL_WIN_MSG = " Chiến thắng!";
const FINAL_LOSE_MSG = " Thất bại.";

// game properties
let playerInput;
let comInput;
let roundResult;
let endGame = false;
let playerScore = 0;
let comScore = 0;

// game functions
function playRound() {
  playerInput = parseInt(this.value);
  comInput = getComputerChoice();
  roundResult = compareChoice();
  updateScore();
  endGame = checkEndGame();
  updateUI();
}

function getComputerChoice() {
  return Math.floor(Math.random()*3);
}

function compareChoice() {
  if ((playerInput+1)%3 == comInput) {
    return -1;
  } else if (playerInput == comInput) {
    return 0;
  } else {
    return 1;
  }
}

function updateScore() {
  if (roundResult == 1) {
    playerScore++;
  }
  if (roundResult == -1) {
    comScore++;
  }
}

function checkEndGame() {
  if (playerScore >= 5 || comScore >= 5) {
    return true;
  }
  return false;
}

function choiceToString(choice) {
  if (choice == 0) {
    return '✊'; 
  } else if (choice == 1) {
    return '✋';
  } else if (choice == 2) {
    return '✌';
  } else {
    return '❔';
  }
}

// UI properties
const btnChoices = document.querySelectorAll('button.choice-input');
const btnRestart = document.querySelector('button.restart-input');
const txtPlayerChoice = document.querySelector('#player-choice');
const txtComChoice = document.querySelector('#com-choice');
const txtPlayerScore = document.querySelector('#player-score');
const txtComScore = document.querySelector('#com-score');
const txtResult = document.querySelector('#game-result');

btnChoices.forEach(btn => btn.addEventListener('click', playRound));
btnRestart.addEventListener('click', restartGame);

// UI functions
function updateUI() {
  updateChoiceUI();
  updateResultUI();
  updateScoreUI();
  if (endGame) {
    displayWinner();
    disableChoiceButtons();
  } else {
    enableChoiceButtons();
  }
}

function updateChoiceUI() {
  txtPlayerChoice.textContent = choiceToString(playerInput);
  txtComChoice.textContent = choiceToString(comInput);
}

function updateResultUI() {
  // remove style from final result
  txtResult.classList.remove('win');
  txtResult.classList.remove('lose');

  if (roundResult == 1) {
    txtResult.textContent = WIN_MSG;
  } else if (roundResult == 0) {
    txtResult.textContent = DRAW_MSG;
  } else if (roundResult == -1) {
    txtResult.textContent = LOSE_MSG;
  } else {
    txtResult.textContent = START_MSG;
  }
}

function updateScoreUI() {
  txtPlayerScore.textContent = playerScore;
  txtComScore.textContent = comScore;
}

function displayWinner() {
  if (playerScore == 5) {
    txtResult.classList.add('win');
    txtResult.textContent = FINAL_WIN_MSG;
  } else {
    txtResult.classList.add('lose');
    txtResult.textContent = FINAL_LOSE_MSG;
  }
}

function disableChoiceButtons() {
  btnChoices.forEach(btn => btn.disabled = true);
}

function enableChoiceButtons() {
  btnChoices.forEach(btn => btn.disabled = false);
}

function restartGame() {
  playerInput = undefined;
  comInput = undefined;
  roundResult = undefined;
  endGame = false;
  playerScore = 0;
  comScore = 0;

  updateUI();
}