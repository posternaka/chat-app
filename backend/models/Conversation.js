import { Sequelize } from "sequelize";
import { db } from '../utils/database.js';

const { DataTypes } = Sequelize;

export const Conversation = db.define('conversation', 
    {
        members: DataTypes.JSON,
        theme: DataTypes.STRING,
        messages: DataTypes.JSON
    }
);