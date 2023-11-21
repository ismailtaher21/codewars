//Task
//Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

//Don't change the order of the elements that are left



function removeSmallest(numbers) {
  
    const copy = numbers.slice(0)
    let smallestValue = numbers.indexOf(Math.min(...numbers))
    copy.splice(smallestValue, 1);
    return copy
   }