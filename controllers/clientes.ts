import { Request, Response } from "express";
import Clientes from "../models/clientesdb";


export const consulClient = async(req: Request, res: Response) => {
    
    const clientes = await Clientes.findAll();
    res.status(200).json ({
        msg: 'Cliente Consultado con éxito',
        clientes
    })
}

export  const consulClientById = async (req: Request, res: Response) => {
    const { id }  = req.params;
    const clientes = await Clientes.findByPk(id);
    res.status(200).json ({
        clientes
    })
 }

 export const saveClient = async(req: Request , res: Response) => {

    const {identificacion, nombres, apellidos, correo, telefono} = req.body;
    const clientes = await Clientes.create({identificacion, nombres, apellidos, correo, telefono});
    res.status(200).json({
        msg: `Cliente Guardado`
    })
}

export const updateClientes = async (req: Request , res: Response) => {
    const {id, identificacion, nombres, apellidos, correo, telefono} = req.body;
    await Clientes.update({identificacion, nombres, apellidos, correo, telefono},{
        where:{
            id
        }
    })
    res.status(200).json ({
        msg: `Cliente Actualizado`
    })
}

export const deleteClientes = async (req: Request , res: Response) => {
    const { id } = req.params;
 
     await Clientes.destroy({
         where:{
             id
         }
     })
     res.status(200).json({
         msg: `Cliente Eliminado`
     })
 }

