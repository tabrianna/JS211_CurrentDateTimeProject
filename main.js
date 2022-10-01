// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

let convertNumber = () => {
  console.log(parseInt(convertNumber))
}

// Write a JavaScript program to convert a string to the number.
let convertString = () => {
  console.log(Number(convertString))
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  const dataType = () => {
    console.log(typeof dataType)
  }

  
// Write a JavaScript program that adds 2 numbers together.
let num1 = 5;
let num2 = 6;

let sum = num1 + num2;


console.log("The Sum of " + num1 + "and" + num2 + "is: " + sum);



// Write a JavaScript program that runs only when 2 things are true.
function test50(x, y)
if(x == 50 && y == 50)
{
  return ((x + y === 100))
}

// Write a JavaScript program that runs when 1 of 2 things are true.

function test100(x, y)
if(x < 100 || y > 100)
{
  return (console.log("true"))
}

// Write a JavaScript program that runs when both things are not true.  
function test(animal)
if (animal != "zebra" && animal != "bird")
{ 
  return (console.log("true"))
}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
