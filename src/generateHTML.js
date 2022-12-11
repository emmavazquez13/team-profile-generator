const generateTeam = (team) => {
    console.log(team);
    // Create an empty array to push html elements on to and loop through the team data
    const html = [];
    // Create functions for each type of employee that returns HTML data
    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${manager.getName()} <br/>
            <i class="fas fa-mug-hot"</i>Manager</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.getId()}</li>
              <li class="list-group-item">Email: <span id="email"><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
              <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
        `;
        html.push(managerHtml);
    }
    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${engineer.getName()} <br/>
            <i class="fas fa-glasses"></i>Engineer</div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Role: ${engineer.getRole()}</;i>
              <li class="list-group-item">ID: ${engineer.getId()}</;i>
              <li class="list-group-item">Email: <span id="email"><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></span></li>
              <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>
        `;
        html.push(engineerHtml);
    }
    const generateIntern = intern => {
        console.log(intern);
        let internHtml = `
        <div class="card" style="width: 18rem;">
            <div class="card-header">
            ${intern.getName()} <br/>
            <i class="fas fa-user-graduate"></i>Intern</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${intern.getId()}</;i>
              <li class="list-group-item">Email: <span id="email"><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></span></li>
              <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
        `;
        html.push(internHtml);
    }

// create a loop for all of the employees
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === "Manager") {
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer") {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            generateIntern(team[i]);
        }
    }

// join the HTML blocks
    return html.join('');
}

// export function to generate entire page
module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial=scale=1.0">
    <link rel="stylesheet" href="../dist/style.css" /> 
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
        <h1> My Team </h1>
    </header>
    <main> ${generateTeam(team)} </main>
</body>
</html>
    `;

};

