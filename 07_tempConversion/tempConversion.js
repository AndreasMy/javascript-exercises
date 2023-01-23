const convertToCelsius = function(farenheit) {
  let toCelcius = (farenheit - 32) * (5 / 9);
  if (toCelcius % 1 !== 0) {
    let roundedCelcius = Math.round(toCelcius * 10) / 10;
    return roundedCelcius;
  }
  return toCelcius;
};

const convertToFahrenheit = function(celcius) {
  let toFarenheit = (celcius * 1.8) + 32;
  if (toFarenheit % 1 !== 0) {
    let roundedFarenheit = Math.round(toFarenheit * 10) / 10;
    return roundedFarenheit;
  }
  return toFarenheit;
};

convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);
convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
