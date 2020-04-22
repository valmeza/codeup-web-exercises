"use strict";
const url = 'https://api.github.com/users';
console.log(url);

fetch(url, {headers: {'Authorization': `token ${PROMISE_KEY}`}});
