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

#### [8] Capitalize
  Given a sentence, capitalize the first letter of each word

#### [9] Steps
  Given an integer, incrementally console.log a new line in order to build a set of steps using hashes and spaces
###### Learnings:
* `.fill()` can populate an array with any value you define

#### [10] Vowels
  Given a string, return a count of the number of vowels
###### Learnings:
* `.match()` returns an array of all characters matching the given RegEx

#### [11] Matrix
  Given a number, create an array of arrays that draws a spiralled square counting up to that value

#### [12] Fibonacci Sequence
  Given a number, return the value from that index in the Fibonacci sequence
###### Learnings:
* Recursion isn't as scary as it sounds
* The recursive option is exponential time, and quickly spirals because there's no cached value as it calculates
* Memoization is the process of caching the values if the function has already been run with the same params

...

### [16] Linked Lists
  To-do
##### Learnings:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

### [17] Midpoint
  Given a linked list, return the middle value without using a counter or iterating over the list more than once
##### Learnings:
* N/a

### [18] Circular
  Given a linked list, return true if one of the nodes references a previous node
##### Learnings:
* Optimal solution to a tricky problem

### [19] From Last
  Given a linked list, return the node that is _n_ away from the end of the linked list
##### Learnings:
* N/a

### [20] Tree
  Implement a tree
##### Learnings:
* Optimal solution to a tricky problem
* The spread operator `...` can effectively function as a for loop over a collection

### [21] Tree Width Counter
  Return an array of numbers that describes the width of a tree at each level
##### Learnings:
* Optimal solution to a tricky problem, any mention of width should indicate a breadth-first approach

### [22] Binary Trees
  Create binary search tree functionality for insertion and validation
##### Learnings:
* Optimal solution to a tricky problem