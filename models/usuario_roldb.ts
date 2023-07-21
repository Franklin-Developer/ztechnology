import {  DataTypes } from "sequelize";
import db from "../db/connections";

const Usuario_rol = db.define( 'usuario_rol',{

    id_usuario: {

        type: DataTypes.STRING
    },

    id_rol: {

        type: DataTypes.INTEGER
    }
})

export default Usuario_rol;

