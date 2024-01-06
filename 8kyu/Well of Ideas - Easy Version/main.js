//n this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.



function well(x){

    let goodCounter = 0;
  
    for (const idea of x) {
      if (idea === "good") {
        goodCounter += 1;
      }
    }
  
    return goodCounter === 0
      ? "Fail!"
      : goodCounter > 2
        ? "I smell a series!"
        : "Publish!";
  }
  