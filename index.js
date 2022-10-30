const inquirer = require("inquirer");
const { string } = require("yargs");

// Variables for classes 
const Manager = require("./lib/Manager");











// TODO: Create a function to initialize app
function init() {
    console.log("Initializing app");

    //function is creating manager 
    function createManager(){
        console.log("creating manager");
        inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your managers name?"

            }
        ])
    }

    createManager();
  }
  
  // Function call to initialize app
  init();