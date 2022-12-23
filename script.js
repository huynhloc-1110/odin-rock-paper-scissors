function getComputerChoice() {
  return Math.floor(Math.random()*3);
}

function compareChoice(playerChoice, comChoice) {
  if ((playerChoice+1)%3 == comChoice)
    return -1;
  else if (playerChoice == comChoice)
    return 0;
  else
    return 1;
}

function displayResult(resultFlag) {
  const result = document.querySelector('p#result');
  if (resultFlag == 0)
    result.textContent = "Draw. You both did well.";
  else if (resultFlag == 1)
    result.textContent = "You win. How lucky!";
  else
    result.textContent = "You loose. Maybe next time!";
}

function choiceToString(choice) {
  if (choice == 0)
    return "Rock";
  else if (choice == 1)
    return "Paper";
  else
    return "Scissors";
}

function displayChoice(playerChoice, comChoice) {
  const choices = document.querySelector('p#choices');
  choices.textContent = `Player chose ${choiceToString(playerChoice)}. `;
  choices.textContent += `Computer chose ${choiceToString(comChoice)}.`;
}

function updateScore(resultFlag) {
  if (resultFlag == 1)
    playerScoreNode.textContent = ++playerScore;
  else if (resultFlag == -1)
    comScoreNode.textContent = ++comScore;
}

function checkEndGame() {
  if (playerScore < 5 && comScore < 5)
    return false;
  return true;
}

function displayFinalResult() {
  const finalResult = document.querySelector('#final-result');
  finalResult.textContent = "Final result: ";
  if (playerScore > comScore)
    finalResult.textContent += "YOU WIN!";
  else
    finalResult.textContent += "YOU LOSE.";
}

function restartGame() {
  document.body.removeChild(restartBtn);

  playerScore = 0;
  comScore = 0;
  playerScoreNode.textContent = 0;
  comScoreNode.textContent = 0;
  buttons.forEach(btn => btn.addEventListener('click', playRound));
}

function playRound(e) {
  const playerChoice = parseInt(this.value);
  const comChoice = getComputerChoice();
  const resultFlag = compareChoice(playerChoice, comChoice);

  displayChoice(playerChoice, comChoice);
  displayResult(resultFlag);
  updateScore(resultFlag);

  if (checkEndGame()) {
    displayFinalResult();
    buttons.forEach(btn => btn.removeEventListener('click', playRound));
    document.body.appendChild(restartBtn);
  }
}

// set up elements and event listeners
const buttons = document.querySelectorAll('button.choice');
buttons.forEach(btn => btn.addEventListener('click', playRound));

let playerScore = 0;
let comScore = 0;
const playerScoreNode = document.querySelector('.score.player');
const comScoreNode = document.querySelector('.score.com');

const restartBtn = document.createElement('button');
restartBtn.textContent = "Restart Game";
restartBtn.addEventListener('click', restartGame);