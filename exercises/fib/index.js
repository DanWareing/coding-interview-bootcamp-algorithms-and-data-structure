// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative solution, linear time
// function fib(n) {
//   let arr = [1,1];
//   for (var i=0; i<n; i++) {
//     if (i>1) {
//       arr.push(arr[i-1]+arr[i-2]);
//     }
//     if (arr.length > n) break;
//   }
//   return arr[n-1];
// }

// Recursive solution, own
// function fib(n) {
//   if (n === 1 || n === 2) {
//     return 1;
//   } else {
//     return fib(n-1) + fib(n-2);
//   }
// }

// Recursive solution, given, exponential time
// function fib(n) {
//   if (n<2) {
//     return n;
//   }
//   return fib(n-1) + fib(n-2);
// }

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  }
}

function slowFib(n) {
  if (n<2) {
    return n;
  }
  return fib(n-1) + fib(n-2);
}

const fib = memoize(slowFib);

module.exports = fib;