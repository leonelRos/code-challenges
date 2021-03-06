function multiply(a, b) {
  if (a < 0 && b > 0) {
    return b * a
  }
  return a - b;
}

console.log(multiply(-5, 4));
console.log(multiply(10, 6));
console.log(multiply(9, 7));


function getCount(str) {
  var vowelsCount = 0;
  var vowel_list = 'aeiou';
  for (x = 0; x < str.length; x++) {
    if (vowel_list.indexOf(str[x]) !== -1)
      vowelsCount += 1
  }
  return vowelsCount;
}
console.log(getCount('this is it'));
console.log(getCount('what are you talking about'));


// const arr =[1,2,3,4];

// for( let i = 0; i < arr.length; i++) {
//   sum = i += arr.length
// console.log(sum)
// }

// function titleCase (title, minorWords){
//   if(!title) return ' '
//   minorWords = minorWords ? minorWords.toLowerCase().split(' ') : []
//     return title.toLowerCase().split(' ').map((e,i) => {
//       if(i==0|| !minorWords.includes(e)) return e.replace(e[0],e[0].toUpperCase())
//       return e;
//     })
// }
//   join(' ');


var cubes = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (var i = 0; i < cubes.length; i++) {
  var cube = cubes[i];
  for (var j = 0; j < cube.length; j++) {
    display("cube[" + i + "][" + j + "] = " + cube[j]);
  }
}



// Question 1:
// - Write a recursive JavaScript function to calculate the factorial of a number.
// - In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 
let finalRes = 1

function fact(num) {
  if (num > 0) {
    finalRes = finalRes * num;
    fact(num - 1)
  }
  return finalRes
}
console.log(fact(7));

// - Write a recursive JavaScript function to find the greatest common divisor (gcd) of two positive numbers.

function divy(a, b) {
  if (a % b === 0) {

    return b;
  } else {
    b = a % b;
    return divy(a, b)
  }
}

console.log(divy(27, 18))

function gcd(x, y) {
  return y == 0 ? x : gcd(y, x % y)
}
console.log(gcd(27, 18))


var arr = [];

function range(a, b) {
  if (a < b - 1) {
    arr.push(a + 1);
    return range(a + 1, b);
  } else {
    return arr;
  }
}
// range(2,9);
console.log(range(2, 9));


function srting(str) {
  result = [];
  str = str.split(' ');
  for (i = 1; i <= str.length; i++) {
    str.forEach(x => x.includes(i) ? result.push(x) : console.log(x))
  }
  return result.join(' ')
}
// return result.join('');


console.log(srting('2the be5st'));
console.log(srting('1good d6ay 3three'));


// Challenge: 03-sumNumbers

// Difficulty: Basic  

// Prompt:

// - Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
// - If the array is empty, return 0 (zero).

// Examples:

// sumNumbers([10]) //=> 10
// sumNumbers([5, 10]) //=> 15
// sumNumbers([2, 10, -5]) //=> 7
// sumNumbers([]) //=> 0
// -----------------------------------------------------------------*/
// Your solution for 03-sumNumbers here:
function sumNumbers(arr) {
  let a = 0;
  for (i = 0; i < arr.length; i++)
    a += arr[i];
  return a;
}
console.log(sumNumbers([10, 2, 5]));

// Challenge: 04-addList

// Difficulty: Basic

// Prompt:

// - Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum.
// - Assume all parameters will be numbers.
// - If called with no arguments, return 0 (zero).

// Examples:

// add(1) //=> 1
// add(1,50,1.23) //=> 52.23
// add(7,-12) //=> -5

