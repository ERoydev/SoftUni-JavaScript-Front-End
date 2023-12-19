function attachEvents() {
    WEATHER = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
    }

    const baseUrl = 'http://localhost:3030/jsonstore/forecaster/locations/'

    const inputField = document.querySelector('#location');
    const submitButton = document.querySelector('#submit');
    const divForecast = document.querySelector('#forecast');

    const current = document.querySelector('#current');
    const upcoming = document.querySelector('#upcoming');

    submitButton.addEventListener('click', getWeather)

    function getWeather(e) {
        fetch(baseUrl)
            .then(res => res.json())
            .then((result) => {
                for(let el of result) {
                    if(el.name == inputField.value) {
                        return el.code;
                    }
                }
            })
            .then((code) => {
                fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
                    .then(res => res.json())
                    .then((result) => {
                        const cityName = result.name;
                        const condition = result.forecast.condition;
                        const tempHigh = result.forecast.high;
                        const tempLow = result.forecast.low;

                        const divContainer = document.createElement('div');
                        divContainer.classList.add('forecasts');
                        
                        const spanSymbol = document.createElement('span');
                        spanSymbol.classList.add('condition', 'symbol');
                        spanSymbol.innerHTML = WEATHER[condition];
                        
                        const spanConditionContainer = document.createElement('span');

                        const spanName = document.createElement('span');
                        spanName.classList.add('forecast-data')
                        const spanDegrees = spanName.cloneNode(true);
                        const spanWeather = spanName.cloneNode(true);

                        spanName.textContent = cityName;
                        spanDegrees.innerHTML = `${tempLow}&#176;/${tempHigh}&#176;`;
                        spanWeather.textContent = condition;

                        spanConditionContainer.appendChild(spanName);
                        spanConditionContainer.appendChild(spanDegrees);
                        spanConditionContainer.appendChild(spanWeather);

                        divContainer.appendChild(spanSymbol);
                        divContainer.appendChild(spanConditionContainer);

                        current.appendChild(divContainer);

                    })
                    .catch((err) => {
                        const message = document.createElement('div');
                        message.textContent = 'Error';
                        divForecast.appendChild(message);
                    })
                return code
            })
            .then((code) => {
                fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
                    .then(res => res.json())
                    .then((result) => {
                        const divContainer = document.createElement('div');
                        divContainer.classList.add('forecast-info');

                        for(let day of result.forecast) {
                            const condition = day.condition;
                            const tempHigh = day.high;
                            const tempLow = day.low;

                            const spanUpcomingContainer = document.createElement('span');
                            spanUpcomingContainer.classList.add('upcoming');

                            const spanSymbol = document.createElement('span');
                            spanSymbol.classList.add('symbol');
                            spanSymbol.innerHTML = WEATHER[condition];

                            const spanDegree = document.createElement('span');
                            spanDegree.classList.add('forecast-data');
                            spanDegree.innerHTML = `${tempLow}&#176;/${tempHigh}&#176;`;


                            const spanWeather = document.createElement('span');
                            spanWeather.classList.add('forecast-data');
                            spanWeather.textContent = condition;

                            spanUpcomingContainer.appendChild(spanSymbol);
                            spanUpcomingContainer.appendChild(spanDegree);
                            spanUpcomingContainer.appendChild(spanWeather);

                            divContainer.appendChild(spanUpcomingContainer);
                        }

                        upcoming.appendChild(divContainer);
                    })
                    .catch((er) => {
                        const message = document.createElement('div');
                        message.textContent = 'Error';
                        divForecast.appendChild(message);
                    })
            })
            .finally(() => {
                divForecast.style.display='block';
            })
    }
}

attachEvents();