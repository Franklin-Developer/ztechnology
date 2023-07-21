import {  DataTypes } from "sequelize";
import db from "../db/connections";
import Productos from "./productosdb";
import Cotizaciones from "./cotizacionesdb";

const Cotizacion_productos = db.define( 'cotizaciones_productos',{

    id_cotizacion: {

        type: DataTypes.BIGINT
    },

    id_producto: {

        type: DataTypes.BIGINT
    },

    valor_unidad: {

        type: DataTypes.DECIMAL
    },

    cantidad: {

        type: DataTypes.INTEGER
    },

    subtotal: {

        type: DataTypes.DECIMAL
    }

   

})

Cotizacion_productos.belongsTo(Cotizaciones, {
    foreignKey: 'id_cotizacion'
})

Cotizacion_productos.belongsTo(Productos, {
    foreignKey: 'id_producto'
})

export default Cotizacion_productos;