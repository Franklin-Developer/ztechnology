import {  DataTypes } from "sequelize";
import db from "../db/connections";


const Clientes = db.define( 'clientes', {

 

    identificacion: {

        type: DataTypes.STRING
    },

    nombres: {

        type: DataTypes.STRING
    },

    apellidos: {

        type: DataTypes.STRING
    },
    
    correo: {

        type: DataTypes.STRING
    },

    telefono: {

        type: DataTypes.STRING
    }

})



export default Clientes;