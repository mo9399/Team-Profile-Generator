const Intern = require('../lib/Intern');

//Create school name
test('creates school', () => {
    const school = 'University of Oregon';
    const newIntern = new Intern('Mohamed', 1, 'mohamed@gmail.com', school);
    expect(newIntern.school).toBe(school);
});

//Checks if newIntern.getRole() returns interns role
test('Checks if getRole() returns interns role', () => {
    const role = 'Intern';
    const newIntern = new Intern('Mohamed', 1, 'mohamed@gmail.com', 'University of Oregon');
    expect(newIntern.getRole()).toBe(role);
});

//Checks if newIntern.getSchool() returns interns school
test('Checks if getSchool() returns interns school', () => {
    const school = 'University of Oregon';
    const newIntern = new Intern('Mohamed', 1, 'mohamed@gmail.com', school);
    expect(newIntern.getSchool()).toBe(school);
});