// Adding a variation on the Rock Paper Scissors game, adding Lizard and Spock

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

// function that accepts user input usnice prompt
function prompt(message) {
  console.log(`=> ${message}`);
}

// displays a greeting when the game begins
function displayGreeting() {
  prompt('Welcome to rock, paper, scissors, spock, lizard!')
  prompt('Play against the computer to see who wins!')
  prompt('·'.repeat(40));
}
// function to determin if the user wins a round against the computer
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

// function to determine the winner
function displayWinner(userChoice, computerChoice) {
  if (userWins(userChoice, computerChoice)) {
    prompt("You win!");
  } else if (userChoice === computerChoice) {
		prompt("It's a tie!");
	} else {
		prompt("Computer wins!");
	}
}

// function to return the full user choice string based on substring
function returnUserChoiceFromInput(userString) {
	for (let i = 0; i < VALID_CHOICES.length; i++) {
		if (VALID_CHOICES[i].startsWith(userString)) {
			return VALID_CHOICES[i];
		} else if (VALID_CHOICES[i] === userString) {
			return userString;
		}
	}
}

// function to receive and process user input
function returnUserChoice() {
  let userInput = readline.question();
  return returnUserChoiceFromInput(userInput);
}


// Main process
displayGreeting()

while (true) {
	// Ask the user to choose one of rock, paper, or scissors
	prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = returnUserChoice();

	while (!VALID_CHOICES.includes(choice)) {
		prompt("That's not a valid choice...");
		choice = returnUserChoice();
	}

	// randomly choose from array of valid choices
	let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
	let randomChoice = VALID_CHOICES[randomIndex];

	prompt(`You chose ${choice}, the computer chose ${randomChoice}`);
	displayWinner(choice, randomChoice);

	prompt('Would you like to play again (y/n)?');
	let answer = readline.question().toLowerCase();
	while (answer[0] !== 'n' && answer[0] !== 'y') {
		prompt('Please enter "y" or "n".');
		answer = readline.question().toLowerCase();
	}

	if (answer[0] !== 'y') {
	  console.clear();
	  prompt('Thanks for playing!');
	  break;
	}
}