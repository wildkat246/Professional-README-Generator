// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require(`./utils/generateMarkdown`);

inquirer.prompt([
    {
        type: 'input',
        message: 'WHat is the title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How many table of contents?',
        name: 'contents',
    },
    {
        type: 'input',
        message: 'WHat installations will you need?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What will the app be used for?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'WHat license will be used?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'What will you be contributing?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'what commands wiil need to test?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'what is you github address?',
        name: '',
    },
  ])
  .then((response) => {
    resposne.confirm === response.input
  })
  
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
