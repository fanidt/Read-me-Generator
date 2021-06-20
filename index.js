//  packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//  array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title?",
        name: "fileName"

    },
    {
        type: "input",
        message: "What is the description?",
        name: "description"
    },
    {
        type: "Input",
        message: "Indicate the plans for the future of this application if no plans press enter",
        name: "roadmap"

    },
    {
        type: "input",
        message: "What is the Username? (contact username)",
        name: "username"

    },
    {
        type:"input",
        message:"List of authors, please seperate with space",
        name:"Authors"

    },
    {
        type:"input",
        message:"Privide the link to the deployed website or the github repository",
        name:"link"

    },
    {
        type:"input",
        message:"If you want to include a screenshot enter in the form of http://url/to/img.png (link the path to the image), else press enter",
        name: "screenshot",
        

    },
    {
        type:"input",
        message:"Provide an email adress for contact",
        name:"email"

    },
    {
        type: "input",
        message: "What is the installation process?",
        name: "installation"
    },
    {
        type:"input",
        message:"State if you are open for contributions and the requirements for them to be accepted",
        name:"contribute"

    },
    {
        type: "input",
        message: "How is the application used?",
        name: "HowTo"
    },
    {
        type: "list",
        message: "List the license",
        name: "license",
        choices: ["MIT", "osl-3.0", "gpl", "apache-2.0", "artistic-2.0","Unlicensed"]

    },
    {
        type:"input",
        message:"Provide user story, else press enter",
        name:"userstory"

    },
    

];





const markdown = data =>  generateMarkdown(data)






//  function to write README file
function writeToFile(data) {
  return  fs.writeFile ("./utils/README.md", markdown(data) , function(err)
{
    if (err){
        return console.log(err)
    }
    else {
        return console.log("yes")
    }


}


)


}

//  function to initialize app
function init() {
inquirer.prompt(questions)
.then(writeToFile)

}

// Function call to initialize app
init();