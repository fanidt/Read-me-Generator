// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === "Unlicensed") {
    return ``
  }
  else if (data.license === "MIT") { return `https://img.shields.io/badge/license-MIT-green` }
  else if (data.license === "osl-3.0") { return `https://img.shields.io/badge/license-Open%20Software-orange` }
  else if (data.license === "gpl") { return `https://img.shields.io/badge/license-GNU%20General%20Public-yellow` }
  else if (data.license === "apache-2.0") { return `https://img.shields.io/badge/license-Apache%20-blue` }
  else if (data.license === "artistic-2.0") { return `https://img.shields.io/badge/license-Artistic-red` }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === "Unlicensed") {
    return `Unlicensed`
  }
  else if (data.license === "MIT") { return `License Link: https://opensource.org/licenses/MIT` }
  else if (data.license === "osl-3.0") { return `License Link: https://opensource.org/licenses/OSL-3.0` }
  else if (data.license === "gpl") { return `License Link: https://opensource.org/licenses/GPL-3.0` }
  else if (data.license === "apache-2.0") { return `License Link: https://opensource.org/licenses/Apache-2.0` }
  else if (data.license === "artistic-2.0") { return `License Link: https://opensource.org/licenses/Artistic-2.0` }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// add screenshot
function isScreenshot(data) {
  if (data.screenshot === "") {
    return ``
  }
  else {
    return `##Screenshot: <br />
    ![alt text](${data.screenshot})
  `}
}
//add userstory
function isUserStory(data) {
  if (data.userstory === "") {
    return ``
  }
  else {
    return `##User Story: <br />
  ${data.userstory}
  `}
}
//add roadmap
function isRoadmap(data) {
  if (data.roadmap === "") {
    return ``
  }
  else {
    return `##Roadmap: <br />
  ${data.roadmap}`
  }
}

// table of contents user story
function TableofcontentsSTORY(data) {
  if (data.userstory === "") {
    return ``
  }
  else { return `
  -[User Story](##User Story) <br />` }
}
// table of content Roadmap
function TableofcontentsRoadmap(data) {
  if (data.roadmap === "") {
    return ``
  }
  else { return `
  -[Roadmap](##Roadmap) <br />` }
}

//table of contents screenshot
function Tableofcontentsscreenshot(data) {
  if (data.screenshot === "") {
    return ``
  }
  else { return `
  -[Screenshot](##Screenshot) <br />` }
}

/* MAYBE ADD DIFFERENT AUTHOR RECOGNITION
function isAuthors(data) {

var authorArray = new Array();
authorArray= data.Authors.split(" ")

return authorArray
}
*/

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.fileName}

  ##Link to deployed application/Repository: <br />
  ${data.link}

 #Table of contents <br />
 -[Description](##Description) <br />`+ TableofcontentsSTORY(data) + `
 -[Badges](##Badges) <br />`+ Tableofcontentsscreenshot(data) + `
 -[Installation](##Installation) <br />
 -[Usage](##Usage) <br />
 -[Support](##Support) <br />`+ TableofcontentsRoadmap(data) + `
 -[Contributions](##Contributions) <br />
 -[Authors](##Authors) <br />
 -[License](##Licence) <br />

  ##Description: <br />
  ${data.description}

  ` + isUserStory(data) +
    `
  ##Badges: <br />
  ![alt text](`+ renderLicenseBadge(data) + `)
  
  ` + isScreenshot(data) +
    `
  ##Installation: <br />
  ${data.installation}

  ##Usage: <br />
  ${data.HowTo}

  ##Support: <br />
  Contact us by email at: ${data.email} <br />
  Contact us at Github at: https://github.com/${data.username}

  `+ isRoadmap(data) + `

  ##Contributions: <br />
  ${data.contribute}

  ##Authors: <br />
  ${data.Authors}
  
  ##Licence: <br />
  ${data.license} <br />
  `+ renderLicenseLink(data) + `

`;
}

module.exports = generateMarkdown;
