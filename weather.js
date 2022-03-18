// units=imperial converts temps from kelvins to fahrenheit
fetch("https://apis.scrimba.com/openweathermap/data/2.5/weather?q=seattle&units=imperial")
.then((response) => response.json())
.then((json) => console.log("weather: ", json))