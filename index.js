const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//Create Page
const pageTemplate = require('./src/template');

//Employee array
const employeeArray = [];

//Add Manager
const addManager = () => {
    console.log('Lets build your Teams Profile Page.')
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'Name',
                message: 'Enter Managers Name:',
            },
            {
                type: 'input',
                name: 'Id',
                message: 'Enter Managers Id:',
            },
            {
                type: 'input',
                name: 'Email',
                message: 'Enter Managers Email:',
            },
            {
                type: 'input',
                name: 'OfficeNumber',
                message: 'Enter Office Phone Number:'
            },
        ])
        .then(answers => {
            const manager = new Manager(answers.Name,answers.Id,answers.Email,answers.OfficeNumber);
            employeeArray.push(manager);

            addEmployee();
        });     

};

//Add Employee
const addEmployee = () => {
    return inquirer
        .prompt([
            {
                type:'list',
                name: 'choices',
                message: 'Which type of Employee would you like to add?',
                choices: ['Engineer', 'Intern', 'Quit']
            }
        ])
        .then((choice) => {
            switch (choice.choices) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'Quit':
                    generateHtml();
                    break;        
            }
        });
};

//Add Engineer
const addEngineer = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'Name',
                message: 'Enter Engineers Name:',
            },
            {
                type: 'input',
                name: 'Id',
                message: 'Enter Engineers Id:',
            },
            {
                type: 'input',
                name: 'Email',
                message: 'Enter Engineers Email:',
            },
            {
                type: 'input',
                name: 'Github',
                message: 'Enter Engineers Github:',
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.Name, answers.Id, answers.Email, answers.Github);
            employeeArray.push(engineer);
            addEmployee();
        });
};

//Add Intern
const addIntern = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'Name',
                message: 'Enter Interns Name:',
            },
            {
                type: 'input',
                name: 'Id',
                message: 'Enter Interns ID:',
            },
            {
                type: 'input',
                name: 'Email',
                message: 'Enter Interns Email:',
            },
            {
                type: 'input',
                name: 'School',
                message: 'Enter Interns School:',
            },
        ])
        .then((answers) => {
            const intern = new Intern(answers.Name, answers.Id, answers.Email, answers.School);
            employeeArray.push(intern);
            addEmployee();
        });
};

// Generate HTML
const generateHtml = () => {
    fs.writeFile('./dist/index.html', pageTemplate(employeeArray), (err) => {
        // If an error is detected
        if(err) console.error(`Error generating document ${err}`);
        // If successful
        console.log('Profile Page Successfully Generated!');
    });
};

addManager();