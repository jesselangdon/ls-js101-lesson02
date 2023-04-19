let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords);
console.log(myOtherWords);

/* My answer:
				['Hi', 'Bye']
				['Hi', 'Bye']

   LS answer:
	 			[ 'Hi', 'Bye' ]
				[ 'Hello', 'Goodbye' ]
*/

