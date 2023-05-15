////////////04) Coding-Task: Variables/////////////////



// 01) Spot the errors and fix them
 // Copy the following complete code block to your script.js file and try to spot and fix the errors.

 /////////    1.
//const userName = Brad;
//userName = "Jenna";
//----------------------->
// Fehler1: Fehlende Anführungszeichen!
// Fehler2: Wert der "const" ist nicht änderbar!

const userName = "Brad";

 /////////    2. 
// function getUserNameLength {
//  return const result = name.length
//}
//----------------------->
// Fehler1: Runde Klammern fehlen
// Fehler2: Return und const sollen nicht in die selbe Zeile!

function getUserNameLength() {
    const result = userName.length;
    return result;
}

 /////////    3. 
// console.log(getUserNameLength(userName) > 4)
// ^______________ Should log true
//----------------------->
// Fehler1: die Ausführung benötigt keine Parameter.
// Fehler2: der assignment operator ist falsch.

console.log(getUserNameLength() === 4);





// 02) isString function
//Implement a isString function.

 //The function has one parameter which could be any kind of data type
 //The function is written as a function expression
 //The function returns a boolean. It returns only true, when the data type is a string otherwise it will return false


 function isString(anyDataType) {
typeIs = typeof anyDataType;
return typeIs === "string";
 }

 console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true