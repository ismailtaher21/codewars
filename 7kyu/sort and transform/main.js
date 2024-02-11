const sortTransform = (arr) => {
    const letter = el => String.fromCodePoint( ...el.slice(0, 2).concat(el.slice(-2)) )
    const choose = [...arr].sort((a, b) => a - b)
    
    return [letter(arr), letter(choose), letter( [ ...choose ].reverse() ), letter(choose) ].join('-')
  }