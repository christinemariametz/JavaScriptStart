//  01) Greet function
//  Implement a welcomeMsg function.
/// first parameter name of the person to be greeted
/// function return string that contains name of person in a welcome msg.




function welcomeMsg(name) {
    return "Welcome " + name + "!";
}

console.log(welcomeMsg("Tine"));
console.log(welcomeMsg("Boys"));
console.log(welcomeMsg("Bene"));


//  02) Gross Price Function
//  Implement a calcGrossPrice function.
/// first parameter net price - integer number
/// second parameter tax rate - float number
/// function return gross price

function calcGrossPrice(netPrice, taxRate) {
    return netPrice + netPrice * taxRate;
}

console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

//03) Add Positive Function
// The function has two parameters which will always be numbers
 ///The function should add the two numbers and return the result
 ///If any of the arguments is a negative number, it should be handled as a positive number (see example code)

 function addPositive(num1, num2) {
    if (num1 < 0) {
        num1 = -num1;
    }
    if (num2 < 0) {
        num2 = -num2;
    }
    return num1 + num2;
 }


 console.log(addPositive(2, 3));
 console.log(addPositive(3, -5));
 console.log(addPositive(-1, -8));