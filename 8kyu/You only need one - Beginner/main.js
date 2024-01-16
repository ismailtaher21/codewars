//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.




function check(a, x) {
    // your code here
        for (var i = 0; i < a.length; i++){
          if (a[i] === x){
              return true;
          }
      }
      return false;
  }
  