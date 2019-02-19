# AlgoCasts

Companion repo to a course on Udemy.com

#### [1] Reverse String
  Given a string, return it reversed
###### Learnings:
* Whilst String has no 'reverse' function, arrays do
* Arrays can be re-combined using 'join'
* 'Reduce' will execute a provided function on each member of an array, outputting a single value

#### [2] Palindrome
  Given a string, return true if it is the same value when reversed

#### [3] Reverse Integer
  Given an integer, return it reversed (with the same positive/ negative sign)
###### Learnings:
* 'Math.sign' will return -1 or 1 based on whether the given integer is positive or negative
* Javascript has the expected 'parseInt' and 'toString' functions

#### [4] Max Char
  Given a string, create a character map and return the most-frequently used character
###### Learnings:
* `for` loops on arrays, `in` loops on objects
* You can use the OR (||) operator to catch 'false' assignments, such as in `chars[char] = chars[char]+1 || 1;`

#### [5] FizzBuzz
  Given an integer, count up to it and print each number, unless it's divisible by three and/ or five

#### [6] Chunk
  Given an array of numbers, and a 'size' integer, break the array down into chunks of the given size
###### Learnings:
* `.slice()` can get you a section of an array given a start index
* `.splice()` can remove a section of an array given a start index

#### [7] Anagrams
  Given two strings, get the alphanumeric values and return true if they are anagrams of each other
###### Learnings:
* `.sort()` can be used in this instance to 'group' identical characters together in a reliable order, ready for comparison