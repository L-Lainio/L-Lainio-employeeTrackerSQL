// constructor for department
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/connection.js");

class Department extends Model { }

Department.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "Department",
    }
);

module.exports = Department;
