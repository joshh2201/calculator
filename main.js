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

const display = document.querySelector('.display');
display.innerText = '0';

const numberBtns = document.querySelectorAll('.number');
numberBtns.forEach((button) => button.addEventListener('click', numberPress));
