// function to generate markdown for README
function generateMarkdown(data) {
  return `
![Shield](https://img.shields.io/badge/license-${data.license}-blue)
# ${data.title}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.testIns}

## Questions
<a href="https://github.com/${data.ghUser}">Github</a>

Email me at ${data.email} with any further questions.
`;
}

module.exports = generateMarkdown;