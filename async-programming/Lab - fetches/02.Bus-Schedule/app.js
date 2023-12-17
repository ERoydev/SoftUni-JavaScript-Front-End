function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';
    const infoBox = document.querySelector('.info');

    const departBtn = document.querySelector('#depart');
    const arriveBtn = document.querySelector('#arrive');

    let currentStation = '';
    let nextStation = '';


    function depart() {

        if(infoBox.textContent === "Not Connected"){
            fetch(`${baseUrl}/depot`)
                .then(res => res.json())
                .then((result) => {
                    infoBox.textContent = `Next stop Depot`;
                    currentStation = 'Depot';
                    nextStation = result.next;
                    arriveBtn.disabled=false;
                    departBtn.disabled=true;
                })

          
        } else {
            fetch(`${baseUrl}/${nextStation}`)
                .then(res => res.json())
                .then((result) => {
                    currentStation = result.name;
                    nextStation = result.next;
                    infoBox.textContent = `Next stop ${currentStation}`;
                    arriveBtn.disabled=false;
                    departBtn.disabled=true;
                })
        }
    }

    async function arrive() {
        
        infoBox.textContent = `Arriving at ${currentStation}`;
        arriveBtn.disabled=true;
        departBtn.disabled=false;
   
    }

    return {
        depart,
        arrive
    };
}

let result = solve();