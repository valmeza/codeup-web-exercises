"use strict";

function showMultiplicationTable (number) {
    for (i = 1; i <= 10; i++) {
        console.log(number + ' X ' + i  + " = "+ (number * i));
    }
}
showMultiplicationTable(3);


Math.floor(Math.random() * 200) + 20;

for (var i = 1, random = Math.floor(Math.random() * 200) + 20; i <= 10; i++) {
    if (random % 2 === 0 ) {
        console.log(random + " is even");
        random++;
    } else {
        console.log(random + " number is odd");
        random++;
    }
}


for (i = 1; i <= 9; i++) {
    console.log(i);
}

for (i = 100; i >= 5 ; i--) {
    if (i % 5 === 0) {
        console.log(i);
    }
}