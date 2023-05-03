function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (!b) {
    return 'ERROR';
  }
  return a / b;
}

function operate(operator, a, b) {
  return operator(a, b);
}

function updateDisplay(val) {
  const display = document.querySelector('.display');
  if (display.innerText === '0') {
    display.innerText = val;
  } else {
    display.innerText = display.innerText.concat(val);
  }
}

function numberPress(e) {
  updateDisplay(e.currentTarget.innerText);
}

function operatorPress(e) {
  const display = document.querySelector('.display');
  if (!currOperator) {
    currOperator = e.currentTarget.innerText;
    firstNum = parseInt(display.innerText);
    updateDisplay(currOperator);
  } else {
    displayNums = display.innerText.split(currOperator);
    secondNum = parseInt(displayNums[displayNums.length - 1]);
    firstNum = operate(operators[currOperator], firstNum, secondNum);
    currOperator = e.currentTarget.innerText;
    display.innerText = firstNum.toString() + currOperator;
  }
}
let firstNum;
let secondNum;
let currOperator;

const display = document.querySelector('.display');
display.innerText = '0';

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) =>
  button.addEventListener('click', numberPress)
);

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) =>
  button.addEventListener('click', operatorPress)
);
operators = { '+': add, '-': subtract, x: multiply, '/': divide };
