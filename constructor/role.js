// Model for structuring role table

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Role extends Model { 
    constructor(title, salary, departmentId) {
        this.title = title,
            this.salary = salary;
        this.departmentId = departmentId;
    }
}

// Exporting tables with newly established relationships to each other
module.exports = { Department, Role, Employee };