function addList() {
  var sum = 0
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(addList(2, 78));

/*-----------------------------------------------------------------
Challenge: 05-computeRemainder

Difficulty: Basic

Prompt:

- Write a function named computeRemainder that accepts two numeric arguments and returns the remainder of the division of those two numbers.
- The first argument should be the dividend and the second argument should be the divisor.
- If a 0 is passed in as the second argument you should return JavaScript's special numeric value: Infinity.
- For extra fun, complete this challenge without using the modulus (%) operator.

Examples:

computeRemainder(10,2) //=> 0
computeRemainder(4,0) //=> Infinity
computeRemainder(10.5, 3) //=> 1.5
-----------------------------------------------------------------*/
// Your solution for 05-computeRemainder:

// function computeRemainder(a , b){
// var div = 0
// div = a % b
// if(b === Infinity){
//   return 'lets call Infinity'
// }
// return div
// }

function computeRemainder(dividend, divisor) {
  if (divisor === 0) return Infinity;
  return dividend - (Math.floor(dividend / divisor) * divisor);
}
console.log(computeRemainder(10, 5));
console.log(computeRemainder(15, 7));
console.log(computeRemainder(19, 0));

// - Write a function called formatWithPadding that accepts three arguments:
//     - A numeric argument (an integer) representing the number to format.
//     - A string argument (a single character) representing the character used to "pad" the returned string to a minimum length.
//     - Another numeric argument (an integer) representing the length to "pad" the returned string to.
//   - The function should return the integer as a string, "left padded" to the length of the 3rd arg using the character provided in the 2nd arg.
//   - If the length of the integer converted to a string is equal or greater than the 3rd argument, no padding is needed - just return the integer as a string.

//   Examples:

// formatWithPadding(123, '0', 5); //=> "00123"
// formatWithPadding(42, '*', 10); //=> "********42"
// formatWithPadding(1234, '*', 3); //=> "1234"
// Your solution for 10-formatWithPadding here:

function formatWithPadding(num, string, num2) {

}
// this is a new challenge!!
function diag(arr) {
  let m = arr.length - 1;
  let idx1 = m;
  let n = arr.length - 1;
  let idx2 = n;
  let newArr = [];
  for (idx1; idx1 >= 0; idx1--) {
    let check = idx1;
    while (idx2 >= 0 && idx1 <= m) {
      console.log(arr[idx1][idx2]);
      newArr.push(arr[idx1][idx2]);
      idx1++;
      idx2--;
    }
    idx1 = check;
    idx2 = n;
  }
  idx1 = 0;
  for (idx2 = n - 1; idx2 >= 0; idx2--) {
    check = idx2;
    while (idx2 >= 0 && idx1 <= n) {
      console.log(arr[idx1][idx2]);
      newArr.push(arr[idx1][idx2]);
      idx1++;
      idx2--;
    }
    idx2 = check;
    idx1 = 0;
  }

  return newArr;
}

let testArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(diag(testArr));


// another challenge
const arr = [1, 2, 3, 4];


// for( let i = 0; i < arr.length; i++) {
//   sum = i += arr.length
// console.log(sum)
// }

// function titleCase (title, minorWords){
//   if(!title) return ' '
//   minorWords = minorWords ? minorWords.toLowerCase().split(' ') : []
//     return title.toLowerCase().split(' ').map((e,i) => {
//       if(i==0|| !minorWords.includes(e)) return e.replace(e[0],e[0].toUpperCase())
//       return e;
//     })
// }
//   join(' ');


var cubes = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (var i = 0; i < cubes.length; i++) {
  var cube = cubes[i];
  for (var j = 0; j < cube.length; j++) {
    display("cube[" + i + "][" + j + "] = " + cube[j]);
  }
}
// learning curr in JS below
var greetCurried = function (greeting) {
  return function (name) {
    console.log(greeting + ', ' + name);
  }
}
var greetHello = greetCurried("hello");
greetCurried("hi there")("lauren")
greetHello('Heidi');
greetHello('Eddie');
var greetDeeplyCurried = function (greeting) {
  return function (separator) {
    return function (emphasis) {
      return function (name) {
        console.log(greeting + separator + name + emphasis);
      }
    }
  }
}
var greetAwkwardly = greetDeeplyCurried("hello")("...")("?");
greetAwkwardly("heidi");
greetAwkwardly("EDDIE");
var greetHi = greetDeeplyCurried("hello")(", ");
greetHi(".")("eddie");
greetHi(".")("heidi");
// Above is just a little syntax to keep on practicing!!!


//practice LINKED LIST
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//EXAMPLE: 
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

var addTwoNumbers = function (l1, l2) {
  var newList = new ListNode("head");
  var resultList = newList;
  var carry = 0;
  while (l1 || l2 || carry) {
    const v1 = l1 ? l1.val : 0
    const v2 = l2 ? l2.val : 0
    const v = v1 + v2 + carry

    resultList.next = new ListNode(v % 10) //using ( % 10 is to obtain the first value)
    resultList = resultList.next;
    carry = v >= 10 ? 1 : 0
    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }
  return newList.next
}
console.log(addTwoNumbers(l1, l2));

// Given a string, find the length of the longest substring without repeating characters.
var lengthOfLongestSubstring = function (s) {
  var res = 0;
  var tem = [];
  for (var char of s) {
    var idx = tem.indexOf(char);
    if (idx > -1) {
      tem = tem.slice(idx + 1)
    }
    tem.push(char);
    if (tem.length > res) {
      res = tem.length
    }
  }
  return res;

};

/*-----------------------------------------------------------------
 Challenge: 08-removeEnds
 
 Difficulty: Basic
 
 Prompt:
 
 - Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
 - If the length of the string argument is less than 3, return an empty string.
 
 Examples:
 
 removeEnds('SEI Rocks!'); //=> "DI Rocks"
 removeEnds('a'); //=> "" (empty string)
 -----------------------------------------------------------------*/
// Your solution for 08-removeEnds here:

function removeEnds(string) {
  let arr = string.split('')
  let remove = ''
  if (arr.length < 3) {
    return ''
  } else {
    newArr = arr.slice(1, -1)
    remove = newArr.join('')
  }
  return remove;
}



/*-----------------------------------------------------------------
Challenge: 09-charCount

Difficulty: Basic

Prompt:

- Write a function named charCount that accepts a single string argument and returns an object that represents the count of each character in the string.
- The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.
- Upper and lower case characters should be counted separately.
- Space characters should be count too.

Examples:

charCount('hello') //=> { h: 1, e: 1, l: 2, o: 1 }
charCount('Today is fantastic!') //=> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }
-----------------------------------------------------------------*/
// Your solution for 09-charCount here:

function charCount(string) {
  let count = {}
  for (i = 0; i < string.length; i++) {
    var char = string.charAt(i);
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1
    }
  }
  return count
}

/*-----------------------------------------------------------------
Challenge: 10-formatWithPadding

Difficulty: Basic

Prompt:

- Write a function called formatWithPadding that accepts three arguments:
  - A numeric argument (an integer) representing the number to format.
  - A string argument (a single character) representing the character used to "pad" the returned string to a minimum length.
  - Another numeric argument (an integer) representing the length to "pad" the returned string to.
- The function should return the integer as a string, "left padded" to the length of the 3rd arg using the character provided in the 2nd arg.
- If the length of the integer converted to a string is equal or greater than the 3rd argument, no padding is needed - just return the integer as a string.

Examples:

formatWithPadding(123, '0', 5); //=> "00123"
formatWithPadding(42, '*', 10); //=> "********42"
formatWithPadding(1234, '*', 3); //=> "1234"
-----------------------------------------------------------------*/
// Your solution for 10-formatWithPadding here:

/*--- Using for while loop ---*/
function formatWithPadding(int, char, length) {
  var result = int.toFixed(0);
  while (result.length < length) {
    result = char + result;
  }
  return result;
}

/*-----------------------------------------------------------------
Challenge: 11-isPalindrome

Difficulty: Intermediate

Prompt:

- Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
- A palindrome is a word or phrase that are the same forward or backward.
- Casing and spaces are not included when considering whether or not a string is a palindrome.
- If the length of the string is 0 or 1, return true.

Examples:

isPalindrome('SEI Rocks'); //=> false
isPalindrome('rotor'); //=> true
isPalindrome('A nut for a jar of tuna'); //=> true
isPalindrome(''); //=> true
-----------------------------------------------------------------*/
// Your solution for 11-isPalindrome here:

