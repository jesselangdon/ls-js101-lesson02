

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

// use a nice prompt
function prompt(message) {
	console.log(`=> ${message}`);
}

// function to determine the winner
function displayWinner(userChoice, computerChoice) {
		if ((userChoice === 'rock' && computerChoice === 'scissors') ||
				(userChoice === 'rock' && computerChoice === 'lizard') ||
				(userChoice === 'paper' && computerChoice === 'rock') ||
				(userChoice === 'paper' && computerChoice === 'spock') ||
				(userChoice === 'scissors' && computerChoice === 'paper') ||
				(userChoice === 'scissors' && computerChoice === 'lizard') ||
				(userChoice === 'spock' && computerChoice === 'rock') ||
				(userChoice === 'spock' && computerChoice === 'scissors') ||
				(userChoice === 'lizard'  && computerChoice === 'spock') ||
				(userChoice === 'lizard'  && computerChoice === 'paper')) {
				 prompt('You win!');
		} else if ((userChoice === 'rock' && computerChoice === 'paper') ||
							 (userChoice === 'rock' && computerChoice === 'spock') ||
							 (userChoice === 'paper' && computerChoice === 'scissors') ||
							 (userChoice === 'paper' && computerChoice === 'lizard') ||
							 (userChoice === 'scissors' && computerChoice === 'rock') ||
							 (userChoice === 'scissors' && computerChoice === 'spock') ||
							 (userChoice === 'spock' && computerChoice === 'lizard') ||
							 (userChoice === 'spock' && computerChoice === 'paper') ||
							 (userChoice === 'lizard' && computerChoice === 'scissors') ||
							 (userChoice === 'lizard' && computerChoice === 'rock')) {
								prompt('Computer wins!');
		} else {
			prompt("It's a tie!");
		}
}

while (true) {
	// Ask the user to choose one of rock, paper, or scissors
	prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
	let choice = readline.question();

	while (!VALID_CHOICES.includes(choice)) {
		prompt("That's not a valid choice...");
		choice = readline.question();
	}

	// randomly choose from rock, paper, or scissors
	let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
	let randomChoice = VALID_CHOICES[randomIndex];

	prompt(`You chose ${choice}, the computer chose ${randomChoice}`);
	displayWinner(choice, randomChoice)

	prompt('Would you like to play again (y/n)?');
	let answer = readline.question().toLowerCase();
	while (answer[0] !== 'n' && answer[0] !== 'y') {
		prompt('Please enter "y" or "n".');
		answer = readline.question().toLowerCase();
	}

	if (answer[0] !== 'y') break;
}
