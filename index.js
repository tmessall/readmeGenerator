const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        // inquirer defaults to input for type
        message: "What is the project title?",
        name: "title"
    },
    {
        message: "What is the project description?",
        name: "description"
    },
    {
        message: "What are the installation instructions?",
        name: "installation"
    },
    {
        message: "What are the usage instructions?",
        name: "usage"
    },
    {
        message: "What are the contribution guidelines?",
        name: "contributing"
    },
    {
        message: "What are the test instructions?",
        name: "testIns"
    },
    {
        type: "list",
        message: "Select a license:",
        choices: ["ISC", "MIT", "BSD3", "Apache 2.0"],
        name: "license"
    },
    {
        message: "What is your github username?",
        name: "ghUser"
    },
    {
        message: "What is your email address?",
        name: "email"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    console.log(data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (response) {
        try {
            writeToFile("example.md", generateMarkdown(response));
        } catch (error) {
            console.log("error");
        }
    })
}

// function call to initialize program
init();
