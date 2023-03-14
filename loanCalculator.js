// greet the user
// ask user for loan amount
// ask user for monthly/annual percentage rate
// ask user for loan duration (in months)
// calculate the monthly interest rate
// calculat loan duration in months
// print results to the terminal

// import libraries
const readline = require('readline-sync');
const msg = require('./loanCalculator_msg.json');

// helper functions
function prompt(message) {
	console.log(`-> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidDuration(number) {
	let loanMonth = Number(number) * 12;
	return (loanMonth < 0 || loanMonth >= 360);
}

function loanCalculator(loanAmount, interestRate, loanMonth) {
	let loanDuration = loanMonth * 12;
	let annualInterestRate = interestRate/100;
	let monthlyInterestRate = annualInterestRate/12;
	let m = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));
  return m;
}

// user input and processing
prompt(msg.welcome);
while (true) {
	// get total loan amount value from user
	prompt(msg.questionLoanAmount);
	let loanAmount = readline.question();

	while (invalidNumber(loanAmount)) {
		prompt(msg.invalidNumber);
		loanAmount = readline.question();
	}

	// get loan interest rate value from user
	prompt(msg.questionInterestRate);
	let interestRate = readline.question();

	while (invalidNumber(interestRate)) {
		prompt(msg.invalidNumber);
		interestRate = readline.question();
	}

	// get loan duration value from user
	prompt(msg.questionLoanDuration);
	let loanDuration = readline.question();

	// while (invalidNumber(loanDuration)) {
	// 	prompt(msg.invalidNumber);
	// 	loanDurationNumber = readline.question();
	// }

	while (invalidDuration(loanDuration)) {
		prompt(msg.invalidDuration);
		loanDuration = readline.question();
	}

	monthlyPayment = loanCalculator(loanAmount, interestRate, loanDuration);
	prompt(`Calculated monthly payment: $${monthlyPayment.toFixed(2)}`);

	prompt('---------------------------------------\n');
  prompt(msg.anotherCalc);
  let cont = readline.question();
  if (cont !== 'y') break;
}