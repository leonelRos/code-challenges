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