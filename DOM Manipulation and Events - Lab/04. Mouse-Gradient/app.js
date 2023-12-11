function attachGradientEvents() {
    const resultDiv = document.querySelector('#result');

    const gradient = document.querySelector('#gradient');
    const gradientWidth = gradient.clientWidth

    gradient.addEventListener('mousemove', moveHandler)
    gradient.addEventListener('mouseout', outHandler);

    function moveHandler(e) {
        let power = e.offsetX / (e.target.clientWidth - 1)
        let percentage = Math.trunc(power * 100)
        resultDiv.textContent = `${percentage}%`

    }

    function outHandler(e) {
        resultDiv.textContent = '';
    }

}