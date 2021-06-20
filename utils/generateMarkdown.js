// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


function isScreenshot(data) {
  if (data.screenshot===""){
return ``
  }
  else { return `##Screenshot:
  ${data.screenshot}
  `}
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
  return  `# ${data.fileName}

  ##Link to deployed application/Repository:
  ${data.link}

  ##Description:
  ${data.description}

  ##Badges:

  ` + isScreenshot(data)+
  `

  ##Installation:
  ${data.installation}

  ##Usage:
  ${data.HowTo}

  ##Support:
  Contact us by email at: ${data.email}
  Contact ua at Github: ${data.username}

  ##Roadmap:
  ${data.roadmap}

  ##Contributions:
  ${data.conribute}

  ##Authors:
 ${data.Authors}
  
  ##Licence:
  ${data.license}

`;
}

module.exports = generateMarkdown;
