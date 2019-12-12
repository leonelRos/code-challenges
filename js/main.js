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