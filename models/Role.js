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

Role.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    salary: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },

    departmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "Role",
    }
);

// Exporting tables with newly established relationships to each other
module.exports = Role;
