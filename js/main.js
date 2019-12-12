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
   