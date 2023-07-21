import { Request, Response } from "express";
import Roles from "../models/usersdb";

export const consulRoles = async(req: Request, res: Response) => {
    
    const roles = await Roles.findAll();
    res.status(200).json ({
        msg: 'Rol Consultado con éxito',
        roles
    })
}

export  const consulRolessById = async (req: Request, res: Response) => {
    const { id_rol }  = req.params;
    const roles = await Roles.findByPk(id_rol);
    res.status(200).json ({
        roles
    })
 }

 export const saveRoles = async(req: Request , res: Response) => {

    const {nombre} = req.body;
    const roles = await Roles.create({nombre});
    res.status(200).json({
        msg: `Rol Guardado`
    })
}

export const updateRoles = async (req: Request , res: Response) => {
    const {id_rol, nombre} = req.body;
    await Roles.update({nombre},{
        where:{
            id_rol
        }
    })
    res.status(200).json ({
        msg: `Rol Actualizado`
    })
}


export const deleteRoles = async (req: Request , res: Response) => {
    const { id_rol } = req.params;
 
     await Roles.destroy({
         where:{
            id_rol
         }
     })
     res.status(200).json({
         msg: 'Rol Eliminado'
     })
 }