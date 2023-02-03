const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Users = db.define('users', 
    {
        name: DataTypes.STRING
    }
);

module.exports = Users;