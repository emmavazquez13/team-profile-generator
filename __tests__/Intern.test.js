const intern = require('../lib/Intern');
const intern = new Intern('Emma', '303799', 'emmavazquez13', 'Texas State University');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('Emma');
    expect(intern.id).toBe('303799');
    expect(intern.email).toBe('emmavazquez13@gmail.com');
    expect(intern.school).toBe('Texas State University');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Emma');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('303799');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('emmavazquez13@outlook.com');
});

test('test if we can get the office number from the getSchool() method', () => {
    expect(intern.school()).toBe('Texas State University');
});