function genLicenseBadge(license) {
  if (license !== 'none') {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

function generateMarkdown(data) {
  return `
# ${data.title}
${genLicenseBadge(data.license)}
## Description
${data.description}
## Project Deployment
${data.link}
## Table of Contents
* [Features](#features)
* [Dependencies](#dependencies)
* [Usage](#usage)
* [Credits](#credits)
* [Contact](#contact)
## Features
${data.features}
## Dependencies
* ${data.dependencies}
## Usage
${data.usage}
## Credits
${data.credits}
## Contact
If you have any questions or comments or would like to contribute to
the project please contact me [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect)

`;
}

module.exports = generateMarkdown;

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;

