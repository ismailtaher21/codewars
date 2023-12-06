//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.



function shortcut(string){
    var vowels = "aeiou";
    var output = "";
    for (var i = 0; i < string.length; i++) {
      if (!(vowels.indexOf(string[i]) > -1)) {
        output += string[i];
      }
    }
    return output;
  }