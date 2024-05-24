const Department = require("./Department");
const Role = require("./Role");
const Employee = require("./Employee");
const inquirer = require("inquirer");
const prompts = require("../config/prompts");

function viewAllEmployees() {
    inquirer.prompt([prompts.viewEmployeesPrompt]).then((answers) => {
        console.log(answers);
        const result = Employee.findAll().then((employees) => {
            console.log(employees);
            return employees;
        }).catch((err) => {
            console.log(err);
            throw err;
        }
        )
        return result;
    })

}

function viewAllDepartments() {
    inquirer.prompt([prompts.viewDepartmentPrompt]).then((answers) => {
        console.log(answers);
        const result = Department.findAll().then((departments) => {
            console.log(departments);
            return departments;
        }).catch((err) => {
            console.log(err);
            throw err;
        }
        )
        return result;
    })

}

module.exports = { viewAllEmployees, viewAllDepartments };
