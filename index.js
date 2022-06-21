const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = ({title, description, username , name, year, email, license, path, installation, usage, credits, contribution}) =>
`# ${answers.title}

## Description

${answers.description}
 
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${answers.installation}

## Usage

${answers.usage}

## License

${answers.license}
Copyright (c) ${answers.year} ${answers.name}
License details can be found [here](${licenseLink[selectedLicense]})
## Credits 
${answers.credits}

## Contributing

${answers.contribution}

## Questions

For any questions pertaining to this project, the developer can be reached via any of the contact methods listed below. 
Please ensure that you include the name of this project ("${answers.title}") in any communications. 
- ${github}
- ${email}
## Screenshot of Deployed Application
![Screenshot of Application](${answers.path})`

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

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter the title of your project.',
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
    ])
    .then((data) => {
        const readmeContent = generateMarkdown(data);

        fs.writeFile('readme.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Success!!!')
        )
    });

    

       // const filename = `${data.title.toLowerCase().split(' ').join('')}readme.json`

        // fs.writeFile(filename, JSON.stringify(data, null,'\t'), (err) =>
        // err ? console.log(err) : console.log('Success!')
        // );