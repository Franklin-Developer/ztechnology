import { Request, Response } from "express";
import Cotizaciones from "../models/cotizacionesdb";
import Clientes from "../models/clientesdb";

export const consulCotizaciones = async(req: Request, res: Response) => {

    const cotizacion = await Cotizaciones.findAll({
        attributes: ['numero_cotizacion', 'descuento', 'total', 'id_Cliente'],
        include: [{
            model: Clientes
        }],
       
    });

    res.status(200).json({
        msg: 'Consultar Cotizaciones',
        cotizacion
    })
}

export  const consulCotizacionesById = async (req: Request, res: Response) => {
    const { id }  = req.params;
    const cotizacion = await Cotizaciones.findByPk(id);
    res.status(200).json ({
        cotizacion
    })
 }

 export const saveCotizaciones = async(req: Request , res: Response) => {

    const {numero_cotizacion, descuento, total, id_cliente} = req.body;
    const cotizacion = await Cotizaciones.create({numero_cotizacion, descuento, total, id_cliente});
    res.status(200).json({
        msg: `Cotización Guardada`
    })
}

export const updateCotizaciones = async (req: Request , res: Response) => {
    const {id, numero_cotizacion, descuento, total, id_cliente} = req.body;
    await Cotizaciones.update({numero_cotizacion, descuento, total, id_cliente},{
        where:{
            id
        }
    })
    res.status(200).json ({
        msg: `Cotización Actualizado`
    })
}

export const deleteCotizaciones = async (req: Request , res: Response) => {
    const { id } = req.params;
 
     await Cotizaciones.destroy({
         where:{
            id
         }
     })
     res.status(200).json({
         msg: `Cotización Eliminada`
     })
 }

 



