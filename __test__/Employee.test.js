const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jason');
});

// test('set id with constructor', () => {
//     const employee = new Employee('Dennis Rodman');
//     expect(employee.id).toBe(11);
// });

// test('set email with constructor', () => {
//     const employee = new Employee('Shane');
//     expect(employee.email).toBe('hello@hello.com');
// });

// // Test if the getRole() value is Employee
// test('getRole() return Employee', () => {
//     const employee = new Employee('Dennis Rodman', 1, 'hello@hello.com');
//     expect(employee.getRole()).toBe(Employee);
// });