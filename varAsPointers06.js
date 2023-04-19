let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords);
console.log(myWord);

/* My answer: logs ['Hi', 'Goodbye'] then 'Hello' */