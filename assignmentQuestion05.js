function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

/* Answer: Logs ['Hello', 'Goodbye'], then ['Hello', 'Goodbye'].
The function logs the argument values, then mutates the argument, but it does not return it. */