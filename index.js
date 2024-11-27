const operationButtons = document.querySelectorAll('.operation-button');
const equalButton = document.querySelector('#button-equal');
const clearButton  = document.querySelector('#button-clear');
const calculatorScreen = document.querySelector('#screen');
const errorMessage = document.querySelector('.error-message');

operationButtons.forEach(function(operationButton) {
  operationButton.addEventListener('click', function() {
    const operationValue = operationButton.innerText;
    calculatorScreen.innerText += operationValue;
  })
})

function roundFloating(screenValue) {
  if (screenValue.includes('+')) {
    const numbers = screenValue.split('+');
    return calculatorScreen.innerText = Number(numbers[0]) + Number(numbers[1]);
  } if (screenValue.includes('-')) {
    const numbers = screenValue.split('-');
    return calculatorScreen.innerText = numbers[0] - numbers[1];
  } if (screenValue.includes('*')) {
    const numbers = screenValue.split('*');
    return calculatorScreen.innerText = numbers[0] * numbers[1];
  } if (screenValue.includes('/')) {
    const numbers = screenValue.split('/');
    return calculatorScreen.innerText = numbers[0] / numbers[1];
  }
}

equalButton.addEventListener('click', function() {
  const screenValue = calculatorScreen.innerText;
  const lastCharacterFromResult = screenValue.slice(-1);

  if (lastCharacterFromResult.match(/[+-/*]/) || screenValue === '') {
    errorMessage.innerText = 'wrong format';
  } else {
    roundFloating(screenValue);
    errorMessage.innerText = '';
  }
})

clearButton.addEventListener('click', function() {
  calculatorScreen.innerText = '';
  errorMessage.innerText = '';
})