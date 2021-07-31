
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Scotty');
    expect(intern.name).toBe('Scotty');
});

test('set school with constructor', () => {
    const intern = new Intern();
    expect(intern.school).toEqual(expect.any(String));
});


//can't get it to pass test - test should be passing and to be all green