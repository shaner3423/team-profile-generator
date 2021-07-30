class Employee {
    //employee Concstructor
    constructor(name, id, email, position ='Employee') {
        this.name = name; 
        this.id = id;
        this.email = email;
        this.position = position;
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

    getPosition() { 
        return this.position;
    }

}


module.exports = Employee;