const Sequelize = require('sequelize');

const NAME_DB = 'chat';
const USER = 'root';
const PASSWORD = 'mysqlnodejs';

const db = new Sequelize(NAME_DB, USER, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;