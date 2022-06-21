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

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please entert the title of your project.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project.',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your Github username',
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your full name',
    },
    {
        type: 'input',
        name: 'year',
        message: 'Please enter the current year (yyyy format)',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
    },
    {
        type: 'list',
        loop: false,
        name: 'license',
        message: 'Please select a license from the list',
        choices: licenses,
    },
    {
        type: 'input',
        name: 'path',
        message: 'Please enter the file path of a screenshot of your deployed application, relative to the projecty root folder. Include the file name and file extension! Default is ./assets/images/screenshot.png',
        default: './assets/images/screenshot.png',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any intallation instructions required to use your project',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter any usage instructions for your project',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please enter any credits or acknowledgements for your project',
    },
    {
        type: 'input',
        name: 'contirbution',
        message: 'Please enter instructions on how to contribute to your project',
    },
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