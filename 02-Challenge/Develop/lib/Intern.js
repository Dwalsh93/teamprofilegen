// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, schoolName) {
        super(name, id, email)
        this.schoolName = schoolName;
    }
    schoolName() {
        return this.schoolName
    }
    getRole() {

        return "Intern"
    }
}