/*--- Using a for loop ---*/
function isPalindrome(str) {
  str = str.toLowerCase();
  // loop to replace spaces
  while (str.includes(' ')) str = str.replace(' ', '');
  for (var i = 0; i < Math.floor(str.length / 2); i++) {
    if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false;
  }
  return true;
}

/*--- Using regular expression to replace spaces ---*/
// function isPalindrome(str) {
//   // regular expression to replace all spaces
//   str = str.toLowerCase().replace(/ /g, '');
//   for (var i = 0; i < Math.floor(str.length / 2); i++) {
//     if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false;
//   }
//   return true;
// }

/*-----------------------------------------------------------------
Challenge: 12-hammingDistance

Difficulty: Intermediate

Prompt:

In information theory, the hamming distance refers to the count of the differences between two strings of equal length.  It is used in computer science for such things as implementing "fuzzy search"  capability.

- Write a function named hammingDistance that accepts two arguments which are both strings of equal length.
- The function should return the count of the symbols (characters, numbers, etc.) at the same position within each string that are different.
- If the strings are not of the same length, the function should return NaN.

Examples:

hammingDistance('abc', 'abc'); //=> 0
hammingDistance('a1c', 'a2c'); //=> 1
hammingDistance('!!!!', '****'); //=> 4
hammingDistance('abc', 'ab'); //=> NaN
-----------------------------------------------------------------*/
// Your solution for 12-hammingDistance here:

function hammingDistance(s1, s2) {
  if (s1.length !== s2.length) return NaN;
  var count = 0;
  for (var i = 0; i < s1.length; i++) {
    if (s1.charAt(i) !== s2.charAt(i)) count++;
  }
  return count;
}

/*-----------------------------------------------------------------
Challenge: 13-mumble

Difficulty: Intermediate

Prompt:

- Write a function called mumble that accepts a single string argument.
- The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
- Examples describe it best..

Examples:

mumble('X'); //=> 'X'
mumble('abc'); //=> 'a-bb-ccc'
mumble('121'); //=> '1-22-111'
mumble('!A 2'); //=> '!-AA-   -2222'
-----------------------------------------------------------------*/
// Your solution for 13-mumble here:

function mumble(str) {
  var result = '';
  for (var i = 0; i < str.length; i++) {
    // the ((i || '') && '-') only adds a dash if it's not the first iteration
    result += ((i || '') && '-') + str.charAt(i).repeat(i + 1);
  }
  return result;
}

/*--- convert to array and use reduce (break that one-liner down!) ---*/
// function mumble(str) {
//   return str.split('').reduce((result, c, i) => result + ((i || '') && '-') + c.repeat(i + 1), '');
// }

// Challenge: 14-fromPairs

// Difficulty: Intermediate

// Prompt:

// - Write a function named fromPairs that creates an object from an array containing nested arrays.
// - Each nested array will have two elements representing key/value pairs used to create key/value pairs in an object to be returned by the function.
// - If a key appears in multiple pairs, the rightmost pair should overwrite previous the previous entry in the object.

// Examples:

// fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) //=> { a: 1, b: 2, c: 3 }
// fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ]) //=> { name: "Sally", age: 24 }
// Your solution for 14-fromPairs here:

/*--- using forEach ---*/
function fromPairs(arr) {
  var obj = {};
  arr.forEach(function (kvArr) {
    obj[kvArr[0]] = kvArr[1];
  });
  return obj;
}

/*--- using reduce & arrow function ---*/
// function fromPairs(arr) {
//   return arr.reduce((obj, kvArr) => {
//       obj[kvArr[0]] = kvArr[1];
//       return obj;
//   }, {});
// }

/*-----------------------------------------------------------------
Challenge: 15-mergeObjects

Difficulty:  Intermediate

Prompt:

- Write a function named mergeObjects that accepts at least two objects as arguments, merges the properties of the second through n objects into the first object, then finally returns the first object.
- If any objects have the same property key, values from the object(s) later in the arguments list should overwrite earlier values.

Examples:

mergeObjects({}, {a: 1});  //=> {a: 1} (same object as first arg)
mergeObjects({a: 1, b: 2, c: 3}, {d: 4});  //=> {a: 1, b: 2, c: 3, d: 4}
mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44});  //=> {a: 1, b: 22, c: 3, d: 44}
-----------------------------------------------------------------*/
// Your solution for 15-mergeObjects here:

/*--- Using ES2015's rest parameter syntax ---*/
function mergeObjects(target, ...objects) {
  objects.forEach(function (obj) {
    // using ES2015's 'for in' loop
    for (var key in obj) {
      target[key] = obj[key];
    }
  });
  return target;
}
/*-----------------------------------------------------------------
Challenge: 16-findHighestPriced

Difficulty:  Intermediate  

Prompt:

- Write a function named findHighestPriced that accepts a single array of objects.
- The objects contained in the array are guaranteed to have a price property holding a numeric value.
- The function should return the object in the array that has the largest value held in the price property.
- If there's a tie between two or more objects, return the first of those objects in the array.
- Return the original object, not a copy.

Examples:

findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 5 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
//=> { sku: 'c3', price: 50 } 

findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 50 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
]);
//=> { sku: 'b2', price: 50 }
-----------------------------------------------------------------*/
// Your solution for 16-findHighestPriced here:

function findHighestPriced(arr) {
  var highestPrice = 0;
  var resultObj;
  arr.forEach(function (item) {
    if (item.price > highestPrice) {
      highestPrice = item.price;
      resultObj = item;
    }
  });
  return resultObj;
}

/*--- using the reduce Array method ---*/
// function findHighestPriced(arr) {
//   return arr.reduce((highest, item) => item.price > highest.price ? item : highest);
// }

