function minSum(arr) {
    // your code here
    let newarr = arr.sort((a,b) => a - b).reduce((acc, c) => acc + c * arr.pop(), 0)
    return newarr
  }