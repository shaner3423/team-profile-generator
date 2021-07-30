const Employee = require('./Employee');


class Manager extends Employee {
    // Manager Constructor
    constructor(name, id, email, phone) {
        super(name, id, email);
        this.phone = phone;
    }

    getPhone() {
        return this.phone;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;