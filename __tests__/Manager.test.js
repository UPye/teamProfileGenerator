const Manager = require('../lib/Manager');

const manager = new Manager('Tanisha', 2, 'email@email.com', '555-555-5555');
test('creates a Manager object', () => {
    expect(manager).toEqual(expect.any(Manager));
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));
});
