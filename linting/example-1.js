/*
// Before linting
function square(number){
    var squaredNumber = number**2;
    return squaredNumber;
}
var number=2;
var squaredNumber = square(number);
console.log(squaredNumber);
*/

// After linting
function square(number) {
  const squaredNumber = number ** 2;
  return squaredNumber;
}
const number = 2;
const squaredNumber = square(number);
console.log(squaredNumber);
