//Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

//If your language can handle float binaries assume the array won't contain float or doubles.



function arr2bin(arr) {
    return arr.reduce((sum, cur) => typeof(cur) === 'number' ? sum + cur : sum, 0).toString(2);
  }