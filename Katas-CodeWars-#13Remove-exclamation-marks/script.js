/*        Remove exclamation marks



Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


Fragen 1: Ist ein "!" in meinem String??
Methode 1 === Loop.

2. Hänge alles, was kein "!" ist, an mein result.



*/

function removeExclamationMarks(s) {
    let result = "";
  for(let i = 0; i < s.length; i++) {
    if(s[i] != "!"){
      result += s[i];
    }
  }
    return result;
  }

  console.log(removeExclamationMarks("Hello World!"));
  
