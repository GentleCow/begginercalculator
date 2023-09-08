var userNumber1;
var userNumber2;

function enterNumber1() {
  userNumber1 = Number(prompt("Pick a number"));
}

function enterNumber2() {
  userNumber2 = Number(prompt("Pick another number"));
}

function addNumbers() {
  alert(`The sum is ${userNumber1 + userNumber2}`);
}





var userNumber3;
var userNumber4;

function enterNumber3() {
  userNumber3 = Number(prompt("Pick a number"));
}

function enterNumber4() {
  userNumber4 = Number(prompt("Pick another number"));
}

function subtractNumbers() {
  alert(`The result of subtraction is ${userNumber3 - userNumber4}`);
}





var userNumber5;
var userNumber6;

function enterNumber5() {
  userNumber5 = Number(prompt("Pick a number"));
}

function enterNumber6() {
  userNumber6 = Number(prompt("Pick another number"));
}

function multiplyNumbers() {
  alert(`The product is ${userNumber5 * userNumber6}`);
}





var userNumber7;
var userNumber8;

function enterNumber7() {
  userNumber7 = Number(prompt("Pick a number"));
}

function enterNumber8() {
  userNumber8 = Number(prompt("Pick another number"));
}

function halfNumbers() {
  alert(`The number is ${userNumber7 / userNumber8}`);
}





var userNumber9

function enterNumber9() {
userNumber9 = Number(prompt("Pick a number"));
}

function itselfNumber() { if (!Number.isNaN(userNumber9)) {
  alert("Your number is the square root of " +
              userNumber9 * userNumber9);
} else {
  alert("Hey. Why didn't you give me a number?");
}
}