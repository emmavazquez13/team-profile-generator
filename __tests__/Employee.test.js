const Employee = require('../lib/Employee'); 
const employee = new Employee('Emma', '303799', 'emmavazquez13@gmail.com');

describe('Employee class', () => {
})

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('Emma');
    expect(employee.id).toBe('303799');
    expect(employee.email).toBe('emmavazquez13@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Emma');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('303799');
}); 

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('emmavazquez13@gmail.com');
}); 

test('test if we can get the role from the Role() method', () => {
    expect(employee.getRole()).toBe('Employee');
}); 