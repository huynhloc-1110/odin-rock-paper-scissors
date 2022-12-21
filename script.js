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
