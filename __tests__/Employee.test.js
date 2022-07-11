const { default: test } = require('node:test');
const Employee = require('../lib/Employee');

test('employee object', () => {
    const newEmployee = new Employee();
    expect(typeof newEmployee).toBe('object');
});

test('create name with constructor', () => {
    const name = 'Mohamed';
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe(name);
});

test('create id with constructor', () => {
    const id = 1;
    const newEmployee = new Employee('Mohamed', id);
    expect(newEmployee.id).toBe(id);
});

test('create email with constructor', () => {
    const email = 'mohamed@gmail.com';
    const newEmployee = new Employee('Mohamed', 1, email);
    expect(newEmployee.email).toBe(email);
});

test('checks if getName() returns Employees name', () => {
    const name = 'Mohamed';
    const newEmployee = new Employee(name);
    expect(newEmployee.getName()).toBe(name);
});

test('checks if getId() returns Employees Id', () => {
    const id = '1';
    const newEmployee = new Employee('Mohamed', id);
    expect(newEmployee.getId()).toBe(id);
});

test('checks if getEmail() returns Employees Email', () => {
    const email = 'mohamed@gmail.com';
    const newEmployee = new Employee('Mohamed', 1, email);
    expect(newEmployee.getEmail()).toBe(email);
});

test('checks if getRole() returns Employees role', () => {
    const role = 'Employee';
    const newEmployee = new Employee('Mohamed', 1, 'mohamed@gmail.com');
    expect(newEmployee.getRole()).toBe(role);
});