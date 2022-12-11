const inquirer = require("inquirer");
const { string } = require("yargs");
const path = require("path");
const fs = require("fs");

// Variables for classes 
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

// Generates HTML
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js")


const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message:'Please enter your name:',
            validate:nameInput => {
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
            name: 'employeeId',
            message:'Enter your employee ID:',
            validate: employeeId =>{
                if (employeeId) {
                    return true;
                }else {
                    console.log('Please enter your ID NOW');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('ENTER YOUR EMAIL NOW');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'Enter your GitHub Username:',
            validate: GitHub => {
                if (GitHub) {
                    return true;
                } else {
                    console.log('ENTER YOUR GITHUB USERNAME NOW');
                    return false;
                }
            }
        },
    ])
    .then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.GitHub);
        teamMembers.push(manager);
        promptMenu();
    });
};

// add engineer or intern
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Select who you would like to add to your team:',
            choices: ['Add an Engineer', 'Add an Intern', 'Done building my TEAM']
        }
    ])
    .then(userChoice => {
        switch (userChoice.menu) {
            case "Add an Engineer":
                promptEngineer();
                break;
            case "Add an Intern":
                promptIntern();
                break;
            default:
                buildTeam();
        }
    });
};

//create engineer
const promptEngineer = () => {
    console.log (`ADD AN ENGIEER`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the Engineers name:',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                }else {
                    console.log('Please enter Engineers name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Enter the Engineers employee ID:',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                }else {
                    console.log('Please enter Engineers Employee ID!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the Engineers email address:',
            validate: email => {
                if (email) {
                    return true;
                }else {
                    console.log('Please enter Engineers email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'Enter the Engineers GitHub Username:',
            validate: GitHub => {
                if (GitHub) {
                    return true;
                }else {
                    console.log('Please enter Engineers GitHub Username!')
                    return false;
                }
            }
        }
    ])
    .then(answers =>  {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.GitHub);
        teamMembers.push(engineer);
        promptMenu();
    });
};

// create intern
const promptIntern = () => {
    console.log (`ADD AN INTERN`);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the  Interns name:',
            validate: internName => {
                if (internName) {
                    return true;
                }else {
                    console.log('Please enter Interns name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Enter the Interns employee ID:',
            validate: internId => {
                if (internId) {
                    return true;
                }else {
                    console.log('Please enter Interns Employee ID!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the Interns email address:',
            validate: email => {
                if (email) {
                    return true;
                }else {
                    console.log('Please enter Interns email!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'GitHub',
            message: 'Enter the Interns GitHub Username:',
            validate: GitHub => {
                if (GitHub) {
                    return true;
                }else {
                    console.log('Please enter Interns GitHub Username!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the Interns school name:',
            validate: school => {
                if (school) {
                    return true;
                }else {
                    console.log('Please enter Interns school name!')
                    return false;
                }
            }
        },
    ])
    .then(answers =>  {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.GitHub, answers.school);
        teamMembers.push(intern);
        promptMenu();
    });
};
const buildTeam = () => {
    console.log(`Done Building my TEAM`);

    if(!fs.existsSync(distDIR)) {
        fs.mkdirSync(distDIR)
    }
    fs.writeFileSync(distPath, generate(teamMembers));
}
promptManager();