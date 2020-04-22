"use strict";
const url = 'https://api.github.com/users';
console.log(url);

// fetch(url, {headers: {'Authorization': `token ${PROMISE_KEY}`}}).then(response => {
//     response.json().then(user => {
//         user.forEach(userObj => {
//             console.log(userObj.login)
//         });
//     });
// });

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}
function json(response) {
    return response.json()
}

fetch(url)
    .then(status)
    .then(json)
    .then(function (data) {
        console.log('Request succeeded with JSON response', data);
        data.forEach(data => {
            console.log(data.login);
        })
    }).catch(function (error) {
    console.log('Request failed', error);
});
