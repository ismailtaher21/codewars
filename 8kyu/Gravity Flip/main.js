const flip=(d, a)=>{
    //TODO
    return d === "R" ? a.sort(function(x, y){return x-y}) : a.sort(function(x, y){return y-x})
  
  }