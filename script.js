let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function calculate() {
  try {
    const result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result;
  } catch (error) {
    document.getElementById('display').value = 'Erro';
  }
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

// Adicionando evento para capturar teclas pressionadas
document.addEventListener('keydown', function(event) {
  const key = event.key;

  // Verificando se a tecla pressionada é um número, operador ou tecla especial
  if (/\d/.test(key)) {
    appendToDisplay(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    appendToDisplay(key);
  } else if (key === '.' || key === '%') {
    appendToDisplay(key);
  } else if (key === 'Enter' || key === '=') {
    calculate();
  } else if (key === 'Backspace') {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
  } else if (key === 'Escape') {
    clearDisplay();
  }
});
