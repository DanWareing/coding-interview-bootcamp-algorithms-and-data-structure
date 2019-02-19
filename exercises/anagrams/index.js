// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

  const cleanA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const charMapA = {};
  for (let char of cleanA) {
    charMapA[char] = charMapA[char]+1 || 1;
  }

  const cleanB = stringB.replace(/[^\w]/g, "").toLowerCase();
  const charMapB = {};
  for (let char of cleanB) {
    charMapB[char] = charMapB[char]+1 || 1;
  }

  for (let key in charMapA) {
    if (!charMapB.hasOwnProperty(key) || charMapB[key] !== charMapA[key]) {
      return false;
    } else {
      delete charMapB[key];
    }
  }
  for (let key in charMapB) {
    if (!charMapA.hasOwnProperty(key) || charMapA[key] !== charMapB[key]) {
      return false;
    }
  }
  return true;

}

module.exports = anagrams;
