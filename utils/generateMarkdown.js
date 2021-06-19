// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          
         # Table of Contents
         -[description](#Description)
         -[installation](#installation)
         -[usage](#usage)
         -[licenses](#licenses)
         -[contribution](#contribution)
         -[test](#test)
         -[username](#username)
         -[profile](#profile) 

         ${response.description}
##description:

    ${response.installation}
##installation:

    ${response.license}
##licenses:

    ${response.Contributions}
##contribution:

    ${response.HowTo}
##usage:

    ${response.username}
## How to reach me:
`;
}

module.exports = generateMarkdown;
