"use strict";

console.log("Hello from external Javascript");

var a = 1;
var b = a++;
var c = ++a;

console.log(a, b, c);

var d = "Hello";
var e = false;

d++;
e++;

console.log(d, e);

var perplexed;
perplexed + 2;

console.log(perplexed + 2);

var price = 2.7;
price.toFixed(2);

console.log(price.toFixed(2));

// var price1 = "2.7";
// price.toFixed(2);
//
// console.log(price1.toFixed(2));

isNaN(0);
console.log(isNaN(0));

isNaN(1);
console.log(isNaN(1));

isNaN("");
console.log(isNaN(""));

isNaN("String");
console.log(isNaN("String"));

isNaN("0");
console.log(isNaN("0"));

isNaN("1");
console.log(isNaN("1"));

isNaN("3.145");
console.log(isNaN("3.145"));

isNaN(Number.MAX_VALUE);
console.log(isNaN(Number.MAX_VALUE));

isNaN(Infinity);
console.log(isNaN(Infinity));

isNaN("true");
console.log(isNaN("true"));

isNaN(true);
console.log(isNaN(true));

isNaN("false");
console.log(isNaN("false"));

isNaN(false);
console.log(isNaN(false));


// to illustrate why the isNaN() function is needed:
NaN == NaN;

console.log(NaN == NaN);


!true;
console.log(!true);

!false
console.log(!false);

!!true
console.log(!!true);

!!false
console.log(!!false);

!!0
console.log(!!0);

!!-0
console.log(!!-0);

!!1
console.log(!!1);

!!-1
console.log(!!-1);

!!"hello"
console.log(!!"hello");

!!""
console.log(!!"");

!!''
console.log(!!'');

!!"false"
console.log(!!"false");

!!"0"
console.log(!!"0");

var sample = "Hello Codeup";

sample.length
console.log(sample.length);

sample.toUpperCase();
sample.toLowerCase();

console.log(sample.toUpperCase(), sample.toLowerCase());

sample = sample + " Students"
console.log(sample);

sample = sample.replace("Students", "Class");
console.log(sample);

sample.indexOf("c");
console.log(sample.indexOf("c"));

sample.indexOf("C");
console.log(sample.indexOf("C"));

sample.substring(sample.indexOf("Codeup"), sample.indexOf(" "));
console.log(sample.substring(sample.indexOf("Codeup")), sample.indexOf(" "));

var  littleMermaid = prompt("How may days would you like to rent The Little Mermaid? ");
var BrotherBear =  prompt("How may days would you like to rent Brother Bear");
var hercules =  prompt("How may days would you like to rent Hercules");
var rentalTotal = (parseInt(littleMermaid) + parseInt(BrotherBear) + parseInt(hercules)) * 3;

alert("Rental total is $" + rentalTotal);

// var google = 400, amazon = 380, facebook = 350;
var google = prompt("What is your google rate?");
var amazon = prompt("What is your amazon rate");
var facebook = prompt("What is your facebook rate");

// Collect hours
var googleHours = prompt("How many hours did you work at google?");
googleHours = parseInt(googleHours);

var amazonHours = prompt("How many hours did you work at amazon?");
amazonHours = parseInt(amazonHours);

var facebookHours = prompt("How many hours did you work at facebook?");
facebookHours = parseInt(facebookHours);

var totalDollars = (facebook * facebookHours) + (amazon * amazonHours) + (google * googleHours);

alert("Total dollars $" + totalDollars);

var classFullCapacity = false;
var currentScheduleConflict = false;

var student = !classFullCapacity && !currentScheduleConflict;

alert("Student can attend class " + student);


var itemMax = prompt("How many items do you want to buy?");
itemMax = parseInt(itemMax);
var numOfItemsRequired = 5;
var productOfferNotExpired = false;
var premiumMember = false;

var isOfferValid = (!productOfferNotExpired && premiumMember) || !productOfferNotExpired || itemMax >= numOfItemsRequired;

alert("Offer is valid " + isOfferValid);

var username = ' codeup ';
var password = " notastrongpassword ";

var passwordLength = password.length >= 5;
console.log(passwordLength);

var usernameLength = username.length <= 20;
console.log(usernameLength);


var noWhiteSpace = username.trim() && password.trim();
console.log(noWhiteSpace);
