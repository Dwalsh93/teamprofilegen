const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const promptUser = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID Number?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your Employee ID Number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            choices: ['Manager', 'Engineer', 'Intern'],
            message: 'Please select your role:',
            name: 'role'
        }
    ]).then(function (getUserInput) {
        switch (getUserInput.role) {
            case "Manager":
                getManagerDetails(getUserInput);
                break;
            case "Engineer":
                getEngineerDetails(getUserInput);
                break;
            case "Intern":
                getInternDetails(getUserInput);
                break;
        }
    })
}

function getManagerDetails(emp) {
    inquirer.prompt([{
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?',
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter your office number!');
                return false;
            }
        }
    }]).then(function (managerInfo) {
        let managerData = new Manager(emp.name, emp.id, emp.email, managerInfo.officeNumber)
        console.log(managerData);
        employees.push(managerData);
        addEmployee();
    }

    )
}

function getEngineerDetails(emp) {
    inquirer.prompt([{
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your github username!');
                return false;
            }
        }
    }]).then(function (engineerInfo) {
        let engineerData = new Engineer(emp.name, emp.id, emp.email, engineerInfo.github)
        console.log(engineerData);
        employees.push(engineerData);
        addEmployee();
    }

    )
}

function getInternDetails(emp) {
    inquirer.prompt([{
        type: 'input',
        name: 'school',
        message: 'What school did you attend?',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter what college you went to!');
                return false;
            }
        }
    }]).then(function (schoolInfo) {
        let schoolData = new Intern(emp.name, emp.id, emp.email, schoolInfo.school)
        console.log(schoolData);
        employees.push(schoolData);
        addEmployee();
    }

    )
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'info',
            message: 'Do you want to add more employees?',
            choices: ['Yes', 'No']
        }

    ]).then(function (userResponse) {
        switch (userResponse.info) {
            case 'Yes':
                promptUser();
                break;
            case 'No':
                let HTMLdata = render(employees);
                console.log(HTMLdata);
                fs.writeFileSync('./output/team.html', HTMLdata, function (err) {
                    if (err) throw err;
                    console.log('generateHTML');
                })
        }
    })
}

promptUser()
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
