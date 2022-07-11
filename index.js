const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path')

const Employee = require('./Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
