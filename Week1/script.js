let displayValue = '';

function appendValue(value) {
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        document.getElementById('result').value = result;
        displayValue = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        displayValue = '';
    }
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = '';
}

function deleteDigit() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('result').value = displayValue;
}