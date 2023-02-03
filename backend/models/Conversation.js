const Sequelize = require('sequelize');
const db = require('../utils/database.js');

const { DataTypes } = Sequelize;

const Conversation = db.define('conversation', 
    {
        members: DataTypes.JSON,
        theme: DataTypes.STRING,
        messages: DataTypes.JSON
    }
);

module.exports = Conversation;