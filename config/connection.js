const mysql = require("sequelize");
const postgres = require("pg");
const { Sequelize } = require("sequelize/types");

require("dotenv").config();

const connection = mysql.createConnection({
    host: "localhost",
    port: 3001,
    user: "postgres",
    password: "********",
    database: "employee",
});

module.exports = connection;
