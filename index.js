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


// --------------------------------------------------------------------

// You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.

// In this project we will build the Magic Eight Ball using control flow in JavaScript.

// The user will be able to input a question, then our program will output a random fortune.


//1 set a userName in a blank string//
let userName = "Alfonso.";
//2 create a tenary expression to do if the user enter a name or not//
userName = 'Jane' ?  
  console.log(`Hello, ${userName}`) : console.log('Hello!'); 

//3 create a variable userQuestion. the value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball//

let userQuestion = 'would I become a developer ? '

//4 write a console log for user questions //

console.log(userQuestion);

//generate a random number from 0 to 7//

const randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber);

//6 create one more variable named eightBall, set it equal to an empty string//

let eightBall = '';

//7 create a control flow use switch statement//

switch (randomNumber) {
  case 0:
    eightBall = ('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy try again');
 break;
  case 3:
    console.log('Cannot predict now');
     break;
  case 4:
    console.log('Do not count on it');
     break;
  case 5:
    console.log('My sources say no');
     break;
  case 6:
    console.log('Outlook not so good');
    break;
  case 7:
    console.log('Signs point to yes');
    break;
}


// --------------------------------------------------------------

// annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.

// As a timeline, registration would look like this:

// Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

// Race number:

// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.
// Start time:

// Adult registrants run at 9:30 am or 11:00 am.
// Early adults run at 9:30 am.
// Late adults run at 11:00 am.
// Youth registrants run at 12:30 pm (regardless of registration).
// But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.

// If you get stuck during this project or would like to see an experienced developer work through it, click “Get Help“ to see a project walkthrough video.

// assign the ramdon number from 0 to 1000//
let raceNumber = Math.floor(Math.random() * 1000);
//create a variabe that indicate if you are register or not //

let runnerArriveEarly = true ;

// create a variable runner age set a value later//
 
 let runnerAge= 19;


// create a control flow wheter the runner is an adult or not. if the runner is an adult assign a number 1000//

 if (runnerAge >= 18) {
  raceNumber += 1000;
} 

// create another control flow for the runners that got to the race early//

if (runnerArriveEarly && runnerAge >= 18) {
  console.log(`your number is ${raceNumber} and the race starts at 9:30 am`)
  } else if( !runnerArriveEarly && runnerAge >= 18)
   {console.log(`your number is ${raceNumber} and the race starts at 11:00am`)
 } else if(runnerAge < 18) {
  console.log( `your number is ${raceNumber} and the race starts at 12:30 pm`)
}