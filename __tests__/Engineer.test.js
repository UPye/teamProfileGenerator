const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

const engineer = new Engineer ('Gav', 1, 'email@email.com', 'GDawg');
test('creates Engineer object and data', () => {
    expect(engineer).toEqual(expect.any(Engineer));
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.getRole()).toEqual('Engineer');
    expect(engineer.getGithub()).toEqual('GDawg');
});