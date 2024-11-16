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
  const operationResult = calculatorScreen.value;
  const lastCharacterFromResult = operationResult.slice(-1);

  if (lastCharacterFromResult.match(/[+-/*0]/) || operationResult === '') {
    errorMessage.innerText = 'wrong format';
  } else {
    calculatorScreen.value = eval(operationResult);
    errorMessage.innerText = '';
  }
})

clearButton.addEventListener('click', function() {
  calculatorScreen.value = '';
  errorMessage.innerText = '';
})