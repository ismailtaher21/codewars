//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).



function solution(str, ending){
    // TODO: complete
    
    if(str.substr(str.length - 3) === ending){
      return true
    }else{
      return false
    }
  }