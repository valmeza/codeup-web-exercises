"use strict";

// function status(response) {
//     if (response.status >= 200 && response.status < 300) {
//         return Promise.resolve(response)
//     } else {
//         return Promise.reject(new Error(response.statusText))
//     }
// }
// function json(response) {
//     return response.json()
// }
//
// fetch(url, {headers: {'Authorization': `token ${PROMISE_KEY}`}})
//     .then(status)
//     .then(json)
//     .then(function (data) {
//         console.log('Request succeeded with JSON response', data);
//         data.forEach(data => {
//             console.log(data);
//
//         })
//     }).catch(function (error) {
//     console.log('Request failed', error);
// });

function getLastCommit(username) {
    let url = `https://api.github.com/users/${username}/events/public`;
    console.log(url);
    return fetch(url, {headers: {'Authorization': `token ${PROMISE_KEY}`}})
        .then(response => response.json()
            .then (listOfEvents => {
                for (let event of listOfEvents) {
                    console.log(event)
                    if(event.type === 'PushEvent') {
                        // console.log(event.created_at);
                        return event.created_at
                    }
                }
            })
        )
}
getLastCommit('valmeza').then(lastCommit => document.body.innerHTML = `${lastCommit}`);

const wait = miliseconds => {
    return new Promise ( (resolved, reject) => {
        setTimeout(() => {
            resolved();
        }, miliseconds);
    });
};
wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
