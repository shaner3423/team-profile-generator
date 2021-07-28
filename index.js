//Dependencies
const inquirer = require('inquirer');
const fs = ('fs');
const jest = ('jest');

//Concstructors
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

console.log(Employee);
console.log(Engineer);
console.log(Intern);
console.log(Manager);

//create an empty array for team and id as place holders
const teamArray = [];
const idArray = [];


//start application
function initApplication() {
    //prompt users for Manager information
    function addManager() {
        console.log("Let's build your team profile!")
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the name of the manager?',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please provide your manager's name.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerID',
                message: "What is the manager's ID?",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter your manager's ID.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "What is the manager's email?",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please provide your manager's email.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerPhone',
                message: "What is the manager's office number? (format: 1234567890",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please provide your manager's office number.")
                        return false;
                    }
                }
            }
        ])

        .then(answers => {
            let manager = new Manager(answer.managerName, answer.managerID, answer.managerEmail, answer.managerPhone);
            teamArray.push(manager);
            idArray.push(answers.managerID);
            addTeam();
        });

        function addTeam() {
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'teamMemberChoices',
                    message: "Please select the next team member you would like to add next?",
                    choices: [
                        "Engineer", "Intern", "Close Application"
                    ]
                }
            ])

            .then(userChoice => {
            
            });
        }
    }

    //prompt users for Engineer 











};

initApplication();
