const inquirer = require('inquirer');
const fs = require ('fs');
const pageTemplate = require('./src/page-template');
const employee = require('./lib/Employee');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');
