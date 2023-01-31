import { Sequelize } from "sequelize";
import { db } from '../utils/database.js';

const { DataTypes } = Sequelize;

export const Users = db.define('users', 
    {
        name: DataTypes.STRING
    }
);