let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);

/* Answer: Returns ReferenceError on line 5, since the color argument is not supplied when the
updateColors function is invoked on line 8 (only the first argument is included). Within the scope
of the updateColor function, color is undefined. */

/* My initial answer was wrong. The colors array is mutated by having 'undefined' appended to it. */