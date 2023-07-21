import {  DataTypes } from "sequelize";
import db from "../db/connections";

const Productos = db.define('productos', {

    
    nombre: {

        type: DataTypes.STRING
    },

    precio: {

        type: DataTypes.DECIMAL
    },

    cantidad: {

        type: DataTypes.INTEGER
    }

})

export default Productos;

