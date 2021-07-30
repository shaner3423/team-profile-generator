const Employee = require('./Employee');
class Engineer extends Employee{
    //Engineer Concstructor
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() { 
        return this.github; 
    }

    getPosition() { 
        return `Engineer`;
    }

}

module.exports = Engineer;

