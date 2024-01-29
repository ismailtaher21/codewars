const sorter = textbooks =>
  textbooks.sort((a, b) => {
    const itemA = a.toUpperCase()
    const itemB = b.toUpperCase()

    if (itemA < itemB) {
      return -1
    } else if (itemA > itemB) {
      return 1
    } else {
      return 0
    }
  })