const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = ({title, description, username , name, year, email, license, path, installation, usage, credits, contribution}) {

`# ${title}

## Description

${description}
 
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

${license}
Copyright (c) ${year} ${name}


## Credits 

${credits}

## Contributing

${contribution}

## Questions

For any questions pertaining to this project, the developer can be reached via any of the contact methods listed below. 
Please ensure that you include the name of this project ("${title}") in any communications. 

- ${email}

## Screenshot of Deployed Application
![Screenshot of Application](${path})`
}

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

const licenseLink = {
    'MIT License': 'https://opensource.org/licenses/MIT',
    'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'GNU AGPLv3': 'https://www.gnu.org/licenses/agpl-3.0',
    'GNU LGPLv3': 'https://www.gnu.org/licenses/lgpl-3.0',
    'Mozilla Public License 2.0': 'https://opensource.org/licenses/MPL-2.0',
    'Apache License 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'Boost Software License 1.0': 'https://www.boost.org/LICENSE_1_0.txt',
    'The Unlicense': 'http://unlicense.org/'
  };

const badges = {
    'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
    'GNU GPLv3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
    'GNU AGPLv3': '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]',
    'GNU LGPLv3': '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]',
    'Apache License 2.0': '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]',
    'Boost Software License 1.0': '[![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]',
    'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
  };
  
  
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