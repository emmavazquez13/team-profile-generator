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