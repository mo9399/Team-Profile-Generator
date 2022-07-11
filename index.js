const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path')

const Employee = require('./Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');


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
        })     

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
}