// A variation on the Rock Paper Scissors game, with Lizard and Spock as options

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const GAME_WIN_SCORE = 3;
const totalWins = {
  user: 0,
  computer: 0,
};
let gameRound = 1;

function prompt(message) {
  console.log(`=> ${message}`);
}


function displayGreeting() {
  prompt('Welcome to rock, paper, scissors, spock, lizard!');
  prompt('Winning 3 rounds wins the game!');
  prompt('·'.repeat(40));
}


function userWins(userChoice, computerChoice) {
  return (userChoice === 'rock' && computerChoice === 'scissors') ||
         (userChoice === 'rock' && computerChoice === 'lizard') ||
         (userChoice === 'paper' && computerChoice === 'rock') ||
         (userChoice === 'paper' && computerChoice === 'spock') ||
         (userChoice === 'scissors' && computerChoice === 'paper') ||
         (userChoice === 'scissors' && computerChoice === 'lizard') ||
         (userChoice === 'spock' && computerChoice === 'rock') ||
         (userChoice === 'spock' && computerChoice === 'scissors') ||
         (userChoice === 'lizard'  && computerChoice === 'spock') ||
         (userChoice === 'lizard'  && computerChoice === 'paper');
}


function displayWinner(userChoice, computerChoice) {
  if (userWins(userChoice, computerChoice)) {
    prompt("You win!");
  } else if (userChoice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
}


function returnUserChoiceFromInput(userString) {
  let choice;
  for (let index = 0; index < VALID_CHOICES.length; index++) {
    if (VALID_CHOICES[index].startsWith(userString)) {
      choice = VALID_CHOICES[index];
    } else if (VALID_CHOICES[index.toPrecision()] === userString) {
      choice = userString;
    }
  }
  return choice;
}


function returnUserChoice() {
  let userInput = readline.question();
  return returnUserChoiceFromInput(userInput);
}


function returnComputerChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}


function updateTotalWins(userChoice, computerChoice) {
  if (userWins(userChoice, computerChoice)) {
    totalWins.user += 1;
  } else if (userChoice === computerChoice) {
    totalWins.user += 0;
    totalWins.computer += 0;
  } else {
    totalWins.computer += 1;
  }
}

function displayTotalWins() {
  prompt(`Game score - user: ${totalWins.user} | computer: ${totalWins.computer}`);
}


function updateGameRound() {
  gameRound += 1;
}


function resetGame() {
  totalWins.user = 0;
  totalWins.computer = 0;
  gameRound = 1;
}


function displayGrandWinner() {
  if (totalWins.user === 3) {
    prompt(`The user is the grand winner!`);
  } else if (totalWins.computer === 3) {
    prompt('The computer is the grand winner!');
  }
}


function playRound() {
  while (true) {

    prompt(`Round ${gameRound}:`);

    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = returnUserChoice();

    while (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice...");
      choice = returnUserChoice();
    }

    let randomChoice = returnComputerChoice();
    prompt(`You chose ${choice}, computer chose ${randomChoice}`);

    displayWinner(choice, randomChoice);
    updateTotalWins(choice, randomChoice);
    displayTotalWins();
    updateGameRound();

    if (totalWins.user === GAME_WIN_SCORE ||
				totalWins.computer === GAME_WIN_SCORE) break;

    prompt('Hit enter to continue ...');
    readline.question();
  }
}

// main process
displayGreeting();

while (true) {
  playRound();
  displayGrandWinner();

  prompt('Do you want to start a new game (y/n)?');
  let newGameAnswer = readline.question().toLowerCase();
  while (newGameAnswer[0] !== 'y' && newGameAnswer[0] !== 'n') {
    prompt('Please enter "y" or "n".');
    newGameAnswer = readline.question().toLowerCase();
  }
  if (newGameAnswer[0] !== 'y') {
    console.log('Thanks for playing!');
    break;
  }
  resetGame();
}