var rs = require('readline-sync');

function getEquation() {
  return rs.question('Please enter the desired equation separated by spaces: ');
}

function splitEquation(equationString) {
  return equationString.split(' ');
}

function run(equationString) {
  let result = new Function(`return ${equationString};`).call();
  console.log(result);
}

function nodeCalculator() {
  let equationString = getEquation();
  console.log(equationString);
  let result = run(equationString);
  console.log(`The result is: ${result}`);
}

nodeCalculator();