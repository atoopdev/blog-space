fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=seattle")
.then((response) => response.json())
.then((json) => console.log("weather: ", json))