/*-----------------------------------------------------------------
Challenge: 17-mapArray

Difficulty:  Intermediate

Prompt:

The goal is of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.map method.

- Write a function named mapArray that accepts two arguments: a single array and a callback function.
- The mapArray function should return a new array of the same length as the array argument.
- The mapArray function should iterate over each element in the array (first arg).  For each iteration, invoke the callback function (2nd arg), passing to it as arguments, the current element and its index.  Whatever is returned by the callback function should be included in the new array at the index of the current iteration.

Examples:

mapArray( [1, 2, 3], function(n) {
  return n * 2;
} );
//=> [2, 4, 6]  (a new array)

mapArray( ['rose', 'tulip', 'daisy'], function(f, i) {
  return `${i + 1} - ${f}`;
} );
//=> ["1 - rose", "2 - tulip", "3 - daisy"]
-----------------------------------------------------------------*/
// Your solution for 17-mapArray here:

function mapArray(arr, cb) {
  var newArr = [];
  arr.forEach(function (el, idx) {
    newArr.push(cb(el, idx));
  });
  return newArr;
}
/*-----------------------------------------------------------------
Challenge: 18-reduceArray

Difficulty:  Intermediate

Prompt:

The goal is of this challenge is to write a function that performs the functionality of JavaScript's Array.prototype.reduce method.

- Write a function named reduceArray that accepts three arguments: (1) an array; (2) a callback function; and (3) a value used as the initial value of the "accumulator".
- The reduceArray function should return whatever is returned by the callback function on the last iteration.
- The reduceArray function should iterate over each element in the array (first arg).  For each iteration, invoke the callback function (2nd arg), passing to it three arguments: (1) the "accumulator", which is the value returned by the callback during the previous iteration; (2) the  current element; and (3) the index of the current iteration.
- On the first iteration, provide the third argument provided to reduceArray as the first argument when invoking the callback, then for subsequent iterations, provide the value returned by the callback during the previous iteration.

Examples:

reduceArray( [1, 2, 3], function(acc, n) {
  return acc + n;
}, 0);
//=> 6

reduceArray( [1, 2, 3], function(acc, n, i) {
  return acc + n + i;
}, 0);
//=> 9

reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
  acc[v] = acc[v] ? acc[v] + 1 : 1;
  return acc;
}, {} );
//=> {"Yes": 2, "No": 1, "Maybe": 1}
-----------------------------------------------------------------*/
// Your solution for 18-reduceArray here:

function reduceArray(arr, cb, initAcc) {
  var acc = initAcc;
  arr.forEach(function (el, idx) {
    acc = cb(acc, el, idx);
  });
  return acc;
}

/*-----------------------------------------------------------------
Challenge: 19-flatten

Difficulty:  Intermediate

Prompt:

- Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
- A flattened array is an array that contains no nested arrays.
- Arrays maybe nested at any level.
- If any of the arrays have duplicate values those duplicate values should be present in the returned array.
- The values in the new array should maintain their ordering as shown in the examples below.

Hint:

- This assignment provides an excellent opportunity to use recursion (a function that calls itself).  It can also be solved by using an inner function.

Examples:

flatten( [1, [2, 3]] );
//=> [1, 2, 3]  (a new array) 

flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
//=> [1, 2, 3, 4, 1, 'a', 'b', 'c']
-----------------------------------------------------------------*/
// Your solution for 19-flatten here:

/*--- Using recursion ---*/
function flatten(arr) {
  var flatArr = [];
  arr.forEach(function (elem) {
    // use the Array.isArray static method to test if an array
    if (Array.isArray(elem)) {
      flatArr = flatArr.concat(flatten(elem));
    } else {
      flatArr.push(elem);
    }
  });
  return flatArr;
}

/*--- Using recursion and inline ternary for conciseness ---*/
// function flatten(arr) {
//   var flatArr = [];
//   arr.forEach(function(elem) {
//     flatArr = flatArr.concat(Array.isArray(elem) ? flatten(elem): elem);
//   });
//   return flatArr;
// }

/*--- Use reduce and  recursion for a one-liner ---*/
// function flatten(arr) {
//   return arr.reduce((flatArr, elem) => flatArr.concat(Array.isArray(elem) ? flatten(elem): elem), []);
// }

/*-----------------------------------------------------------------
Challenge: 20-isPrime

Difficulty: Intermediate

Prompt:

- Write a function named isPrime that returns true when the integer argument passed to it is a prime number and false when the argument passed to it is not prime.
- A prime number is a whole number (integer) greater than 1 that is evenly divisible by only itself.

Examples:

isPrime(2) //=> true
isPrime(3) //=> true 
isPrime(4) //=> false
isPrime(29) //=> true
isPrime(200) //=> false
-----------------------------------------------------------------*/
// Your solution for 20-isPrime here:

function isPrime(n) {
  if (n < 2 || !Number.isInteger(n)) return false;
  for (var i = 2; i <= n / 2; i++) {
    if (Number.isInteger(n / i)) return false;
  }
  return true;
}

/*-----------------------------------------------------------------
Challenge: 21-primeFactors

Difficulty: Intermediate

Prompt:

Now that you have solved the last challenge of determining if a whole number is prime, let's expand upon that concept to...
- Write a function named primeFactors that accepts a whole number greater than one (1) as an argument and returns an array of that argument's prime factors.
- The prime factors of a whole number are the prime numbers that, when multiplied together, equals the whole number.
- If the argument provided is not greater than 1, or not a whole number, then primeFactors should return an empty array.

Examples:

primeFactors(2) //=> [2]
primeFactors(3) //=> [3]
primeFactors(4) //=> [2, 2]
primeFactors(18) //=> [2, 3, 3]
primeFactors(29) //=> [29]
primeFactors(105) //=> [3, 5, 7]
primeFactors(200) //=> [2, 2, 2, 5, 5]
-----------------------------------------------------------------*/
// Your solution for 21-primeFactors here:

