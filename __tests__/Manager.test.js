const Manager = require('../lib/Manager');

//Create PhoneNumber for Manager
test('Create phoneNumber', () => {
    const phoneNumber = 999;
    const newManager = new Manager('Mohamed', 1, "mohamed@gmail.com", phoneNumber);
    expect(newManager.phoneNumber).toBe(phoneNumber);
});

//Checks if getRole() returns managers role
test('Checks if getRole() returns managers role', () => {
    const role = 'Manager';
    const newManager = new Manager('Mohamed', 1, 'mohamed@gmail.com', 999);
    expect(newManager.getRole()).toBe(role);
});

//Checks if getPhoneNumber() returns managers number
test('Checks if getPhoneNumber() returns managers number', () => {
    const phoneNumber = 999;
    const newManager = new Manager('Mohamed', 1, 'mohamed@gmail.com', phoneNumber);
    expect(newManager.getPhoneNumber()).toBe(phoneNumber);
});