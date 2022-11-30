const Manager = require('../lib/Manager');
const manager = new Manager('Emma', '303799', 'emmavazquez13@gmail.com', '222');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('Emma');
    expect(manager.id).toBe('303799');
    expect(manager.email).toBe('emmavazquez13@gmail.com');
    expect(manager.officeNumber).toBe('222');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Emma');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('303799');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('emmavazquez13@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('222');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});

