const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = ('./generateMarkdown.js');

const licenses = [
    'MIT License',
    'GNU GPLv3',
    'GNU AGPLv3',
    'GNU LGPLv3',
    'Mozilla Public License 2.0',
    'Apache License 2.0',
    'Boost Software License 1.0',
    'The Unlicense',
];


// inquirer
//     .prompt([

//     ])
//     .then((data) => {
//         const filename = `${data.name.toLowerCase().split(' ').join('')}readme.json`

//         fs.writeFile(filename, JSON.stringify(data, null,'\t'), (err) =>
//         err ? console.log(err) : console.log('Success!')
//         );
//     });