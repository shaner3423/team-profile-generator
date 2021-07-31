const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Linda');
});

test('set office number', () => {
    const testValue = 100;
    const manager = new Manager();
    expect(manager.officeNumber).toBe(testValue);
});

//can't get it to pass test - test should be passing and turning all green
