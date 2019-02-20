// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (var i=1; i<=n; i++) {
//     var string = "";
//     var j=0;
//     for (j; j<i; j++) {
//       string += "#";
//     }
//     for (j; j<n; j++) {
//       string += " ";
//     }
//     console.log(string);
//   }
// }

function steps(n) {
  for (var i=1;i<=n;i++) {
    var stringArr = new Array(n).fill(" ");
    for (var j=0; j<i; j++) {
      stringArr[j] = "#";
    }
    console.log(stringArr.join(""));
  }
}

module.exports = steps;