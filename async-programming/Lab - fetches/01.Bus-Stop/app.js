function getInfo() {
    const stopId = document.querySelector('#stopId').value;
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    const divName = document.querySelector('#stopName');
    const ulBuses = document.querySelector('#buses');

    ulBuses.innerHTML = '';

    fetch(`${baseUrl}/${stopId}`)
        .then(res => res.json())
        .then((result) => {
            divName.textContent = result.name;
            const numberBus = Object.keys(result.buses)

            for(let bus of numberBus) {
                const li = document.createElement('li');
                li.textContent = `Bus ${bus} arrives in ${result.buses[bus]} minutes`;
                ulBuses.appendChild(li);
            }
        })
        .catch((result) => {
            divName.textContent = "Error";
        })

}