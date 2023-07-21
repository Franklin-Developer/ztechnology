import { Request, Response } from "express";
import Usuarios from "../models/usersdb";
import Roles from "../models/rolesdb";


export const consulUsers = async(req: Request, res: Response) => {

    const users = await Usuarios.findAll({
        attributes: ['Nombre', 'Apellidos', 'Email', 'Password', 'Foto', 'Edad', 'Estado', 'ROL_ID'],
        include: [{
            model: Roles
        }],
        where: {
            Estado: 1
        }
    });// SELECT * FROM USUARIOS

    res.status(200).json({
        msg: 'Consultar Usuarios',
        users
    })
}

export const consulUsersById = async(req: Request, res: Response) => {

    const { id } = req.params;
    const users = await Usuarios.findByPk(id);//SELECT * FROM USERS WHERE ID = id
    if (users) {
        res.status(200).json({
            users
        })
    } else {
        res.status(404).json({
            msg: 'El usuario no existe'
        })
    }
}

 export const saveUsers = async(req: Request , res: Response) => {

    const {Nombre, Apellidos, Email, Password, Foto, Edad, Estado, ROL_ID} = req.body;
    const users = await Usuarios.create({Nombre, Apellidos, Email, Password, Foto, Edad, Estado, ROL_ID});
    res.status(200).json({
        msg: `Usuario Guardado`
    })
}

export const updateUsers = async (req: Request , res: Response) => {
    const {id, Nombre, Apellidos, Email, Password, Foto, Edad, Estado, ROL_ID} = req.body;
    await Usuarios.update({Nombre, Apellidos, Email, Password, Foto, Edad, Estado, ROL_ID},{
        where:{
            id
        }
    })
    res.status(200).json ({
        msg: `User Actualizado`
    })
}

export const deleteUsers = async (req: Request , res: Response) => {
    const { id } = req.params;
 
     await Usuarios.destroy({
         where:{
            id
         }
     })
     res.status(200).json({
         msg: `Users Eliminado`
     })
 }




