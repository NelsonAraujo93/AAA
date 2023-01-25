const stringReverse = (string) => {
   let splitString = string.split("");
   let reverseSplit = splitString.reverse();
   let reverseString = reverseSplit.join("");
    
   return reverseString;
  }
  
module.exports = stringReverse;