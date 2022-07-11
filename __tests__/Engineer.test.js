const Engineer = require('../lib/Engineer');

//Creats GitHub Username
test('Creates github username', () => {
    const github = 'mohamed12';
    const newEngineer = new Engineer('Mohamed', 1, 'mohamed@gmail.com', github);
    expect(newEngineer.github).toBe(github);
});

//Checks if newEngineer.getRole() returns Engineers role
test('Checks if getRole() returns engineers role', () => {
    const role = 'Engineer';
    const newEngineer = new Engineer('Mohamed', 1, 'mohamed@gmail.com', 'mohamed12');
    expect(newEngineer.getRole()).toBe(role);
});

//Checks if newEngineer.getGithub() returns Engineers github
test('Checks if getGithub() returns github username', () => {
    const github = 'mohamed12';
    const newEngineer = new Engineer('Mohamed', 1, 'mohamed@gmail.com', github);
    expect(newEngineer.getGithub()).toBe(github);
});

