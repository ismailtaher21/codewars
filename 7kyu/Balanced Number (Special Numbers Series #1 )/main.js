function balancedNum(number){
    let string = String(number)
        let result = 0
      
      for(let i = 0; i<string.length / 2 - 1; i++){
        
        result += Number(string[i] - Number(string[string.length - 1 - i]))
      }
      return result == 0 ? "Balanced" : "Not Balanced"
    }