const operationButtons = document.querySelectorAll('.operation-button');
const equalButton = document.querySelector('#button-equal');
const clearButton  = document.querySelector('#button-clear');
const calculatorScreen = document.querySelector('#screen');
const errorMessage = document.querySelector('.error-message');

operationButtons.forEach(function(operationButton) {
  operationButton.addEventListener('click', function() {
    let operationValue = operationButton.innerText;

    if (calculatorScreen.value.length < 9) {
      calculatorScreen.value += operationValue;
    } else {
      errorMessage.innerText = 'max 9 digits';
    }
  })
})

equalButton.addEventListener('click', function() {
  const screenValue = calculatorScreen.value;
  const lastCharacterFromResult = screenValue.slice(-1);

  if (lastCharacterFromResult.match(/[+-/*]/) || screenValue === '') {
    errorMessage.innerText = 'wrong format';
  } else {
    let operationResult = new Function('return ' + screenValue)();
    errorMessage.innerText = '';

    if (screenValue.includes('.')) {
      calculatorScreen.value = operationResult.toFixed(2);
    } else {
      calculatorScreen.value = operationResult;
    }
  }
})

clearButton.addEventListener('click', function() {
  calculatorScreen.value = '';
  errorMessage.innerText = '';
})