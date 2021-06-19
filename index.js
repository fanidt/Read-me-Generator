// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title?",
        name: "title"

    },
    {
        type: "input",
        message: "What is the description?",
        name: "Description"
    },
    {
        type: "input",
        message: "What is the Username?",
        name: "username"

    },
    {
        type: "input",
        message: "What is the installation process?",
        name: "Installation"
    },
    {
        type: "input",
        message: "How is the application used?",
        name: "HowTo"
    },
    {
        type: "input",
        message: "Who should be credited(list collaborators, organizations and other contributors)",
        name: "Contributions"

    },
    {
        type: "input",
        message: "List the license",
        name: "license "

    }
];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = "README.me"


    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), function (err) {
        if (err) {
            return console.log(err);
        }
        else {
            console.log("Congratulations your README file is ready")
        }
    })
}
// TODO: Create a function to initialize app
function init() { 

    inquirer
    .prompt(questions)
    .then(writeToFile)
}

// Function call to initialize app
init();
