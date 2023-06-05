// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path'); // using path to join directory names to form a full path
const generateMarkdown = require('./utils/generateMarkdown.js'); // using the genReadme.js file to generate the README.md file

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'please provide a title for your project.',
    validate: (value) => { if (value) { return true } else { return `please do not leave blank.` } }
  },
  {
    type: 'input',
    name: 'link',
    message: 'please provide a link to your project.',
    validate: (value) => { if (value) { return true } else { return `please do not leave blank.` } }

  },
  {
    type: 'input',
    name: 'description',
    message: 'please provide a short description of your project.',
    validate: (value) => { if (value) { return true } else { return `please do not leave blank.` } }

  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'please check any and all licenses that apply to your project.',
    choices: ['mit', 'cc', 'gpl', 'afl-3.0', 'artistic-2.0'],
    validate: (value) => { if (value) { return true } else { return `please do not leave blank.` } }

  },
  {
    type: 'input',
    name: 'features',
    message: 'tell us a little bit about what your project can do.',
    validate: (value) => { if (value) { return true } else { return `please do not leave blank.` } }

  },
  {
    type: 'input',
    name: 'dependencies',
    message: 'list any dependencies your project requires here.',
    validate: (value) => { if (value) { return true } else { return `please do not leave blank.` } }

  },
  {
    type: 'input',
    name: 'usage',
    message: 'please provide the languages and technologies used in this project.',
    validate: (value) => { if (value) { return true } else { return `please do not leave blank.` } }

  },
  {
    type: 'input',
    name: 'email',
    message: 'please provide your email you want associated with this project.',
    validate: (value) => { if (value) { return true } else { return `please do not leave blank.` } }

  },
  {
    type: 'input',
    name: 'credit',
    message: 'please credit the contributors to this project.',
    validate: (value) => { if (value) { return true } else { return `please do not leave blank.` } }

  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { // this will synchronously write data to a file
  return fs.writeFileSync(path.join(process.cwd(), fileName), data); // path.join() joins directory names and process.cwd() gets the current working directory
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => { // prompt the user with the questions array and gets the responses in a .then() block.
    console.log("writing to README.md file... please wait..."); // logs a message to indicate that the readme is being generated.
    writeToFile("./README.md", generateMarkdown({ ...responses })); // calls writeToFile() passing the path to the readme file, the results of genReadme, passing the responses object.
  });
}

// Function call to initialize app
init();
