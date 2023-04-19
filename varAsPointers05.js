let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords);
console.log(myWord);

/* My answer: 
			logs "['Hi', 'Goodbye']" then ['Hello']
*/