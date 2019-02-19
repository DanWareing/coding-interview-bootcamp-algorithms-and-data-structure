// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//   const charMapA = buildCharMap(stringA);
//   const charMapB = buildCharMap(stringB);
//   for (let key in charMapA) {
//     if (!charMapB.hasOwnProperty(key) || charMapB[key] !== charMapA[key]) {
//       return false;
//     } else {
//       delete charMapB[key];
//     }
//   }
//   return Object.keys(charMapB).length === 0;
// }

// function buildCharMap(givenString) {
//   const charMap = {};
//   for (let char of givenString.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char]+1 || 1;
//   }
//   return charMap;
// }

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(givenString) {
  return givenString.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
