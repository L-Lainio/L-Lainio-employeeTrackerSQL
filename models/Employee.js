// Constructor for employee
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

class Employee extends Model {


}

Employee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        employeeRole: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        manager: {
            type: DataTypes.STRING,
            allowNull: false,

        }


    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "Employee",
    }



);

module.exports = Employee;
