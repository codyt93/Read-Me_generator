

const badges=["MIT","IBN","MOZILLA","NONE",]
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license===badges[0]) {
    return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  }
  else if (license===badges[1]) { 
    return "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)"
  }
  else if (license===badges[2]) {
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
  }
  else if (license===badges[3]) {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===badges[0]) {
    return "(https://opensource.org/licenses/MIT)"
  }
 else if (license===badges[1]) { 
    return "(https://opensource.org/licenses/IPL-1.0)"
  }
 else if (license===badges[2]) {
    return "(https://opensource.org/licenses/MPL-2.0)"
  }
 else if (license===badges[3]) {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===badges[0]) {
    return `${badges[0]}`
  }
 else if (license===badges[1]) { 
    return `${badges[1]}`
  }
 else if (license===badge[2]) {
    return `${badges[2]}`
  }
 else if (license===badges[3]) {
    return `${badges[3]}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Guidelines
${data.guidelines}

## Instructions
${data.instructions}

## License
${renderLicenseBadge(data.license)}


`;
}

module.exports = generateMarkdown;
