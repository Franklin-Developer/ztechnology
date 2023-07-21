import { Request, Response } from "express";
import Productos from "../models/productosdb";

export const consulProductos = async(req: Request, res: Response) => {
    
    const products = await Productos.findAll();
    res.status(200).json ({
        msg: 'Producto Consultado con éxito',
        products
    })
}


export  const consulProductosById = async (req: Request, res: Response) => {
    const { id }  = req.params;
    const products = await Productos.findByPk(id);
    res.status(200).json ({
        products
    })
 }

 export const saveProductos = async(req: Request , res: Response) => {

    const {id, nombre, precio, cantidad} = req.body;
    const products = await Productos.create({nombre, precio, cantidad});
    res.status(200).json({
        msg: `Producto Guardado`
    })
}


export const updateProductos = async (req: Request , res: Response) => {
    const {id, nombre, precio, cantidad } = req.body;
    await Productos.update({nombre, precio, cantidad},{
        where:{
            id
        }
    })
    res.status(200).json ({
        msg: `Producto Actualizado`
    })
}

export const deleteProductos = async (req: Request , res: Response) => {
    const { id } = req.params;
 
     await Productos.destroy({
         where:{
             id
         }
     })
     res.status(200).json({
         msg: `Producto Eliminado`
     })
 }





