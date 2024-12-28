function calculateSum() {
    const num1 = parseInt(document.getElementById('number1').value) || 0;
    const num2 = parseInt(document.getElementById('number2').value) || 0;
    const sum = num1 + num2;
    document.getElementById('result').value = sum;
}