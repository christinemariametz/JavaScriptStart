
/*          INVERT VALUES    

Given a set of numbers, 
return the additive inverse of each. 
Each positive becomes negatives, 
and the negatives become positives.


Methode#1: Lösung mit Schleife über den Index:

function invert(array) {
  let NewArr = [];
  for (let i = 0; i < array.length; i++) {
newArr.push(-array[i]);
  }
  return NewArr;
}


Methode#2: zB array.map um Nummern im Array zu transformieren (*mal (-1) nehmen) PLUS neu gelernte Methode : Arrow function austesten.
*/



function invert(array) {
  return array.map((number) => number * -1);
  }

  console.log(invert([1,2,3,4,5]));

