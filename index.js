var rs = require('readline-sync');

function getOperation() {
  let operation = rs.question('What operation would you like to perform? ');
  if (operation === "/" 
  || operation ===  "*" 
  || operation === "-" 
  || operation === "+") {
    return operation
  }
  else {
    console.log('That is not a valid operation.')
    getOperation();
  }
}

function inputFirstNum() {
  return rs.questionInt('Please enter the first number: ');
}

function inputSecondNum() {
  return rs.questionInt('Please enter the second number: ');
}

function run(operation) {
  return new Function('return ' + operation + ';').call();
}

let operation = getOperation();
let firstNum = inputFirstNum();
let secondNum = inputSecondNum();
let result = run(firstNum + operation + secondNum);

console.log(`The result is: ${result}.`);