/*--- most logical approach ---*/
function primeFactors(n) {
  var factors = [];
  if (n < 2 || !Number.isInteger(n)) return factors;

  // function to help find next prime to divide by...
  function isPrime(n) {
    if (n < 2 || !Number.isInteger(n)) return false;
    for (var i = 2; i <= n / 2; i++) {
      if (Number.isInteger(n / i)) return false;
    }
    return true;
  }

  var prime = 2; // start with smallest prime
  while (!isPrime(n)) {
    if (Number.isInteger(n / prime)) {
      factors.push(prime);
      n = n / prime;
    } else {
      // find next prime
      prime++;
      while (!isPrime(prime)) prime++;
    }
  }
  factors.push(n);
  return factors;
}

/*-- a more efficient algorithm that relies on the fact
     that you don't have to check if the divisor is prime 
     as shown here:
     https://people.revoledu.com/kardi/tutorial/BasicMath/Prime/Algorithm-PrimeFactor.html ---*/
// function primeFactors(n) {
//   var factors = [];
//   if (n < 2 || !Number.isInteger(n)) return factors;
//   var divisor = 2;
//   while (n >= divisor * divisor) {
//     if (Number.isInteger(n / divisor)) {
//       factors.push(divisor);
//       n = n / divisor;
//     } else {
//       divisor++;
//     }
//   }
//   factors.push(n);
//   return factors;
// }
/*-----------------------------------------------------------------
Challenge: 22-intersection

Difficulty: Intermediate

Prompt:

- Write a function named intersection that accepts two arguments which are both arrays.  The array arguments may contain any mixture of strings, numbers and/or booleans - but no reference types, i.e., objects.
- The function should return a new array containing all elements in common, including repeating element values.
- The ordering of the elements in the returned is not important.
- If there are no elements in the arrays in common,  the intersection function should return an empty array.
- The function should not mutate (change) either argument.

Examples:

intersection(['a', 1], []) //=> []
intersection(['a', 1], [true, 'a', 15]) //=> ['a']
intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) //=> [1, true, 1]
-----------------------------------------------------------------*/
// Your solution for 22-intersection here:

function intersection(a1, a2) {
  var result = [];
  // create copy of 2nd array for purpose of handling dups
  var _a2 = [...a2];
  a1.forEach(val => {
    var idx = _a2.indexOf(val);
    if (idx > -1) result.push(_a2.splice(idx, 1)[0]);
  });
  return result;
}

/*-----------------------------------------------------------------
Challenge: 23-balancedBrackets

Difficulty:  Intermediate

Prompt:

- Write a function called balancedBrackets that accepts a single string as argument.
- The input string is composed entirely of parentheses, brackets and/or curly braces, i.e.,  (), [] and/or {}. Referred to as "braces" from this point forward...
- The balancedBraces function should return true if the string's braces are "balanced" and false if they are not.
- The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them.  Examples explain it best...

Examples:

balancedBrackets( '()' ) // => true
balancedBrackets( '(]' ) // => false
balancedBrackets( '[{}]' ) // => true
balancedBrackets( '[(])' ) // => false
balancedBrackets( '[({}[])]' ) // => true
-----------------------------------------------------------------*/
// Your solution for 23-balancedBrackets here:

/*
  The solution for this challenge is best implemented using
  a data structure known as a 'stack'. Think of a stack working a lot
  like a stack of papers where you always place new papers on top
  and always remove the top paper.
*/

function balancedBrackets(str) {
  // can't be balanced if string odd in length
  if (str.length % 2) return false;
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    var b = str.charAt(i);
    if ('([{'.includes(b)) {
      // add opening brackets to the stack
      stack.push(b);
    } else {
      // not an opening bracket, so remove last opening and check if matched
      if (!'() {} []'.includes(stack.pop() + b)) return false;
    }
  }
  return true;
}

/*--- Using Array.every method to iterate unless false is returned
      Also using arrow function ---*/
// function balancedBrackets(str) {
//   var stack = [];
//   return str.split('').every(c => {
//     if ('([{'.includes(c)) {
//       return stack.push(c);
//     } else {
//       return '() {} []'.includes(stack.pop() + c)
//     }
//   });
// }

/*--- Holy ternary Batman! Almost a one-liner! ---*/
// function balancedBrackets(str) {
//   var a = [];
//   return str.split('').every(c => '([{'.includes(c) ? a.push(c) : '() {} []'.includes(a.pop() + c));
// }

/*-----------------------------------------------------------------
Challenge: 24-isWinningTicket

Difficulty:  Intermediate

Prompt:

- Write a function called isWinningTicket that accepts a single array an as argument.
- The input array represents a 'lottery ticket' consisting of one or more nested 2-value arrays.  The first value of a nested array will be a string, the second an integer.
- The isWinningTicket function should return true if all of the nested arrays have a character in the string whose numeric character code equals the integer (2nd value).
- If any of the nested arrays have a string where all of the character's character code does not match the integer, then return false.

Hints:

- A character/string can be created from a character code using the String.fromCharCode() class method.
- A character within a string's character code can be obtained using the charCodeAt() string method.

Examples:

isWinningTicket( [ ['ABC', 65] ] ) // => true
isWinningTicket( [ ['ABC', 999], ['XY', 89] ] ) // => false
isWinningTicket( [ ['ABC', 66], ['dddd', 100], ['Hello', 108] ] ) // => true
isWinningTicket( [ ['ABC', 66], ['dddd', 15], ['Hello', 108] ] ) // => false
-----------------------------------------------------------------*/
// Your solution for 24-isWinningTicket here:

/* Naive for loops - :( */
function isWinningTicket(ticket) {
  var winner = true;
  for (var i = 0; i < ticket.length; i++) {
    var charFromNumber = String.fromCharCode(ticket[i][1]);
    if (!ticket[i][0].includes(charFromNumber)) {
      winner = false;
      break;
    }
  }
  return winner;
}

