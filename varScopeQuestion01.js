let num = 5;

function myFunc() {
  num = 10;
}

myFunc();
console.log(num);

// this code will log 10 (based on line 8). The myFunc function does not log anything, but it reassigns the global variable of num to 10.