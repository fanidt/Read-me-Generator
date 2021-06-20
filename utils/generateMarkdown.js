// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return  `# ${data.fileName}

  ##Description:
  ${data.description}

  ##Badges:

  ##Screenshot:

  ##Installation:
  ${data.installation}

  ##Usage:
  ${data.HowTo}

  ##Support:

  ##Roadmap:

  ##Contributors:

  ##Authors and acknowledgment:
  
  ##Licence:
  ${data.license}

`;
}

module.exports = generateMarkdown;