/* Array.prototype.every is sweet */
// function isWinningTicket(ticket){
//   return ticket.every(function(arr) {
//     return arr[0].includes(String.fromCharCode(arr[1]));
//   });
// }

/* Arrow functions help make concise one-liners possible */
// function isWinningTicket(ticket){
//   return ticket.every(arr => arr[0].includes(String.fromCharCode(arr[1])));
// }


/*-----------------------------------------------------------------
Challenge: 25-getNumForIP

Difficulty:  Intermediate

Prompt:

- Write a function called getNumForIP that accepts a single string as argument.
- The input string is formatted as an IP address, such as '192.156.99.15'.  IP addresses are used in networking and are actually 32-bit integers.  However, those that work with networks find it more convenient to work with these numbers as four 8-bit integers, separated by a 'dot' character.
- The getNumForIP function should return the numeric value of the string IP address being passed in as an argument.

Hints:

- Each 8-bit number can hold a value between 0 and 256.
- An IP's right most 8-bit number represents how many of 256 raised to the power of 0 (equals 1) there are.  The next 8-bit number represents how many of 256 raised to the power of 1 (256) there are, etc.  For example, if you took the right-most two 8-bit numbers of the IP address 192.156.99.15, you would have 15 * (256 ** 0), which equals 15, and 99 * (256**1), which equals 25344.
- To compute the numeric value for an IP address, you first compute the value for each of the four 8-bit chunks (as described in the above hint), and add them together!

Examples:

getNumForIP( '0.0.0.1' ) // => 1
getNumForIP( '0.0.2.0' ) // => 512
getNumForIP( '192.156.99.15' ) // => 3231474447
getNumForIP( '10.0.0.1' ) // => 167772161
-----------------------------------------------------------------*/
// Your solution for 25-getNumForIP here:

function getNumForIP(ip) {
  // reverse the chunks so that the we can use the index like 256**idx 
  var chunks = ip.split('.').reverse();
  var sum = 0;
  chunks.forEach(function (chunk, idx) {
    sum += parseInt(chunk) * 256 ** idx;
  });
  return sum;
}

/* Using reduce method gives us a one-liner */
// function getNumForIP(ip) {
//   return ip.split('.').reverse().reduce((sum, chunk, idx) => sum + parseInt(chunk) * 256**idx, 0);
// }

/*-----------------------------------------------------------------
Challenge: 26-toCamelCase

Difficulty:  Intermediate

Prompt:

- Write a function called toCamelCase that accepts a single string as argument.
- The toCamelCase function should return the string as camel-cased, removing each _ or - characters and capitalizing the character following the _ or -.

Hints:

- This is a great challenge for using regular expressions combined with the String.replace method.

Examples:

toCamelCase( 'wdi-rocks' ) // => 'wdiRocks'
toCamelCase( 'banana_Turkey_potato' ) // => 'bananaTurkeyPotato'
toCamelCase( 'Mama-mia' ) // => 'MamaMia'
toCamelCase( 'A_b_c' ) // => 'ABC'
-----------------------------------------------------------------*/
// Your solution for 26-toCamelCase here:

