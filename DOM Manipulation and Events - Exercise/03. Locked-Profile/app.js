function lockedProfile() {
    const lockedButtons = Array.from(document.querySelectorAll('input[value="lock"]'))
    const unlockButtons = Array.from(document.querySelectorAll('input[value="unlock"]'));

    unlockButtons.forEach((el) => {
        el.addEventListener('click', unlockProfile);
    })

    lockedButtons.forEach((el) => {
        el.addEventListener('click', lockProfile);
    })
    
    function unlockProfile(e) {
        e.target.parentNode.querySelector('button').addEventListener('click', clickHandler)
    }

    function lockProfile(e) {
        e.target.parentNode.querySelector('button').removeEventListener('click', clickHandler)
    }

    function clickHandler(e) {
        let lockedCheck = e.target.parentNode.querySelector('input[value="lock"]');
        const hiddenData = e.target.parentNode.querySelector('div');

        if(!lockedCheck.checked) {
            if(hiddenData.style.display == 'block') {
                hiddenData.style.display='none';
                e.target.textContent = "Show more";

            } else {
                hiddenData.style.display='block';
                e.target.textContent = "Hide it";
            }

        } else {
            hiddenData.style.display='none';
            e.target.textContent = "Show more";
        }
    }
}
