const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        message: "What is the project title?",
        name: "project"
    },
    {
        message: "What is the project description?",
        name: "description"
    },
    {
        message: "What are the project installation instructions?",
        name: "installation"
    },
    {
        message: "What are the project usage instructions?",
        name: "usage"
    },
    {
        message: "What are the project test instructions?",
        name: "testIns"
    },
    {
        type: "list",
        message: "Select a license:",
        choices: ["ex1", "ex2"],
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
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function () {
        console.log("Asked questions");
    })
}

// function call to initialize program
init();
