function subtract() {
    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');
    const result = document.getElementById('result');
    let p1 = Number(firstNumber.value) - Number(secondNumber.value);
    result.textContent = p1;
}