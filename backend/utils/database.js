import { Sequelize } from "sequelize";

const NAME_DB = 'chat';
const USER = 'root';
const PASSWORD = 'mysqlnodejs';

export const db = new Sequelize(NAME_DB, USER, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});