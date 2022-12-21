function getComputerChoice() {
  // generate random number within 0, 1, 2
  let choice = Math.floor(Math.random()*3);

  // if 0 -> rock, 1 -> paper, else -> scissors
  if (choice == 0)
    return "rock";
  else if (choice == 1)
    return "paper";
  else
    return "scissors";
}

function getUserChoice() {
  let input;

  // loop
  while(true) {
    // get input from prompt
    input = prompt("Enter 'rock', 'paper' or 'scissors':");
    
    // if input is null, execute the loop again
    if (input == null) continue;

    // change input to lower case
    input = input.toLowerCase();

    // if input is rock, paper or scissors, break the loop
    if (input == "rock" || input == "paper" || input == "scissors")
      break;
  }

  return input;
}

function displayWinner(userChoice, computerChoice) {
  if (userChoice == "rock") {
    if (computerChoice == "paper")
      return "You Lose! Paper beats Rock";
    else if (computerChoice == "scissors")
      return "You Win! Rock beats Scissors"
    else
      return "Draw! Both choose Rock"
  }

  if (userChoice == "paper") {
    if (computerChoice == "scissors")
      return "You Lose! Scissors beat Paper";
    else if (computerChoice == "rock")
      return "You Win! Paper beats Rock";
    else
      return "Draw! Both choose Paper"
  }

  if (userChoice == "scissors") {
    if (computerChoice == "rock")
      return "You Lose! Rock beats Scissors";
    else if (computerChoice == "paper")
      return "You Win! Scissors beat Paper";
    else
      return "Draw! Both choose Scissors";
  }
}
