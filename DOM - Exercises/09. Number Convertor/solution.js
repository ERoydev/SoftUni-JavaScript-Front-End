function solve() {
    const selectMenu = document.getElementById('selectMenuTo');
    selectMenu.children[0].value = 'binary';
    selectMenu.children[0].textContent = "Binary";
    let option = document.createElement('option');
    option.value = "hexadecimal";
    option.textContent = "Hexadecimal";
    selectMenu.appendChild(option);

    const button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', clickHandler)

    function clickHandler(e) {
        const inputNumber = document.getElementById('input').value;
        const selectedOperation = document.getElementById('selectMenuTo').value;
        const output = document.getElementById('result');

        if(selectedOperation == 'binary') {
            let result = toBinary(inputNumber)
            output.value = result

        } else if (selectedOperation == 'hexadecimal') {
            let result = toHexadecimal(inputNumber)
            output.value = result
        }
    }

    function toBinary(number) {
        return Number(number).toString(2);
    }

    function toHexadecimal(number) {
        return Number(number).toString(16).toUpperCase();
    }
}
