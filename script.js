const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fb5dd3b7a6msh866968be211ae70p1cf79djsn994c0f555d66',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather = (city) => {
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    cityname.innerHTML = city;
    async function a() {
        try {
            const response = await fetch(url, options);
            const result = await response.json(); // Parse the response as JSON
            cloud_pct.innerHTML = result.cloud_pct;
            temp.innerHTML = result.temp;
            temp2.innerHTML = result.temp;
            feels_like.innerHTML = result.feels_like;
            humidity.innerHTML = result.humidity;
            humidity2.innerHTML = result.humidity;
            min_temp.innerHTML = result.min_temp;
            max_temp.innerHTML = result.max_temp;
            wind_speed.innerHTML = result.wind_speed;
            wind_speed2.innerHTML = result.wind_speed;
            wind_degrees.innerHTML = result.wind_degrees;
            sunrise.innerHTML = result.sunrise;
            sunset.innerHTML = result.sunset;

            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    a();
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getweather(city.value);
});

// Initial call with a default city
getweather("Bhubaneswar");

// Select the button element by its ID
const reloadBtn = document.getElementById('reloadBtn');

// Add a click event listener to the button
reloadBtn.addEventListener('click', () => {
    // Reload the page
    location.reload();
});


