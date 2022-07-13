//Generate HTML Page
const htmlPage = team => {
    //Manager Card
    const managerCard = newManager => {
        return `
        <div class='card'>
        <div class='card-header text center'>
        <img src="./images/Manager.png" class="profile-pic">
           <h2 class='card-title'>${newManager.getName()}</h2>
           <h3 class='card-title'>${newManager.getRole()}</h3>
        </div>
        <div class='card-body text-center'>
           <ul class='list-group'>
               <li class='list-group-item'>ID: ${newManager.getId()}</li>
               <li class='list-group-item'>Email: <a href= 'mailto:${newManager.getEmail()}'>${newManager.getEmail()}</a></li>
               <li class="list-group-item">Office Number: ${newManager.getPhoneNumber()}</li>
           </ul>
        </div>
    </div>
    `;
    };

    //Engineer Card
    const engineerCard = newEngineer => {
        return `
        <div class="card">
        <div class='card-header text center'>
        <img src="./images/Engineer.png" class="profile-pic">
            <h2 class="card-title">${newEngineer.getName()}</h2>
            <h3 class="card-title">${newEngineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${newEngineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${newEngineer.getEmail()}">${newEngineer.getEmail()}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${newEngineer.getGithub()}" target="_blank">${newEngineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
    `;
    };

    //Intern Card
    const internCard = newIntern => {
        return `
        <div class="card">
        <div class='card-header text center'>
        <img src="./images/Intern.png" class="profile-pic">
            <h2 class="card-title">${newIntern.getName()}</h2>
            <h3 class="card-title"> ${newIntern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${newIntern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${newIntern.getEmail()}">${newIntern.getEmail()}</a></li>
                <li class="list-group-item">School: ${newIntern.getSchool()}</li>
            </ul>
        </div>
    </div>
    `;
    };

    //Html Page
    const html = [];

    html.push(
        team
          .filter((newEmployee) => newEmployee.getRole() === "Manager")
          .map((newManager) => managerCard(newManager))
      );
      html.push(
        team
          .filter((newEmployee) => newEmployee.getRole() === "Engineer")
          .map((newEngineer) => engineerCard(newEngineer))
          .join("")
      );
      html.push(
        team
          .filter((newEmployee) => newEmployee.getRole() === "Intern")
          .map((newIntern) => internCard(newIntern))
          .join("")
      );
    
      return html.join("");
    };

    //Export Function
    module.exports = newEmployee => {
        return `    
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Team Profile Page</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
            <link rel="stylesheet" href="./css/style.css">
        </head>
        <body>
          <div class="container-fluid">
              <div class="row">
              <div class="header col-12 mb-3 ">
                    <h1 class="title">Team Profile Page</h1>
                  </div>
              </div>
          </div>
          <div class="container">
              <div class="row">
                  <div class="col-12 d-flex">
                      ${htmlPage(newEmployee)}
                  </div>
              </div>
          </div>
      </body>
      </html>
      `;
      };
