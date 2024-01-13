//Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.


function remove (string) {
    //coding and coding....a
    if(string.slice(-1) == '!'){
      let last = string.slice(0,-1)
      return last;
    }else return string;
    
  }