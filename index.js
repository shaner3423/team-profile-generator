//Dependencies
const inquirer = require('inquirer');
const fs = ('fs');
const jest = ('jest');

//Concstructors
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


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
                        console.log("Please provide the manager's name.")
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
                        console.log("Please enter the manager's ID.")
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
                        console.log("Please provide the manager's email.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerPhone',
                message: "What is the manager's office number? (format: 1234567890)",
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
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerPhone);
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
                switch (userChoice.teamMemberChoices) {
                    case "Engineer":
                       return addEngineer();
                       break;
                    case "Intern":
                        return addIntern();
                        break;
                    default: 
                    generateHTML();
               }    
            });
        }
    }

    //prompt users for Engineer information
    function addEngineer() {
        console.log("Let's build your Engineer's profile!")
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the name of the engineer?',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please provide the engineer's name.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "What is the engineer's ID?",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please enter your engineer's ID.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email?",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please provide your engineer's email.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'managerGithub',
                message: "What is the engineer's Github repo? (format: 1234567890",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please provide your manager's office number.")
                        return false;
                    }
                }
            }
            .then(answers => {
                const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, asnwers.engineerGithub);
                teamArray.push(engineer);
                idArray.push(answers.engineerID);
                addTeam();
            })
        ]);
    }

    //prompt user of Intern information
    function addIntern () {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the name of the intern?',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please provide the intern's name.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internID',
                message: "What is the intern's ID?",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please provide the intern's ID.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the inter's email?",
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please provide the intern's email.")
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'internSchool',
                message: '"Where does the intern go to school?',
                validate: answer => {
                    if (answer) {
                        return true;
                    } else {
                        console.log("Please provide the intern's name.")
                        return false;
                    }
                }
            }

            .then(answers => {
                const intern = new Intern(answers.internName, asnwers.internID, answers.internEmail, answers.internSchool);
                teamArray.push(intern);
                idArray.push(answers.internID);
                addTeam();
            })
        ]);
    }

    function generateHTML() {
        //create dist directory for index.html if it doesn't exist

    }
    









    addManager();
}

initApplication();
