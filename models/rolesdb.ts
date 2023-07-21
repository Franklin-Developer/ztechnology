import {  DataTypes } from "sequelize";
import db from "../db/connections";


const Roles = db.define('roles',{

   
    
    Nombre: {

       type: DataTypes.STRING
    },

    Descripcion: {

        type: DataTypes.STRING
    }

 })



export default Roles;