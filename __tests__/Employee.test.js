const Employee = require('../lib/Employee');


//Makes sure employee is an object
test('employee object', () => {
    const newEmployee = new Employee();
    expect(typeof newEmployee).toBe('object');
});

//Creates name for employee
test('create name with constructor', () => {
    const name = 'Mohamed';
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe(name);
});

//Creates id for employee
test('create id with constructor', () => {
    const id = 1;
    const newEmployee = new Employee('Mohamed', id);
    expect(newEmployee.id).toBe(id);
});

//Creates email for employee
test('create email with constructor', () => {
    const email = 'mohamed@gmail.com';
    const newEmployee = new Employee('Mohamed', 1, email);
    expect(newEmployee.email).toBe(email);
});

//Checks if getName() returns Employee name
test('checks if getName() returns Employees name', () => {
    const name = 'Mohamed';
    const newEmployee = new Employee(name);
    expect(newEmployee.getName()).toBe(name);
});

//Checks if getId() returns Employee Id
test('checks if getId() returns Employees Id', () => {
    const id = '1';
    const newEmployee = new Employee('Mohamed', id);
    expect(newEmployee.getId()).toBe(id);
});

//Checks if getEmail() returns Employees Email
test('checks if getEmail() returns Employees Email', () => {
    const email = 'mohamed@gmail.com';
    const newEmployee = new Employee('Mohamed', 1, email);
    expect(newEmployee.getEmail()).toBe(email);
});

//Checks if getRole() returns Employees Role
test('checks if getRole() returns Employees role', () => {
    const role = 'Employee';
    const newEmployee = new Employee('Mohamed', 1, 'mohamed@gmail.com');
    expect(newEmployee.getRole()).toBe(role);
});