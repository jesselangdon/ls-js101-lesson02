function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
myWord = changeMyWord(myWord);
console.log(myWord);

/* Answer: Returns 'Hello', then 'Hello' */

/* According to LS, this is wrong. It should have returned 'HELLO' in the second log, because the function
is returning a value, and assigning that value to a new variable outside of the function. */