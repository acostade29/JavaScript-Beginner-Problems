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



// -----------------------------------------------------


//Dogs Year
// Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?

// Here’s how you convert your age from “human years” to “dog years”:

// The first two years of a dog’s life count as 10.5 dog years each.
// Each year following equates to 4 dog years.
// Before you start doing the math in your head, let a computer take care of it! With your knowledge of math operators and variables, use JavaScript to convert your human age into dog years.



//Set a varianble called my age to be equal to your current age

let myAge = 29;


//create a variable called early yEars to be equal to 2
let earlyYears = 2;

earlyYears *= 10.5;



let laterYears = myAge -2;


laterYears *=4;

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;

let myName = 'Alfonso'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years. `)


// ----------------------------------------------------------------
// Let’s create a program that keeps track of the way the environment changes with the seasons. Write a conditional statement to make this happen!


let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}


// --------------------------------------------------------------

// Let’s write a switch statement to decide what medal to award an athlete.

let athleteFinalPosition = 'first place';



switch(athleteFinalPosition) {
case'first place':
console.log('You get the gold medal!');
break;

case'second place':
console.log('You get the silver medal!');
break;

case'third place':
console.log('You get the bronze medal!');
break;

default:
console.log('No medal awarded.');
break;

}