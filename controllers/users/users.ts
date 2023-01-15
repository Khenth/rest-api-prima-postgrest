import { Request, Response } from "express";
import becryptjs from 'bcryptjs';
import db from '../../db/connection'


export const getUsers=async(req: Request, res: Response)=>{
    const users = await db.user.findMany()
    res.json(users)
}
export const getUserbyId=async (req: Request, res: Response)=>{
    const{id} = req.params;

    const user = await db.user.findUnique({
        where: {id}
    })
    if(!user){
        res.status(404).json({
            msg: `No existe usuario ${id}`
        })
    }else{
        res.json(user)
    }
}
export const postUser = async (req: Request, res: Response)=>{
    const {status,...data} = req.body
    const salt = becryptjs.genSaltSync();
    data.password = becryptjs.hashSync(data.password, salt);
    try {
        const user = await db.user.create({
            data: data,
            })
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'No se puede Crear Usuario'
        })
        
    }

}
export const putUsers= async (req: Request, res: Response)=>{
    const {body} = req;
    const id = req.params.id;
    try {
        const user = await db.user.update({
            where: {id},
            data : body
        })
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'No se puede Actualizar Usuario'
        })
        
    }
}
export const deleteUsers= async (req: Request, res: Response)=>{
    const {id} = req.params;
    const {status,...data} = req.body
    //borrar fisicamente
    // const user = await User.findByIdAndDelete(id);
    if (status == null){
        try {
            const user = await db.user.update({
                where:{id},
                data : {status : false}
            })
            res.status(201).json({user})
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
     }else{
        try {
            const user = await db.user.update({
                where:{id},
                data : {status : status}
            })
            res.status(201).json({user})
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Hable con el administrador'
            })
        }
      }
}