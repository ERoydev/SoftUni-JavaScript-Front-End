function attachEventsListeners() {
    const allButtons = Array.from(document.querySelectorAll('input[type="button"]'));
    const allFields = Array.from(document.querySelectorAll('input[type="text"]'));
    
    allButtons.forEach((btn) => {
        btn.addEventListener('click', convertAll);
    })

    function convertAll(e) {
        const divElement = e.target.parentNode
        const time = Number(divElement.querySelector('input[type="text"]').value);
        const timeType = divElement.children[1].id;
        let info = {};
      
        if(timeType == "days") {
            info = {"hours": time * 24, "minutes": time * 24 * 60, "seconds": time * 24 * 3600};

        } else if (timeType == "hours") {
            info = {"days": time / 24, "minutes": time * 60, "seconds": time * 3600};

        } else if (timeType == "minutes") {
            info = {"days": time / 60 / 24, "hours": time / 60, "seconds": time * 60};

        } else {
            info = {"days": time / 3600 / 24, "hours": time / 3600, "minutes": time / 60};
        }

        for(let field of allFields) {
            if(info.hasOwnProperty(field.id)) {
                console.log(field.value = info[field.id])
            }
        }
    }   
}
