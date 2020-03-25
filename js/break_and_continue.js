"use strict";

var userPrompt = Number(prompt("Pick and odd number from 1 - 50"));

console.log("number to skip is: " + userPrompt);

for (i = 1; i < 50; i++) {

    if(userPrompt % 2 === 0) {
        console.log("That is an invalid number: " + userPrompt);
        break;
    }
    if (i % 2 === 0 ) {
        continue;
    }
    if (userPrompt === i) {
        console.log("Yikes! Skipping that number! " + userPrompt);
        continue;
    } else {
        console.log("here is an odd number: " + i);
    }
    if (i >= 49) {
        break;
    }
}

var userNumber = 0;

do {
    userNumber = Number(prompt("Please pick a number between 1 - 50"));
    if (userNumber < 1 || userNumber > 50) {
        alert(userNumber + " is not between 1 and 50");
    } else if (userNumber % 2 === 0 ) {
        alert(userNumber + ' number is not odd.');
    } else if (isNaN(userNumber)) {
        alert(userNumber + " is not a number.")
    } else {
        console.log('Yay! You entered a valid number.');
        break;
    }
} while (true);

console.log("Number to skip is: " + userName);

for (var i = 1; i <= 50; i+=2) {
    if (i === userNumber) {
        console.log("Yikes! skipping number: " + userNumber);
        continue; // this will increment and continue until the condition is met.
    }
    console.log("Here is an odd number: " + i);
}

