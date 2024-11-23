const operationButtons = document.querySelectorAll('.operation-button');
const equalButton = document.querySelector('#button-equal');
const clearButton  = document.querySelector('#button-clear');
const calculatorScreen = document.querySelector('#screen');
const errorMessage = document.querySelector('.error-message');

operationButtons.forEach(function(operationButton) {
  operationButton.addEventListener('click', function() {
    operationValue = operationButton.innerText;

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
    if (screenValue.includes('+')) {
      numbers = screenValue.split('+');
      calculatorScreen.value = Math.round((Number(numbers[0]) + Number(numbers[1])) * 100) / 100;
    } else if (screenValue.includes('-')) {
      numbers = screenValue.split('-');
      calculatorScreen.value = Math.round((Number(numbers[0]) - Number(numbers[1])) * 100) / 100;
    } else if (screenValue.includes('*')) {
      numbers = screenValue.split('*');
      calculatorScreen.value = Math.round((Number(numbers[0]) * Number(numbers[1])) * 100) / 100;
    } else if (screenValue.includes('/')) {
      numbers = screenValue.split('/');
      calculatorScreen.value = Math.round((Number(numbers[0]) / Number(numbers[1])) * 100) / 100;
    }
    errorMessage.innerText = '';
  }
})

clearButton.addEventListener('click', function() {
  calculatorScreen.value = '';
  errorMessage.innerText = '';
})