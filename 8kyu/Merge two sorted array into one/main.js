function mergeArrays(arr1, arr2) {
  
    let sum = arr1.concat(arr2)
    let sortedsum = sum.sort((a,b) => a-b)
  
    let result = [];
    for (let i = 0; i < sortedsum.length; i++) {
      if (sortedsum[i] !== sortedsum[i + 1]) {
        result.push(sortedsum[i]);
      }
    }
    return result;
    
  }