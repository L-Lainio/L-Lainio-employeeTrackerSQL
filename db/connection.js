const { Pool } = require("pg");
const Sequelize = require("sequelize");

const dotenv = require('dotenv');
dotenv.config();
console.log (process.env);

const connection = new Sequelize({
    database: process.env.DB_NAME ?? "employee_db",
    username: process.env.DB_USER ?? "postgres",
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST ?? "127.0.0.1",
    port: process.env.DB_PORT ?? 5432,
    dialect: "postgres",

});


module.exports = connection;
