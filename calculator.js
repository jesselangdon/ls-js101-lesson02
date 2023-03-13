// greet the user
// ask user for first number
// ask user for second number
// ask user for type of operation to perform
// perform the operation on the numbers
// print operation result to the terminal

const readline = require('readline-sync');
const msg = require('./calculator_msg.json');

function prompt(message) {
  console.log(`-> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(msg.welcome);
while (true) {
  prompt(msg.firstNumber);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(msg.invalidMessage);
    number1 = readline.question();
  }

  prompt(msg.secondNumber);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(msg.invalidMessage);
    number2 = readline.question();
  }

  prompt(msg.operandQuestion);
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(msg.operandTypeQuestion);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result = ${output}`);

  prompt('-----------------------------------------------------');
  prompt(msg.anotherCalc);
  let cont = readline.question();
  if (cont !== 'y') break;
}