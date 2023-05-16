/////////     01) oddNumbers function
//Implement a oddNumbers function.

 //The function has two parameters, both are numbers.
 //Iterate over all numbers between first number and the second number.
 //Store all oddNumbers in string, seperated by a comma and return the string.
 //Allowed are only positive numbers, add a check.


function oddNumbers(num1, num2) {
let result = "";
    for (let i = num1; i <= num2; i++) {
        console.log(i);
    if (i % 2 !== 0) {
    result += i;
}
}
return result;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

//02-charCount function
console.log("Taks 02");



/////////        02) charCount function
//Implement a charCount function.

 //The function has a first parameter for a word which is a string.
 //The function has a second parameter which contains the character to search for which is a string.
 //Check if the second parameter consists of only one character, if not, quit the function.
 //The function returns the number of times the character from the second parameter is present in the word.
 //The function should be case insensitive.


 function charCount(word, lookfor) {
    let count = 0;
    for (let index = 0; index <= word.length; index++) {
        const currentChara = word.toLowerCase()[index];
        if (lookfor.length >= 2) {
            break;
        } else if (currentChara === lookfor.toLowerCase()) {
            count += 1;
        }
    }
    return count;
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3