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

