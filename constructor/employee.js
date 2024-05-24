// Constructor for employee
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Employee extends Model { }

Employee.init = function() {
    constructor(firstName, lastName, employeeRole, manager) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeRole = employeeRole;
        this.manager = manager;
    };
};

module.exports = Employee;
