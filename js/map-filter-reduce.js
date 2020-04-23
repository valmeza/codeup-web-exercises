"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const userLanguage = users.filter(language => language.languages.length >= 3);
console.log(userLanguage);

const userEmail = users.map(mail => mail.email);
console.log(userEmail);

const averageYears = users.reduce((acc, value) => acc + value.yearsOfExperience, 0) / users.length;
console.log(averageYears);

const longestEmail = users.reduce((longest, user) => {
    if(user.email.length > longest.length) {
        return user.email;
    } else {
        return longest;
    }
}, '');
console.log(longestEmail);

const everyone = users.reduce((names, user) => {
    if(names !== '') {
        names += ', '
    }
   return names + user.name;
}, '');
console.log(`Instructor names: ${everyone}`);

// using join
console.log("Same result using join: "+ users.map(user => user.name).join(', '));

// bonus exercise
