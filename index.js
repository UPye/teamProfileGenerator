const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const fs = require('fs');

let teamMembers = [];


const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
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
            message: 'What is your ID?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter you ID!');
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
            type: 'input',
            name: 'number',
            message: 'What is your office number?',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        }
    ])
    .then(({name, id, email, number}) => {
        teamMembers.push(new Manager(name, id, email, number));
        addEmployee(this);
    })
};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Engineer', 'Intern', 'No More Employees']
        }
    ])
    .then(({role}) => {
        this.role = role;

        if (this.role === 'Engineer') {
            return inquirer.prompt([
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
                    message: 'What is your ID?',
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log('Please enter your ID!');
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
                    type: 'input',
                    name: 'github',
                    message: 'What is your github link?',
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter your github!');
                            return false;
                        }
                    }
                }
            ])
            .then(({name, id, email, github}) => {
                teamMembers.push(new Engineer(name, id, email, github));
                addEmployee(this);
            })
        }

        if (this.role === 'Intern') {
            return inquirer.prompt([
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
                    message: 'What is your ID?',
                    validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log('Please enter your ID!');
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
                    type: 'input',
                    name: 'school',
                    message: 'What school do you attend?',
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log('Please enter your school name!');
                            return false;
                        }
                    }  
                }
            ])
            .then(({name, id, email, school}) => {
                teamMembers.push(new Intern(name, id, email, school));
                addEmployee(this);
            })
        }

        if (this.role === 'No More Employees') {
            fs.writeFile('./dist/index.html', generatePage(teamMembers), err => {
                // If there's an error, reject the Promise and send the error to the Promise's `.catch()` method
                if (err) {
                    console.log(err);
                    // Return out of the function here to make sure the Promise doesn't accidentally execute the Resolve function as well
                    return;
                }
    
                // If everything went well, resolve the Promise and send the successful data to the `.then()` method
                console.log('HTML created!');
            });
        } 
    })
}

promptUser();  