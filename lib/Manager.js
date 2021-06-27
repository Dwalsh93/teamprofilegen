// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
       super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getRole() {

        return "Manager"
    }
}

module.exports = Manager
// test
// let Ted = new Manager ('Ted', 12,"ted@gmail", 'Manager', 1);
// console.log(Ted.name) 
//expecting Ted

//inquirer stuff, you'll get name, id, email, etc from the answers to the prompt 
// as you define new Managers, new Interns, new Engineers, you will have access to that information by using the Ted.name syntax