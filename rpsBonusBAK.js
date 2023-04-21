
// set gllbal variables 
const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const resultsObject = {
	user: 0,
	computer: 0,
}

// use a nice prompt
function prompt(message) {
	console.log(`=> ${message}`);
}

// returns string item from VALID_CHOICES array, whether the user enters
// the full choice name, or a substring of the choice string.
function returnInputAsChoice(userChoice) {
	for (let i = 0; i < VALID_CHOICES.length; i++) {
		if (VALID_CHOICES[i].startsWith(userChoice)) {
			return VALID_CHOICES[i];
		} else if (VALID_CHOICES[i] === userChoice) {
			return userChoice;
		}
	}
}

// updates the resultsObject with the round scores
function updateResultsObject(resultStr) {
	if (resultStr === 'You win!') {
		resultsObject.user += 1;
	} else if (resultStr === 'Computer wins!') {
		resultsObject.computer +=1;
	} 
}

// returns a string depending on whether user or computer reaches a running score of 3
function returnGrandWinner(results) {
	if (results.user === 3 && results.computer < 3) {
		return 'user';
	} else if (results.user < 3 && results.computer === 3) {
		return 'computer'; 
	} else {
		return 'no grand winner';
	}
}

// resets the score values in the resultsObject to zero
function resetResultsObject() {
	resultsObject.user = 0;
	resultsObject.computer = 0;
}

// function to determine the winner
function returnWinner(userChoice, computerChoice) {
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
				return 'You win!';
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
								return 'Computer wins!';
		} else {
				return "It's a tie!";
		}
}

console.log('Welcome to Rock, Paper, Scissors, Spock, Lizard! \nYou have 5 rounds, and a score of 3 wins the game!!');

while (true) {
	prompt(`Choose one: ${VALID_CHOICES.join(', ')}.\nYou can shorten your input to one letter (or the first two letters for scissors/spock):`);
	let userInput = readline.question();
	let choice = returnInputAsChoice(userInput);
	
	while (!VALID_CHOICES.includes(choice)) {
		prompt("That's not a valid choice...");
		userInput = readline.question();
		let choice = returnInputAsChoice(userInput);
	}

	// randomly choose rock, paper, scissors, lizard, or spock
	let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
	let randomChoice = VALID_CHOICES[randomIndex];

	prompt(`You chose ${choice}, the computer chose ${randomChoice}`);
	let winnerResult = returnWinner(choice, randomChoice);
	prompt(winnerResult);
	updateResultsObject(winnerResult);
	prompt(`User score: ${resultsObject.user} | Computer score: ${resultsObject.computer}`);

	let grandWinnerResult = returnGrandWinner(resultsObject);
	if (grandWinnerResult !== 'no grand winner') {
		prompt(`The grand winner is the ${grandWinnerResult}!`);
		resetResultsObject();
		console.clear();
		prompt('Do you want to start a new match (y/n)?');
		let matchAnswer = readline.question().toLowerCase();
		while (matchAnswer[0] !== 'y' && matchAnswer[0] !== 'y') {
			prompt('Please enter "y" or "n".');
			matchAnswer = readline.question().toLowerCase();
		}
		if (matchAnswer[0] !== 'y') {
			console.log('Thanks for playing!');
			break;
		}
	} else {
			prompt('Play the next round (y) or exit the game (n)?');
			let answer = readline.question().toLowerCase();
			while (answer[0] !== 'n' && answer[0] !== 'y') {
				prompt('Please enter "y" or "n".');
				answer = readline.question().toLowerCase();
			}
	}
}