const inquirer = require('inquirer');
const fs = require('fs');
const fileGenerator = ('./fileGenerator')

inquirer
    .prompt([

    ])
    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}readme.json`

        fs.writeFile(filename, JSON.stringify(data), (err) =>
        err ? console.log(err) : console.log('Success!')
        );
    });