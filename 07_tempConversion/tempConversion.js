const convertToCelsius = function(number) {
  let converted = (number-32)*5/9;
  
  let c = converted.toFixed(1);
  return Math.round(converted*10)/10;
};

const convertToFahrenheit = function(number) {
  let converted = (number*9/5)+32;
   
   return Math.round(converted*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
