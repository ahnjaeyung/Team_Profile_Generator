const inquirer = require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page-template');
const employee = require('./lib/Employee');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');
const managerPrompt = [
    {
        type: "input",
        message: "Please enter the team manager's name.",
        name: "managerName"
    },
    {
        type: "input",
        message: "Please enter the team manager's employee id.",
        name: "managerId"
    },
    {
        type: "input",
        message: "Please enter the team manager's email address.",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "Please enter the team manager's office number.",
        name: "managerOffice"
    }
]; //end of managerPrompt

const mainMenu = [
    {
        type: "list",
        message: "Please choose one of the following options.",
        choices: ["Add an engineer", "Add an intern", "Finish building my team"],
        name: "menuOption"
    }
]; //end of mainMenu

const engineerPrompt = [
    {
        type: "input",
        message: "Please enter the engineer's name.",
        name: "engineerName"
    },
    {
        type: "input",
        message: "Please enter the engineer's employee id.",
        name: "engineerId"
    },
    {
        type: "input",
        message: "Please enter the engineer's email address.",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "Please enter the engineer's GitHub username.",
        name: "engineerGithub"
    }
]; //end of engineerPrompt

const internPrompt = [
    {
        type: "input",
        message: "Please enter the intern's name.",
        name: "internName"
    },
    {
        type: "input",
        message: "Please enter the intern's employee id.",
        name: "internId"
    },
    {
        type: "input",
        message: "Please enter the intern's email address.",
        name: "internEmail"
    },
    {
        type: "input",
        message: "Please enter the intern's school.",
        name: "internSchool"
    }
]; //end of internPrompt

function init() {
    inquirer.prompt(managerPrompt).then((answers) => {
        console.log(answers);
        mainMenuPrompt();
    })
} //end of init() function definition

function mainMenuPrompt() {
    inquirer.prompt(mainMenu)
    .then((answer) => {
        console.log(answer);
        switch (answer) {
            case "Add an engineer":
                addEngineer();
                break;
            case "Add an intern":
                addIntern();
                break;
            case "Finish building my team":
                writeTeamPage();
                break;
            default:
                console.log("Did not match any options")
        }
    })
} //end of mainMenuPrompt() function definition

function addEngineer() {
    inquirer.prompt(engineerPrompt).then((answer) => {
        console.log(answer);
        mainMenuPrompt();
    })
} //end of addEngineer() function definition

function addIntern() {
    inquirer.prompt(internPrompt).then((answer) => {
        console.log(answer);
        mainMenuPrompt();
    })
} //end of addIntern() function definition

function writeTeamPage(teamList) {
    fs.writeFile('projectREADME.md', markdownStr,
        (err) => {
            if (err) {
                console.log(err);
            }
            console.log("Successful!");
        })
}

init()