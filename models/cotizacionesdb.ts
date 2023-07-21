import {  DataTypes } from "sequelize";
import db from "../db/connections";
import Clientes from "./clientesdb";

const Cotizaciones = db.define( 'cotizaciones', {

 

    numero_cotizacion: {

        type: DataTypes.STRING
    },

    descuento: {

        type: DataTypes.DECIMAL
    },

    total: {

        type: DataTypes.DECIMAL
    },

    id_cliente: {

        type: DataTypes.BIGINT
    }

})

Cotizaciones.belongsTo(Clientes, {
    foreignKey: 'id_cliente'
})

export default Cotizaciones;