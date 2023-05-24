
/*Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.*/

// 1. Finde die Geraden Zahlen. (Lösung = result)
// 2. "Loope" das Array.
// 3. WENN du eine gerade Zahl findest, DANN hänge sie in mein neues Array an.
// 4. "RETURNE" mir aber nur die letzten Nummern (number)!

function evenNumbers(array, number) {
  let result = [];
    for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0) {
    result.push(array[i]);
    }
}
return result.slice(-number);

 }   





 console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);



 console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26]);
 console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);