function toCamelCase(str) {
  return str.replace(/[_-]\w/g, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

/* Take advantage of the implicit return of an arrow function for a one-line solution */
// function toCamelCase(str) {
//   return str.replace(/[_-]\w/g, match => match.charAt(1).toUpperCase());
// }


/*-----------------------------------------------------------------
Challenge: 27-countTheBits

Difficulty:  Intermediate

Prompt:

- Write a function called countTheBits that accepts a single numeric argument that will be an integer.
- The function should return the number of bits that are set to 1 in the number's binary representation.

Hints:

- We typically work with "decimal" numbers on a daily basis. Decimal is "base 10", where there are 10 digits available - 0 thru 9.  However, it's binary that computers understand - 1's and 0's.  The 1's and 0's are called bits.
- As an example, the decimal value of 13 is represented in binary as 1101.  There are 3 one bits and 1 zero bit in the decimal number of 13.
- Carefully read the documentation for the Number.prototype.toString method.

Examples:

countTheBits( 0 ) // => 0
countTheBits( 13 ) // => 3
countTheBits( 256 ) // => 1
countTheBits( 255 ) //=> 8
countTheBits( 65535 )  //=> 16
-----------------------------------------------------------------*/
// Your solution for 27-countTheBits here:

function countTheBits(int) {
  return int.toString(2).split('').filter(bit => bit === '1').length;
}

/* Using a regular expression. Note || operator to provide an array so that can use length if there are no matches */
// function countTheBits(int) {
//   return (int.toString(2).match(/1/g) || []).length;
// }


/*-----------------------------------------------------------------
Challenge: 28-gridTrip

Difficulty:  Intermediate

Prompt:

- This challenge uses an imaginary grid where the x coordinate increases when you move 'up' and decreases when you move 'down'.  Similarly, the y coordinate increases when you move 'right' and decreases when you move 'left'.
- Write a function called gridTrip that accepts two arguments.
- The first argument is an array containing two integers.  The first represents the starting x position on the grid.  The second integer in the array represents the starting y position.
- The second argument is a string representing "moves" using the characters 'U', 'D', 'R' & 'L' to represent moving Up, Down, Right & Left respectively.  Each direction character will be followed by digits representing how many units to move in that direction.  For example, a string of 'D15R2U4' represents moving up 15 units, to the right 2 units, and finally, down 4 units.  The direction characters will always be upper case.
- The gridTrip function should return a new array of two integers: the final x position and the final y position.  Do not modify the array argument).

Hint:
- Using the String.match method to return an array of regular expression matches can be helpful if you want to break the single string of moves into an array of distinct moves by direction.  Be sure to use the global flag, e.g. /cat/g, when defining the regexp.

Examples:

gridTrip( [0, 0], 'U2R1' ) // => [2, 1]
gridTrip( [5, 10], 'D5L15U2' ) //-> [2, -5]
gridTrip( [-22, 100], 'L2L15D50U1D9') //=> [-80, 83]
-----------------------------------------------------------------*/
// Your solution for 28-gridTrip here:

/*--- Process one character at a time ---*/
function gridTrip(xyArr, moves) {
  // create result array with starting positions
  var result = [xyArr[0], xyArr[1]];
  // lookup object for result arr index and multipler for each dir char
  const lookup = {
    'U': [0, 1],
    'R': [1, 1],
    'D': [0, -1],
    'L': [1, -1]
  };
  var idx = 0;
  while (idx < moves.length) {
    // first char of the move string is the direction to be used to access the lookup object
    var dir = moves[idx];
    idx++;
    var numString = '';
    while ('0123456789'.includes(moves[idx]) && idx < moves.length) {
      numString += moves[idx];
      idx++;
    }
    result[lookup[dir][0]] += numString * lookup[dir][1];
  }
  return result;
}

/*--- Using regular expressions to break up the moves into an array ---*/
// function gridTrip(xyArr, moves) {
//   var result = [xyArr[0], xyArr[1]];
//   const lookup = {'U': [0, 1], 'R': [1, 1], 'D': [0, -1], 'L': [1, -1]}; 
//   // regular expressions are fantastic - be sure to use the 'global' flag with the match method
//   moves = moves.match(/[UDLR]\d+/g);
//   moves.forEach(function(move) {
//     var dir = move.charAt(0);
//     result[lookup[dir][0]] += move.substr(1) * lookup[dir][1];
//   });
//   return result;
// }



// A complete binary tree is a binary tree that each level except possibiliy the last level, is completed filled. 
// Suppose you are giving a binary tree represented as an array. For example, [3, 6, 2, 9, -1, 10] retpresents the 
// following binary tree, where -1 indicates it is a NULL node.
//Write a function that determines whether the left or right branch of the tree is larger. The size of each branch
//  is the sum of the node vlaues. The function should return the string “Right” if the right side is larger and “Left” if the left side is larger.
//  If the tree has zero nodes or if the size of the branches are equal, an empty string “” should be returned.

// solution
const solution = (arr) => {
  if (!arr) return "";
  if (arr.length === 0) {
    return "";
  }
  var sum = (arr, i) => {
    if (i - 1 < arr.length) {
      if (arr[i - 1] === -1) {
        return 0;
      }
      return arr[i - 1] + sum(arr, i * 2) + sum(arr, i * 2 + 1);
    }
    return 0;
  }
  const left = sum(arr, 2);
  const right = sum(arr, 3);
  return (left == right) ? "" : (left > right ? "Left" : "Right");
};

// write a function that takes a list of numbers and returns the largest number 
// if there are not numbers in the list return 0 in the list javascript

// solution
const solution = (numbers) => {
  var newList = Math.max(...numbers);
  return newList;
};

// Given an array of number, write a function to sort the array without using any naative sort functions

// unresolve problem




// Write a function that takes in a string, S, and returns TRUE if S is a permutation of a palindrome and false otherwise
// Example:
//S: "carrace"
//output: true
function palindrome(str) {
  var chrs = str.toLowerCase().replace(/[\W_]/g, "");
  var firstHalf = chrs.substr(0, chrs.length / 2);
  var secondHalf = chrs.substr(chrs.length / 2);

  if (chrs.length % 2 === 0) {
    return firstHalf == secondHalf.split("").reverse().join("");
  } else {
    return firstHalf == secondHalf.substr(1).split("").reverse().join("");
  }
}

console.log(palindrome('racecar'));
console.log(palindrome('carrace'));
console.log(palindrome('eye'));


// You are at the bottom of staircase with N stairs. You can jump 1,2, or 3 stairs
//at a time. How many different ways can you jump up the stairs
//Example: 
//N= 3
//Output : 4
function recursiveSteps(steps) {
  var total = 1;

  for (var i = 2; i <= steps; i++) {
    total += recursiveSteps(steps - i);
  }

  return total;
}
console.log(recursiveSteps(5))
console.log(recursiveSteps(7))
console.log(recursiveSteps(10))

// Suppose you are given a list of integers, PRICES, that represents the stock of GOOGLE's stock overtime.
// PRICES[i] is the price of the stockon day i. you must buy the stock once and then later sell it.
// You are not allowed to sell before you buy.
// write a function that returns an integer, which is the maximun profit you can make from buying the stock then sell it.
// if the list is empyt return 0

function stock(prices) {
  var buy = -1,
    sell = -1,
    profit = -1;
  var changeSellPrice = true;
  for (var i = 0; i < prices.length; i++) {
    if (buy === -1) {
      buy = prices[i];
    }
    if (buy > prices[i]) {
      buy = prices[i];
      changeSellPrice = true;
    }
    if (changeSellPrice || sell < prices[i + 1]) {
      sell = prices[i + 1];
      if (profit < (sell - buy)) {
        profit = sell - buy;
        changeSellPrice = false;
      }
    }
  }
  return profit;
}
console.log(stock([6, 0, -1, 10]))
console.log(stock([8, 0, 3, 10]))

// Given two strings, return TRUE, if the strings are isomorphic and FALSE otherwise. 
// Two strings are isomorphic when you can rewrite every occurence of a character with a diff character. for as many as you want
// Only restriction is when you replace one character youo must replace all other chaaracters of that type

function isomorphic(s, t) {

  var len1 = s.length;
  if (len1 != t.length) {
    console.log('Both strings have different lenghts');
    return false;
  }

  var chMap = {};

  for (var i = 0; i < len1; i++) {
    if (!chMap[s[i]]) {
      chMap[s[i]] = t[i];
    } else if (chMap[s[i]] !== t[i]) {
      // console.log('Both strings differ in maaping at index ' + i);
      return false;
    }
  }
  return true;
}

console.log(isomorphic('foo', 'bar'));
console.log(isomorphic('papa', 'kike'));



// challenge 1 leetcode
// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
// You may assume nums1 and nums2 cannot be both empty.
// example:
// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0

var findMedianSortedArrays = function (nums1, nums2) {
  let totalCount = nums1.length + nums2.length;
  let combined = [];
  let a = nums1.shift();
  let b = nums2.shift();
  let count = 0;
  while (count < totalCount) {
    if (typeof a === 'undefined') {
      combined.push(b);
      b = nums2.shift();
    } else if (typeof b === 'undefined') {
      combined.push(a);
      a = nums1.shift();
    } else if (a < b) {
      combined.push(a);
      a = nums1.shift();
    } else {
      combined.push(b);
      b = nums2.shift();
    }
    count++;
  }

  let middleIndex = Math.floor(combined.length / 2);
  if (combined.length % 2 != 0) {
    //Return the middle value if number of total elements is odd
    return (combined[middleIndex]);
  } else {
    //Return the average of the middle values if number of total elements is even
    return (combined[middleIndex - 1] + combined[middleIndex]) / 2;
  }
};

// how to pick a random element from a infinite stream
// import random;

// def pick(big_stream):
//   random_element = Nonew

//     for (i, e in enumerate(big_stream):
//         if (i == 0):
//             random_element = e
//         if (random.randint(1, i + 1) == 1):
//           random_element = e
//     return random_element


// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

//first we check if it is palindrome 
function isPalindrome(s) {
  var pal = s.split('').reverse().join('');
  return s == pal;
};

// now we proceed to find the longest palindrome
function longestPalindrome(s) {
  var max_length = 0;
  maxLen = '';
  for (var i = 0; i < s.length; i++) {
    // we identify the substring and assign to a variable 
    var subs = s.substr(i, s.length)
    for (var j = subs.length; j >= 0; j--) {
      var subStr = subs.substr(0, j);
      if (subStr.length <= 1)
        continue;
      if (isPalindrome(subStr)) {
        if (subStr.length > max_length) {
          max_length == subStr
          maxLen = subStr
        }
      }

    }
  }
  return maxLen;
}

// John works at a clothing store. He has a large pile of socks that he must pair by color for sale.
//  Given an array of integers representing the color of each sock, determine how many
//  pairs of socks with matching colors there are.

// For example, there are n = 7 socks with colors ar=[1,2,1,2,1,3,2]. 
// There is one pair of color 1 and one of color 2. 
// There are three odd socks left, one of each color. The number of pairs is 2.

// find the pair of socks
function sortedCount(n, ar) {
  //built in sort() method
  let sorting = ar.sort((a, b) => a - b)
  let result = 0;
  // we take in to the last index
  for (i = 0; i < n - 1; i++) {
    //we compare box indexes and increment the result
    if (sorting[i] === sorting[i + 1]) {
      result++;
      i += 1;
    }
  }
  return result;
}

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
// Input: "cbbd"
// Output: "bb"

function expandAroundCenterSolution(s) {
  let start = 0,
    end = 0;
  for (let i = 0; i < s.length; i++) {
    let center = getCenter(s, i);
    let bounds = expandAroundCenter(s, center[0], center[1]);
    let L = bounds[0],
      R = bounds[1];
    if (R - L > end - start) {
      start = L;
      end = R;
    }
    console.log("---");
    i = center[1]; //move to the end of center, i++ will then shift pointer to index right after current center
  }
  return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
  let L = left,
    R = right;

  while (L >= 0 && R < s.length && s[L] === s[R]) {
    L--;
    R++;
  }
  console.log("expand return " + (L + 1) + ":" + (R - 1));
  return [++L, --R];
}

function getCenter(s, c) {
  let L = c,
    R = c;
  console.log("get center start index: " + c);
  while (s[L] === s[++R] && R <= s.length);
  console.log("return " + L + ":" + (R - 1));
  return [L, --R];
}

// BRUTE FORCE
function isPalindrome(s) {
  let k = 0;
  let l = s.length - 1;
  let isPalindrome = true;
  while (k <= l) {
    if (!(s.charAt(k) === s.charAt(l))) {
      isPalindrome = false;
      break;
    }
    k++;
    l--;
  }
  return isPalindrome;
}

function bruteForce(s) {

  let maxPalindrome = "";

  for (let i = 0; i <= s.length - 1; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let subStr = s.substring(i, j)
      console.log("check: " + subStr);
      if (isPalindrome(subStr)) {
        console.log(subStr + " is palindrome")
        if (subStr.length > maxPalindrome.length) {
          maxPalindrome = subStr;
        }
      }
    }
    console.log("---");
  }

  return maxPalindrome;
}

function longestPalindrome(s) {

  // let maxPalindrome = bruteForce(s);
  let maxPalindrome = expandAroundCenterSolution(s);

  return maxPalindrome;
}

let testCase = "cccaba";
console.log("Longest Palindromic Substring: " + longestPalindrome(testCase));


// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

// Example 1:
// Input: 121
// Output: true
// Example 2:
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

//find the string of a palindrome

const str = 121;

function isPalindrome(str) {
  str = str.toString()
  // replace method and tolowercase method only if a string is given
  // str = str.replace(/\W/g, '');
  // str = str.toLowerCase();
  console.log(str)
  // iterate through the string 
  for (let i = 0; i < str.length; i++) {
    console.log(i);
    // comparing the first letter in the string and the last letter in the string
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome(str));

function isPalindromeToo(str) {
  // replace and tolowercase method only if a string is given.
  str = str.replace(/\W/g, "");
  str = str.toLowerCase();

  return str === str.split('').reverse().join('');
}
console.log(isPalindromeToo(str));


//return the avrage of both scores
var johnPoints = 333 / 3;
var mikePoints = 339 / 3;

console.log(johnPoints, mikePoints)

if (mikePoints > johnPoints) {
  console.log('mike is the winner with ' + mikePoints)
} else if (mikePoints < johnPoints) {
  console.log('John is the winner with ' + johnPoints)
} else {
  console.log('it\'s is draw')
}