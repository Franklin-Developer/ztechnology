import { Request, Response } from "express";
import Cotizacion_Productos from "../models/cotizacion_productos";
import Productos from "../models/productosdb";
import Cotizaciones from "../models/cotizacionesdb";

export const consulCotizaciones_Productos = async (req: Request, res: Response) => {
    try {
        const cotizacion_producto = await Cotizacion_Productos.findAll({
            attributes: ['id','id_cotizacion', 'id_producto', 'valor_unidad', 'cantidad', 'subtotal'],
            include: [
                {
                    model: Productos,
                },

                {
                    model: Cotizaciones, 
                },
               
            ],
        });

        res.status(200).json({
            msg: 'Consultar Cotizaciones',
            cotizacion: cotizacion_producto, 
        });
    } catch (error) {
        res.status(500).json({ error: 'Error al consultar cotizaciones' });
    }
};



export  const consulContizacion_ProductoById = async (req: Request, res: Response) => {
    const { id }  = req.params;
    const cotizacion_producto = await Cotizacion_Productos.findByPk(id);
    res.status(200).json ({
        cotizacion_producto
    })
 }

 export const saveCotizacion_Producto = async(req: Request , res: Response) => {

    const {id_cotizacion, id_producto, valor_unidad, cantidad, subtotal} = req.body;
    const cotizacion_producto = await Cotizacion_Productos.create({id_cotizacion, id_producto, valor_unidad, cantidad, subtotal});
    res.status(200).json({
        msg: `Cotizacion de producto Guardado`
    })
}

export const updateCotizacion_Productos = async (req: Request , res: Response) => {
    const {id, id_cotizacion, id_producto, valor_unidad, cantidad, subtotal} = req.body;
    await Cotizacion_Productos.update({id_cotizacion, id_producto, valor_unidad, cantidad, subtotal},{
        where:{
            id
        }
    })
    res.status(200).json ({
        msg: `Cotizacion actualizada con éxito`
    })
}

export const deleteCotizacion_Productos = async (req: Request , res: Response) => {
    const { id } = req.params;
 
     await Cotizacion_Productos.destroy({
         where:{
            id
         }
     })
     res.status(200).json({
         msg: `Cotización Eliminada con Éxito`
     })
 }



