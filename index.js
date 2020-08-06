// GETTING STARTED WITH JAVASCRIPT
// Kelvin Weather
// Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

// Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

// With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.



// For example, 283 K converts to 10 °C which converts to 50 °F.

// If you get stuck during this project or would like to see an experienced developer work through it, click “Get Help“ to see a project walkthrough video.


//create a variable named kelvin and set it equal to 293

const Kelvin = 293;

//convert kelvin to celsius by substracting 273 from the kelvin variable

const celsius = Kelvin - 273;


//stablish the farenheit formula  

let Fahrenheit = celsius * (9/5) + 32;



Fahrenheit = Math.floor(Fahrenheit);


console.log('The temperature is ' + Fahrenheit +' degrees Fahrenheit.')