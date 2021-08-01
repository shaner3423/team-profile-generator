//Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const finalHTML = require('./src/page-template')

//Concstructors
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


// const dist_dir = path.resolve(__dirname, 'dist/')
// const outputPath = path.join(dist_dir, 'index.html/');


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
    }

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
                createWebPage();
           }    
        });
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
                name: 'engineerGithub',
                message: "What is the engineer's Github repo? (format: 1234567890)",
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
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            idArray.push(answers.engineerID);
            addTeam();
        })
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
                message: "What is the intern's email?",
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
        ]) .then(answers => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            teamArray.push(intern);
            idArray.push(answers.internID);
            addTeam();
        })
    }

    // function createWebPage() {
    //     if (!fs.existsSync(dist_dir)) {
    //         fs.mkdirSync(dist_dir)
    //     }
    //     console.log("Generating Your Team Profile.... ");
    //     fs.writeFileSync(outputPath, finalHTML(teamArray));
    // }
  
    addManager();
}


initApplication();

// when user chooses Close Applicaton, the application should close and the user should be able to go back to the home page










//  //function to write the pageHTML to index.html
//  const printPage = function (pageHTML) {
//     fs.writeFile("./dist/index.html", pageHTML, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Generating Team Profile.....");
//       }
//     });
//   };
  
//   //call getInfo => send team array to html format file => print formatted html to index.html
  
//   getInfo()
//     .then(teamArray => {
//       return finalHTML(teamArray);
//     })
//     .then((pageHTML) => {
//       printPage(pageHTML);
//     })
//     .catch((err) => {
//       if (err) {
//         console.log(err);
//       }3
//     });







// function createWebPage () {
//     fs.writeFile('./dist/index.html', finalHTML, (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log("You have successfully created your new index.html file.")
//         }
//     });
// };

