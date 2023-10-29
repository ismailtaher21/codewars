//Write a method, that will get an integer array as parameter and will process every number from this array.

//Return a new array with processing every number of the input-array like this:

//If the number has an integer square root, take this, otherwise square the number.



function squareOrSquareRoot(array) {

    var newValues = []; 
    for(var i = 0 ; i<array.length ;i++) {
        var initial = array[i];
        var sqrt = Math.sqrt(initial);
        if(Number.isInteger(sqrt)) 
            newValues.push(sqrt);
        else
            newValues.push(array[i]*array[i]);
    }
    return newValues;
}