const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate(value) {
            if (value) {
                return true;
            } else {
                return 'Title of the project cannot be blank!'
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of your project.',
        validate(value) {
            if (value) {
                return true;
            } else {
                return 'Description of the project cannot be blank!'
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please explain how to use your application.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GNU', 'Apache'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide your contribution guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions for testing the project.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate(value) {
            if (value) {
                return true;
            } else {
                return 'Please provide your GitHub username!'
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate(value) {
            if (value) {
                return true;
            } else {
                return 'Please provide your email address!'
            }
        }
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your README has been generated. Please find it in the "output" folder.');
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            ;
            const filename = './output/README.md';
            writeToFile(filename, generateMarkdown(answers));
        })
}

// function call to initialize program
init();
