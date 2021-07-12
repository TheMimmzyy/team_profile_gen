const { prompt } = require("inquirer");
const Manager = require("./lib/Mgr");
const Engineer = require("./lib/Eng");
const Intern = require("./lib/Int");

const path = require("path");
const fs = require("fs")

const render = require("./lib/renderhtml");
const teamMembers = [];
const initial = [
   {
      name: "name",
      message: "What is the the Manager's name?",
      default: " "
   },
   {
      name: "id",
      message: "What is the the Manager's id?",
      default: " "
   },
   {
      name: "email",
      message: "What is the the Manager's email?",
      default: " "
   },
   {
      name: "officeNumber",
      message: "What is the the Manager's office number?",
      default: 100
   }];

const menuPrompt = {
   name: 'action',
   message: "What team member would you like to add?",
   type: "list",
   choices: ['Intern', 'Engineer', 'I don"t want to add anymore']
}

const internPrompt = [
   {
      name: "name",
      message: "What is the Intern's name?",
      default: " "
   },
   {
      name: "id",
      message: "What is the the Intern's id?",
      default: " "
   },
   {
      name: "email",
      message: "What is the the Intern's email?",
      default: " "
   },
   {
      name: "school",
      message: "What is the the Intern's school?",
      default: " "
   }];

const engineerPrompt = [
   {
      name: "name",
      message: "What is the the Engineer's name?",
      default: " "
   },
   {
      name: "id",
      message: "What is the the Engineer's id?",
      default: " "
   },
   {
      name: "email",
      message: "What is the the Engineer's email?",
      default: " "
   },
   {
      name: "github",
      message: "What is the the Engineer's github?",
      default: " "
   }];

async function init() {
   const answers = await prompt(initial);
   console.log(answers)
   const newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
   teamMembers.push(newManager);
   menu()
}

async function menu() {
   const { action } = await prompt(menuPrompt);
   switch (action) {
      case "Intern":
         createIntern();
         break;
      case "Engineer":
         createEngineer();
         break;
      default:
         createTeam();
         break;
   }
}

async function createIntern() {
   const answers = await prompt(internPrompt);
   const newIntern = new Intern(answers.name, answers.id, answers.email, answers.school);
   teamMembers.push(newIntern);
   menu();
}

async function createEngineer() {
   const answers = await prompt(engineerPrompt);
   const newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
   teamMembers.push(newEngineer);
   menu();
}

function createTeam() {
   console.log(teamMembers)
   fs.writeFile('team.html', render(teamMembers), err => {
      if (err) throw err;
      console.log('team generated!')
   })
}

init();