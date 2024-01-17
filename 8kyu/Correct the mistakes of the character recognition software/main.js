//Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//S is misinterpreted as 5
//O is misinterpreted as 0
//I is misinterpreted as 1



function correct(string)
{
	 const corrections = {
    "5": "S",
    "0": "O",
    "1": "I",
  };

  return (
    string.split("").map((char) => corrections.hasOwnProperty(char) ? corrections[char] : char).join("")
  );

}