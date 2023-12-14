function attachEventsListeners() {
    let [inputField, convertButton, outputField] = document.getElementsByTagName('input');
    convertButton.addEventListener('click', convert);

    let [inputOption, outputOption] = document.getElementsByTagName('select');

    let convertionRates = {
        'km': 1000,
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'mi': 1609.34,
        'yrd': 0.9144,
        'ft': 0.3048,
        'in': 0.0254,
    }

    function convert(e) {
        let inputDistance = Number(inputField.value);
        let inputUnits = inputOption.value;
        let outputUnits = outputOption.value;

        let meters = inputDistance * convertionRates[inputUnits];
        let converted = meters / convertionRates[outputUnits];
        outputField.value = converted;
    }
}