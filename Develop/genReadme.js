function genLicenseBadge(license) {
    if (license !== 'none') {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
}

function genReadme(data) {
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

module.exports = genReadme;
