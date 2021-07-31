const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dennis Rodman');
});

test('getRole() return Employee', () => {
    const employee = new Employee('Steve Kerr', 1, 'hello@hello.com');
    expect(employee.getRole()).toBe(Employee);
});

//can't pass test - test should be passing and should turn all green