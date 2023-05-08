// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown')   
// TODO: Create an array of questions for user input
const questions = [
    {
       type: 'input', 
       message: 'What is your project title?',
       name: 'title',
    },
    {
      type: 'input',
      message: 'Your ReadMe description',
      name: 'description',  
    },
    {
        type: 'input',
        message: 'installation instructions',
        name: 'installation',
        
    },
    {
        type: 'input',
        message: 'Usage information',
        name: 'usage',
    },
    {
        type:'input',
        message: 'contribution guidelines',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'test instruction',
        name: 'instructions',
    },
    {
        type: 'list',
        message: 'pick a license',
        name: 'license', 
        choices: ['MIT','IBN','MOZILLA','NONE',]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (data=>{
        console.log (data)
        writeToFile('readme.md',generateMarkdown(data))
    })
}

// Function call to initialize app
init();
