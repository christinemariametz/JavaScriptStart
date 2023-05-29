/*            Find Maximum and Minimum Values of a List


Your task is to make two functions 
( max and min, or maximum and minimum, etc., depending on the language ) 
that receive a list of integers as input, 
and return the largest and lowest number in that list, respectively.

* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5

Tip: You may consider that there will not be any empty arrays/vectors.


Methode: Frage: Gibt es eine Methode für max / min in Arrays? (Siehe MDN docs)
YESSSS: === Math.min & Math.max (...Parameter).



*/

const min = (list) => {
    return Math.min(...list);
}

const max = (list) => {
    return Math.max(...list);
}

console.log(max([4,6,2,1,9,63,-134,566]));
console.log(min([4,6,2,1,9,63,-134,566]));