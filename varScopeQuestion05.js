let num = 5;

function myFunc(num) {
  num = 10;
}

myFunc();
console.log(num);

/* My answer: This code should just log '10' once. The function reassigns the global num variable to 10, then logs that 
reassigned variable on the last line. */

/* LS answer: This logs 5 to the console. When the myFunc function is invoked, due to the function parameter num, JS
creates a new variable num within the scope of the function. This variable blocks access to the variable of the same name 
declared and initialized in the global scope on line 1. That variable cannot therefore be reassigned by the function and 
so retains its initial value of 5, which is what is logged. */