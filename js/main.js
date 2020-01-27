function multiply(a,b) {
    if (a < 0 && b > 0){
      return b * a
    }
    return a - b;
   }
   
   console.log(multiply(-5,4));
   console.log(multiply(10,6));
   console.log(multiply(9,7));
   
   
   function getCount(str){
     var vowelsCount = 0;
     var vowel_list = 'aeiou';
     for (x = 0; x < str.length; x++) {
       if(vowel_list.indexOf(str[x]) !== -1)
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
   
   for(var i = 0; i < cubes.length; i++) {
       var cube = cubes[i];
       for(var j = 0; j < cube.length; j++) {
           display ("cube[" + i + "][" + j + "] = " + cube[j]);
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
    arr.push(a+1);
    return range(a+1, b);
  } else {
    return arr;
  }
}
// range(2,9);
console.log(range(2, 9));


function srting(str) {
    result = [];
    str = str.split(' ');
      for(i = 1; i <= str.length; i++){
        str.forEach(x => x.includes(i) ? result.push(x) :     console.log(x))
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
   console.log(sumNumbers([10,2,5]));
  
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
  
  function addList(){
    var sum = 0
   for (i = 0; i < arguments.length; i++) {
     sum += arguments[i];
   }
   return sum;
  }
  console.log(addList(2,78));
  
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
  console.log(computeRemainder(10,5));
  console.log(computeRemainder(15,7));
  console.log(computeRemainder(19,0));
  
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
  function diag(arr){
    let m = arr.length - 1;
    let idx1 = m;
    let n = arr.length - 1;
    let idx2 = n;
    let newArr = [];
    for (idx1; idx1 >= 0; idx1--){
      let check = idx1;
      while(idx2 >= 0 && idx1 <= m)
      {
        console.log(arr[idx1][idx2]);
        newArr.push(arr[idx1][idx2]);
        idx1++;
        idx2--;
      }
      idx1 = check;
      idx2 = n;
    }
      idx1 = 0;
      for (idx2 = n - 1; idx2 >= 0; idx2--){
        check = idx2;
        while(idx2 >= 0 && idx1 <= n){
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
  
  let testArr =[[1, 2, 3],[4, 5, 6], [7, 8, 9]];
  console.log(diag(testArr));


// another challenge
const arr =[1,2,3,4];


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

for(var i = 0; i < cubes.length; i++) {
    var cube = cubes[i];
    for(var j = 0; j < cube.length; j++) {
        display ("cube[" + i + "][" + j + "] = " + cube[j]);
    }
}
// learning curr in JS below
var greetCurried = function(greeting) {
  return function(name){
    console.log(greeting + ', ' + name);
  }
}
var greetHello = greetCurried("hello");
greetCurried("hi there")("lauren")
greetHello('Heidi');
greetHello('Eddie');
var greetDeeplyCurried = function(greeting){
  return function (separator){
    return function(emphasis){
      return function(name){
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
function ListNode(val){
  this.val = val;
  this.next = null;
}
const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

var addTwoNumbers = function(l1, l2) {
  var newList = new ListNode("head");
  var resultList = newList;
  var carry = 0;
  while(l1 || l2 || carry){
    const v1 = l1 ? l1.val : 0
    const v2 = l2 ? l2.val : 0
    const v = v1 + v2 + carry

    resultList.next= new ListNode(v % 10) //using ( % 10 is to obtain the first value)
    resultList = resultList.next;
    carry = v >= 10 ? 1: 0
    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }
  return newList.next
}
console.log(addTwoNumbers(l1,l2));

// Given a string, find the length of the longest substring without repeating characters.
var lengthOfLongestSubstring = function(s) {
  var res=0;
    var tem=[];
    for (var char of s){
        var idx = tem.indexOf(char);
        if (idx> -1) { 
            tem = tem.slice(idx + 1)
        }
        tem.push(char);
        if(tem.length > res) {
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
    }
    else {
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
  arr.forEach(function(kvArr) {
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
  objects.forEach(function(obj) {
    // using ES2015's 'for in' loop
    for(var key in obj) {
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
  arr.forEach(function(item) {
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
  arr.forEach(function(el, idx) {
    newArr.push( cb(el, idx) );
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
  arr.forEach(function(el, idx) {
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
  arr.forEach(function(elem) {
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
  
  var prime = 2;  // start with smallest prime
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
