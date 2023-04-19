let num = 5;

function myFunc() {
  console.log(num);
  let num = 10;
}

myFunc();
console.log(num);

// My answer:
// The code will log 5 (which has been passed in as an argument to the function), however, there should be an error because 
// the function is re-initializing the num variable as opposed to reassigning it.

// Real answer:
// This won't log anything to the console. Instead, this code will raise a ReferenceError. The let declaration on line 5 creates a 
// new num variable within the scope of the body of the myFunc function. The console.log on line 4 is attempting to log the value 
// of that num variable, not the one declared and initialized on line one. Since the variable hasn't been initialized yet however, 
// we get a reference error.