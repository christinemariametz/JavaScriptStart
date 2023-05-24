function solution(str){

  // "hello" soll jetzt zu "olleh" werden.
  // um .reverse zu verwenden benötige ich ein Array aus den einzelnen Buchstaben.
  let splitString = str.split("");
  console.log(splitString);
  let reverseArray = splitString.reverse();
  console.log(reverseArray);
  // füge die einzelnen Buchstaben wieder zusammen:
  let joinArray = reverseArray.join("");

  return joinArray;
}

console.log(solution('world'), "dlrow");
console.log(solution('hello'), 'olleh');
console.log(solution(''), '');
console.log(solution('h'), 'h');