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

function displayResult(playerChoice, comChoice) {
  let resultFlag = compareChoice(playerChoice, comChoice);

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

function playRound(e) {
  const playerChoice = parseInt(this.value);
  const comChoice = getComputerChoice();

  displayChoice(playerChoice, comChoice);
  displayResult(playerChoice, comChoice);
}

// set up elements and event listeners
const buttons = document.querySelectorAll('button.choice');
buttons.forEach(btn => btn.addEventListener('click', playRound));
