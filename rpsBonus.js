// A variation on the Rock Paper Scissors game, with Lizard and Spock as options

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const GAME_WIN_SCORE = 3;
const totalWins = {
  user: 0,
  computer: 0,
};
const userWinsObject = {
  // userChoice: computerChoice
  rock: ['scissors', 'lizard'],
  paper : ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock: ['rock', 'scissors'],
  lizard: ['spock', 'paper']
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
  let userWinResult;
  for (let key in userWinsObject) {
    if (userChoice === key && userWinsObject[key].includes(computerChoice)) {
      userWinResult = true;
    } else {
      userWinResult = false;
    }
  }
  return userWinResult;
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


function sanitizeUserInput(userString) {
  let choice;
  for (let index = 0; index < VALID_CHOICES.length; index++) {
    if (VALID_CHOICES[index].startsWith(userString.toLowerCase())) {
      choice = VALID_CHOICES[index];
    } else if (VALID_CHOICES[index] === userString) {
      choice = userString;
    }
  }
  return choice;
}


function returnUserChoiceFromInput() {
  let userInput = readline.question();
  return sanitizeUserInput(userInput);
}


function returnUserChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = returnUserChoiceFromInput();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice...");
    choice = returnUserChoiceFromInput();
  }
  return choice;
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
  if (totalWins.user === GAME_WIN_SCORE) {
    prompt(`The user is the grand winner!`);
  } else if (totalWins.computer === GAME_WIN_SCORE) {
    prompt('The computer is the grand winner!');
  }
}


function displayRound() {
  prompt(`Round ${gameRound}:`);
}


function playRound() {
  while (true) {
    displayRound();

    let userChoice = returnUserChoice;

    let randomChoice = returnComputerChoice();

    prompt(`You chose ${userChoice}, computer chose ${randomChoice}`);

    displayWinner(userChoice, randomChoice);
    updateTotalWins(userChoice, randomChoice);
    displayTotalWins();
    updateGameRound();

    if (totalWins.user === GAME_WIN_SCORE ||
				totalWins.computer === GAME_WIN_SCORE) break;

    prompt('Hit enter to continue ...');
    readline.question();
  }
}

function returnAnswerNewGame() {
  prompt('Do you want to start a new game (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer !== 'y' && answer !== 'n') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer;
}


// main process
console.clear();
displayGreeting();

while (true) {
  playRound();

  displayGrandWinner();

  let newGameAnswer = returnAnswerNewGame();
  if (newGameAnswer !== 'y') {
    console.log('Thanks for playing!');
    console.clear();
    break;
  }

  resetGame();
}