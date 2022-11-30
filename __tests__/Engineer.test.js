const engineer = require('../lib/Engineer'); 
const engineer = new engineer('Emma', '303799', 'emmavazquez13@gmail.com', 'Emma13');

test('test if we can get the constructor values for the employee object', () => {
    expect(engineer.name).toBe('Emma');
    expect(engineer.id).toBe('303799');
    expect(engineer.email).toBe('emmavazquez13@gmail.com');
    expect(engineer.githubUsername).toBe('Emma13');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Emma');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('303799');
}); 

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('emmavazquez13@gmail.com');
}); 

test('test if we can get the githubUsername from the getGithubUsername() method', () => {
    expect(engineer.getRole()).toBe('Emma13');
}); 

