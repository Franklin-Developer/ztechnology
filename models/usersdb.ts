import {  DataTypes } from "sequelize";
import db from "../db/connections";
import Roles from "./rolesdb";


const Users = db.define( 'usuarios', {

   
    Nombre: {

        type: DataTypes.STRING
    },

    Apellidos: {

        type: DataTypes.STRING
    },

    Email: {

        type: DataTypes.STRING
    },

    Password: {

        type: DataTypes.STRING
    },

    Foto: {

        type: DataTypes.STRING
    },

    Edad: {

        type: DataTypes.INTEGER
    },

    Estado: {

        type: DataTypes.BOOLEAN
    },

    Rol_ID: {
        type: DataTypes.BIGINT
       
    }

})

Users.belongsTo(Roles, {
    foreignKey: 'Rol_ID'
})

export default Users;


