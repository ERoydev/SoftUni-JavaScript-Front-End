function focused() {
    const divElements = document.querySelectorAll('input')

    for(let el of divElements) {
        el.addEventListener('focus', clickHandler)
        el.addEventListener('blur', blurHandler)
    }

    function clickHandler(e) {
        const divElement = e.currentTarget.parentNode
        divElement.classList.add('focused')
    }

    function blurHandler(e) {
        const divElement = e.currentTarget.parentNode
        divElement.classList.remove('focused')
    }
}