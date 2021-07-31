const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Tony');
});

test('set github account with constructor', () => {
    const testValue = 'GitHubAccount';
    const e = new Engineer('Foo', 1, 'engineer@email.com', testValue);
    expect(e.github).toBe(testValue);
})

// test('get github account with getGithub() method', () => {
//     const testValue = 'GitHubAccount';
//     const e = new Engineer('Foo', 1, 'engineer@email.com', testValue);
//     expect(e.getGitHub()).toBe(testValue);
// });

