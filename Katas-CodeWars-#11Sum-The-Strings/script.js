
/*    Sum The Strings
 

Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):



Überlegung: die 2 "Numbers" zusammenrechnen, das Ergebnis als String auswerfen lassen
*/



function sumStr(a,b) {

    let result = (Number(a) + Number(b));
    return result.toString();
  }


  console.log(sumStr("4", "5"));
  console.log(sumStr("34", "5"));
  