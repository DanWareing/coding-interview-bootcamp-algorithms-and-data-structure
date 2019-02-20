// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let arr = [];
  for (var i=1; i<=n; i++) {
    arr.push(new Array(n));
  }

  for (var j=1; j<=n*n; j++) {
    let offset=0;
    while (offset<arr.length && !addNumber(j, arr, offset)) {
      offset++;
    }
  }

  return arr;
}

function addNumber(value, array, offset) {
  let x=0+offset;
  let y=0+offset;
  let width = array.length-(1+offset);

  // Work right
  for (x;x<width;x++) {
    if (y<=width && x<=width && !array[y][x]) {
      array[y][x] = value;
      return array;
    }
  }

  // Work down
  for (y;y<width;y++) {
    if (y<=width && x<=width && !array[y][x]) {
      array[y][x] = value;
      return array;
    }
  }

  // Work left
  for (x;x>0;x--) {
    if (y<=width && x<=width && !array[y][x]) {
      array[y][x] = value;
      return array;
    }
  }

  // Work up
  for (y;y>0;y--) {
    if (y<=width && x<=width && !array[y][x]) {
      array[y][x] = value;
      return array;
    }
  }

}

module.exports = matrix;