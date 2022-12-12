const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // call the parent constructor here:
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return Manager;
    }
}

// here I export the file
module.exports = Manager;