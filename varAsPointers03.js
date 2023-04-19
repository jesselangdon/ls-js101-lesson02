let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);
console.log(myOtherWords);

/* My answer:
						['Hi', 'Goodbye']
						['Hi', 'Goodbye']
*/