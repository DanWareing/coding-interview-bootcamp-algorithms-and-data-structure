// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  var width = 1+((n-1)*2);
  for (var i=0;i<n;i++) {
    var stringArr = new Array(width).fill(" ");
    stringArr[Math.floor(stringArr.length/2)] = "#";
    if (i>0) {
      for (var j=0;j<=i;j++) {
        stringArr[Math.floor(stringArr.length/2)+j] = "#";
        stringArr[Math.floor(stringArr.length/2)-j] = "#";
      }
    }
    console.log(stringArr.join(""));
  }
}

module.exports = pyramid;
