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
   