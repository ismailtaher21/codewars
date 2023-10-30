//I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

//P.S. Each array includes only integer numbers. Output is a number too.



function arrayPlusArray(arr1, arr2) {
  
  let arr1sum = 0
  
  let arr2sum = 0
  
  for(let i = 0; i<arr1.length; i++){
    arr1sum += arr1[i]

  }

    
  for(let i = 0; i<arr2.length; i++){
    arr2sum += arr2[i]

  }
  return arr1sum + arr2sum; //something went wrong
}