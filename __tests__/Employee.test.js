const Employee = require('../lib/Employee');

test('employee object', () => {
    const newEmployee = new Employee();
    expect(typeof newEmployee).toBe('object');
});