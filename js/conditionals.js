"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var enterANumber = confirm("Click OK if you would like to enter a number.");
//
//
// if (enterANumber) {
//     enterANumber = prompt("Enter a number please: ");
// } else {
//     alert("Aww you hit cancel!");
// }
//
// var numberEntered = enterANumber;
//
// if (numberEntered % 2 === 0) {
//     alert("Your number is even");
// } else {
//     alert("Your number is odd");
// }
//
// var numberPlusTen = parseInt(numberEntered) + 100;
//
// alert("Number entered plus one hundred =  " + numberPlusTen);
//
// if(numberEntered >= 0) {
//     alert("This number is Positive");
// } else {
//     alert("This number is negative");
// }



/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

// function analyzeColor(color) {
//     if (color === 'red') {
//         alert("Cherries are red.")
//     } else if (color === "orange"){
//         alert("Oranges are orange")
//     } else if (color === "yellow"){
//         alert("The sun is yellow.")
//     } else if (color === "green"){
//         alert("Grass is green")
//     } else if (color === "blue"){
//         alert("The sea is blue")
//     }else if (color === "indigo"){
//         alert("What is indigo??")
//     } else if (color === "violet"){
//         alert("Violet your turning violet!!")
//     }
// }
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// analyzeColor(randomColor);
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// switch (randomColor) {
//     case "red":
//         alert("Cherries are red");
//         break;
//     case "orange":
//         alert("Oranges are orange");
//         break;
//     case "yellow":
//         alert("The sun is yellow")
//         break;
//     case "green":
//         alert("Grass is green");
//         break;
//     case "blue":
//         alert("The sea is blue");
//         break;
//     case "indigo":
//         alert("What is indigo?")
//         break;
//     case "violet":
//         alert("Violet your turning violet!")
//         break;
// }
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// function analyzeColor(userColor) {
//     userColor = prompt("Pick a color");
//     if (userColor === 'red') {
//         alert("Cherries are red.")
//     } else if (userColor === "orange"){
//         alert("Oranges are orange")
//     } else if (userColor === "yellow"){
//         alert("The sun is yellow.")
//     } else if (userColor === "green"){
//         alert("Grass is green")
//     } else if (userColor === "blue"){
//         alert("The sea is blue")
//     }else if (userColor === "indigo"){
//         alert("What is indigo??")
//     } else if (userColor === "violet"){
//         alert("Violet your turning violet!!")
//     } else {
//         alert("I don't recognize that color!")
//     }
// }
// analyzeColor();

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

// function calculateTotal(luckyNum, total) {
//     luckyNum = luckyNumber;
//     total = 100;
//
//     if (luckyNum === 1) {
//          alert("Your lucky number is 1! You get a " + (.10 * total) + "% discount.");
//     } else if (luckyNum === 2) {
//         alert("Your lucky number is 2! You get a " + (.25 * total) + "% discount.");
//     } else if (luckyNum === 3) {
//         alert("Your lucky number is 3! You get a " + (.35 * total) + "% discount.");
//     } else if (luckyNum === 4) {
//         alert("Your lucky number is 4! You get a " + (.50 * total) + "% discount.");
//     } else {
//         alert("Jackpot!!! Your number is 5!! You get Free stuff! " + (total - total));
//     }
// }
// calculateTotal(luckyNumber, 100);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

// function calculateTotal (luckyNum, total) {
//     luckyNum = luckyNumber;
//     total = prompt("Please enter your total: ");
//     var customerTotal = parseInt(total);
//
//     if (luckyNum === 1) {
//         alert("Your original price $" + customerTotal);
//         alert("# 1 Your discounted price $" + customerTotal * .10);
//     } else if (luckyNum === 2) {
//         alert("Your original price $" + customerTotal);
//         alert("# 2 Your discounted price $" + customerTotal * .25);
//     } else if (luckyNum === 3) {
//         alert("Your original price $" + customerTotal);
//         alert("# 3 Your discounted price 4" + customerTotal * .35);
//     } else if (luckyNum === 4) {
//         alert("Your original price $" + customerTotal);
//         alert("# 4 Your discounted price $" + customerTotal * .50);
//     } else if (luckyNum === 5) {
//         alert("Your original price $" + customerTotal);
//         alert("# 5 Your discounted price $" + customerTotal * 1.0);
//     }
// }
// calculateTotal(luckyNumber);
