//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.




function sumMix(x){
    return x.reduce((x, y) => Number(x) + Number(y), 0)
    }