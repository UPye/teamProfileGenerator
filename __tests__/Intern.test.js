const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

const intern = new Intern('Jay', 3, 'email@email.com', 'AUM');
test('creates intern object and data', () => {
    expect(intern).toEqual(expect.any(Intern));
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual('AUM');
    expect(intern.getRole()).toEqual('Intern');
});