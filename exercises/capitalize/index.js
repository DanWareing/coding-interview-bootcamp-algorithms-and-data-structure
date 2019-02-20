// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   let array = str.split(" ");
//   for (var i in array) {
//     array[i] = array[i].charAt(0).toUpperCase() + array[i].substring(1,array[i].length);
//   }
//   return array.join(" ");
// }

function capitalize(str) {
  const words = [];
  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(" ");
}

module.exports = capitalize;
