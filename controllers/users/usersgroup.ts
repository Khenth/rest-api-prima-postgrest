import { Request, Response } from "express";
import db from '../../db/connection'

export const getUserGroup = async (req: Request , res : Response) => {
    const {limit = 5, init = 0} = req.query;
    try {
        const UserGroups = await db.userGroup.findMany()
        res.json({UserGroups})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
  }

export const putUserGroup = async (req: Request, res : Response) => {
      const {id} = req.params;
      const {status, ...data} = req.body;
      data.name = data.name.toUpperCase();
      try {
        const updateUserGroup = await db.userGroup.update({where:{id}, data: data })
        res.status(200).json(updateUserGroup);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador Error Al actualizar Grupo de Usuario'
        })
    }      
  }

export const postUserGroup = async (req: Request, res : Response) => {
    const {status, ...data} = req.body;
    data.name = data.name.toUpperCase();
    try {
        const userGroup = await db.userGroup.create({data: data})
        res.status(201).json({userGroup})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
  }

export const deleteUserGroup = async(req: Request, res : Response) => {
  
  const {id} = req.params
  const {status,...data} = req.body

  if (status == null){
    try {
        const deleteusergroup = await db.userGroup.update({
            where:{id},
            data : {status : false}
        })
        res.status(201).json({deleteusergroup})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
 }else{

    try {
        const deleteusergroup = await db.userGroup.update({
            where:{id},
            data : {status : status}
        })
        res.status(201).json({deleteusergroup})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
  }
  }

  export const getUserGroupId = async(req : Request, res : Response) => {

    const {id} = req.params;
    try {
      const updateUserGroup = await db.userGroup.findFirst({where:{id}})
      res.status(200).json(updateUserGroup);
  } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: 'Hable con el administrador Error Al actualizar Grupo de Usuario'
      })
  }    
}

