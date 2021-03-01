const Employee = require('../lib/Employee');

test('creates an Employee object', () => {
    const employee = new Employee('Urika', 4, 'name@email.com');

    expect(employee.getName()).toBe('Urika');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toBe('name@email.com');
});

test(`gets Employee's role`, () => {
    const employee = new Employee('Urika', 4, 'name@email.com');

    expect(employee.getRole()).toBe('employee');
});