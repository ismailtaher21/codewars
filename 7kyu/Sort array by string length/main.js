//Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

//For example, if this array were passed as an argument:

//["Telescopes", "Glasses", "Eyes", "Monocles"]

//Your function would return the following array:



function sortByLength (array) {
    // Return an array containing the same strings,
    // ordered from shortest to longest
    
      let newarr = array.sort((a,b) => a.length - b.length)
      return newarr;
  }