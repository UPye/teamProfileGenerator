// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    const teamMembers = templateData;
    
  
    return `
    <!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Dynamic team profile generator">
    <meta name="author" content="Anthony Tropeano">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/c7e6266a9c.js" crossorigin="anonymous"></script>
    <link rel="shortcut icon" href="../images/icon.png" type="image/x-icon">
    <title>Profile Generator</title>
</head>
<body>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 bg-dark text-center">
                    <div class="title d-flex flex-row justify-content-center align-items-center">
                        <h1 class="text-warning">My Team</h1>
                    </div>
                </div>
            </div>
        </div>   

        <div id="cards" class="container mt-5">
            <div class="row d-flex justify-content-center align-items-center gy-4">
                ${membersCard(teamMembers)}
            </div>
        </div>
    </main>
</body>
</html>
    `;
  };


  function membersCard (teamMembers) {
    let cardholders = '' 
      for (let index = 0; index < teamMembers.length; index++) {
          const employee = teamMembers[index];
          
        if (employee.getRole() === 'Manager') {
            cardholders += `
                <div class="col-1" style="width: 18rem;">
                    <div class="card bg-dark text-dark">
                        <div class="card-body bg-warning">
                            <h2>Name: ${employee.getName()}</h2>
                            <p class="h4"><span><i class="fas fa-user-tie"></i> </span>Manager</p>
                        </div>
                        <div class="card-body text-white">
                            <ul class="list-group list-group-flush my-4 ">
                                <li class="list-group-item bg-secondary">ID: ${employee.getName()}</li>
                                <li class="list-group-item bg-secondary">Email: <a href="mailto:${employee.getEmail()}"> ${employee.getEmail()} </a></li>
                                <li class="list-group-item bg-secondary">Office number: ${employee.getOfficeNumber()} </li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        }

        if (employee.getRole() === 'Engineer') {
            cardholders += `
            <div class="col-1" style="width: 18rem;">
            <div class="card bg-dark text-dark">
                <div class="card-body bg-warning">
                    <h2 class="card-title">Name: ${employee.getName()} </h2>
                    <p class="h4"><span><i class="fas fa-laptop-code"></i> </span>Engineer</p>
                </div>
                <div class="card-body text-white">
                    <ul class="list-group list-group-flush my-4">
                        <li class="list-group-item bg-secondary">ID: ${employee.getId()} </li>
                        <li class="list-group-item bg-secondary">Email: <a href="mailto:${employee.getEmail()}"> ${employee.getEmail()} </a></li>
                        <li class="list-group-item bg-secondary">GitHub: <a href="${employee.getGithub()}" target="_blank"> ${employee.getGithub()} </a></li>
                    </ul>
                </div>
            </div>
        </div>
            `
        }

        if (employee.getRole() === 'Intern') {
            cardholders += `
            <div class="col-1" style="width: 18rem;">
            <div class="card bg-dark text-dark">
                <div class="card-body bg-warning">
                    <h2 class="card-title">Name: ${employee.getName()} </h2>
                    <p class="h4"><span><i class="fas fa-user-graduate"></i> </span>Intern</p>
                </div>
                <div class="card-body text-white">
                    <ul class="list-group list-group-flush my-4">
                        <li class="list-group-item bg-secondary">ID: ${employee.getId()} </li>
                        <li class="list-group-item bg-secondary"> Email: <a href="mailto:${employee.getEmail()}"> ${employee.getEmail()} </a> </li>
                        <li class="list-group-item bg-secondary">School: ${employee.getSchool()} </li>
                    </ul>
                </div>
            </div>
        </div>
            `
        }
      }
      return cardholders;
  }