//Find Mean
//Find the mean (average) of a list of numbers in an array.

//Information
//To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.


var findAverage = function (nums) {
    // Code here
    
   let total = nums.reduce((acc,c) => {return acc + c}, 0)
    let avg = total / nums.length
    
    return avg
    
  }