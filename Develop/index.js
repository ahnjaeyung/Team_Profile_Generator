const inquirer = require('inquirer');
const fs = require('fs');
const pageTemplate = require('./src/page-template');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
let team = [];
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
        name: "officeNumber"
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
        name: "github"
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
        name: "school"
    }
]; //end of internPrompt

function init() {
    inquirer.prompt(managerPrompt).then((answers) => {
        console.log(answers);
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
        console.log(manager)
        team.push(manager);
        console.log(team);
        mainMenuPrompt();
    })
} //end of init() function definition

function mainMenuPrompt() {
    inquirer.prompt(mainMenu)
    .then((answer) => {
        console.log(answer);
        switch (answer.menuOption) {
            case "Add an engineer":
                addEngineer();
                break;
            case "Add an intern":
                addIntern();
                break;
            case "Finish building my team":
                writeTeamPage(team);
                break;
            default:
                console.log("Did not match any options")
        }
    })
} //end of mainMenuPrompt() function definition

function addEngineer() {
    inquirer.prompt(engineerPrompt).then((answers) => {
        console.log(answers);
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
        console.log(engineer);
        team.push(engineer);
        console.log(team);
        mainMenuPrompt();
    })
} //end of addEngineer() function definition

function addIntern() {
    inquirer.prompt(internPrompt).then((answers) => {
        console.log(answers);
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
        console.log(intern);
        team.push(intern);
        console.log(team);
        mainMenuPrompt();
    })
} //end of addIntern() function definition

function writeTeamPage(team) { 
    const outputPage = pageTemplate(team);
    fs.writeFile("./dist/index.html", outputPage,
    (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Successful!");
    })
} //end of writeTeamPage() function definition

init()