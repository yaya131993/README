// Packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
inquirer.prompt
  questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Describe your project here.',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'How do you install the app?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How to use the app?',
    },
    {
        type: 'input',
        name: 'Contributors',
        message: 'Who contributed on the making of this app?',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Instructions on how to test the app.',
    }, 
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub?',
    }, 
    {
        type: 'input',
        name: 'Email',
        message: 'What is your Email?',
    }, 
];  


function writeToFile(fileName, data) {    //function to write a read me file

    fs.writeFile(fileName, data, function(err) {
    console.log(fileName)
    console.log(data)
    if (err) {
        return console.log(err)
    } else {
        console.log("Successfull ReadMe")
    }
})

}

  
// function to initialize app
function init() {
    inquirer.prompt(questions)
     .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
      });
    }
  
  init();    // Function call to initialize app
