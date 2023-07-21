import { Sequelize } from "sequelize";

const db = new Sequelize('z_technology', 'root','', {
    host: 'localhost',
    dialect: 'mysql' 
})

export default db;