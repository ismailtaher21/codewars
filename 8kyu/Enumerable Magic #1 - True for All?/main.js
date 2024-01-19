//and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.



function all( arr, fun ){
    let array = [];
      for(let i=0; i< arr.length; i++){
        if(fun(arr[i])){
          array.push(arr[i])
        }
      }
      if(arr.length === array.length){
        return true
      }
    
      return false;
    }