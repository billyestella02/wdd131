// weather information
const temperature = document.querySelector("#temperature");
const weather = document.querySelector("#weather");
const windSpeed = document.querySelector("#wind-speed");
const windChill = document.querySelector("#wind-chill");

// weather details in celsius and km
let currentTemperature = 10;
let currentWeather = "Partly Cloudy";
let currentWindSpeed = 6;
let currentWindChill = 0;

temperature.innerHTML = `${currentTemperature} °C`;
weather.innerHTML = currentWeather;
windSpeed.innerHTML = `${currentWindSpeed} km/h`;

// needed conversion formula
function celsiusToFahrenheit(temp) {
    return (temp * 9 / 5) + 32;
}

function kilometerToMiles(distance) {
    return roundTo2Decimal(distance);
}

function fahrenheitToCelsius(temp) {
    return (temp - 32) * 5 / 9;
}

// Using Number.EPSILON to ensure accuracy in rounding off
// https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
function roundTo2Decimal(num) {
    return Math.round(((num * 0.621371) + Number.EPSILON) * 100) / 100;
}

function calculateWindChill(temp, windSpd) {
    const tempF = celsiusToFahrenheit(temp);
    const windSpdM = kilometerToMiles(windSpd); 
    return 35.74 + (0.6215 * tempF) - (35.75 * (windSpdM ** 0.16)) + (0.4275 * tempF * (windSpdM ** 0.16)); 
}

if (currentTemperature <= 10 && currentWindSpeed > 4.8) {
    currentWindChill = fahrenheitToCelsius(calculateWindChill(currentTemperature, currentWindSpeed));
    windChill.innerHTML = `${roundTo2Decimal(currentWindChill)} °C`;
} else {
    windChill.innerHTML = "N/A";
}
 
//footer details
const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
const date = new Date(document.lastModified);

currentYear.innerHTML = today.getFullYear() + " &#9830 Billy Estella &#9830 " + "Philippines";

const dateFormatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeStyle: 'medium' });
lastModified.innerHTML = "Last Modified: " + dateFormatter.format(date);

