class Employee {
    //employee Concstructor
    constructor(name, id, email, position='Employee') {
        this.name = name; 
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getname() { 
        return this.name; 
    }

    getId() { 
        return this.id;
    }

    getEmail() {
        return this.email; 
    }

    getRole() { 
        return this.role;
    }

}


module.exports = Employee;