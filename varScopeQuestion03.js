let num = 5;

function myFunc() {
  let num = 10;
}

myFunc();
console.log(num);

// This code will log the number 5. The num variable within the function is a different variable then the num
// variable at the outer scope. The final line of the code logs the global variable's value (5).