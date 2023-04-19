let num = 5;

function myFunc() {
  console.log(num);
  num = 10;
}

myFunc();
console.log(num);

// This code will log 5, then log 10. In the myFunc function, it's logging the value of the global num variable, then it reassigns
// it to 10. 