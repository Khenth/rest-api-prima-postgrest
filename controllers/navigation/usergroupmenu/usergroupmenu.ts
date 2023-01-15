import { Request, Response } from 'express'
import db from '../../../db/connection'
 
export const getUserGroupMenu = async (req : Request, res : Response) => {
      try {
        const userGroupMenus = await db.userGroupMenu.findMany({
          where: {status: true}
        })
      res.json({userGroupMenus}) 
      } catch (error) {
        console.log(error);
            res.status(500).json({msg: 'Hable con el administrador'}) 
      }
  }

export const putUserGroupMenu = async (req : Request, res : Response) => {
  const {id} = req.params
  const data = req.body;
  try {
    const userGroupMenu = await db.userGroupMenu.update({
      where:{id},
      data: data
    });
  
    res.status(201).json(
        {
                      userGroupMenu
        }
    )
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    })
  }
  
  }

export const postUserGroupMenu = async (req : Request, res : Response) => {
    const data = req.body;
    try {
      const userGroupMenu = await db.userGroupMenu.create({data});
      res.status(201).json({userGroupMenu})
    } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: 'Hable con el administrador'
      })
    }
  }

export const deleteUserGroupMenu = async(req : Request, res : Response) => {
  const {id} = req.params
  const {status,...data} = req.body;
  if (status == null){
    try {
      const userGroupMenu = await db.userGroupMenu.update({
        where:{id},
        data: {status: false}
      });
      res.status(201).json({userGroupMenu});
    } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: 'Hable con el administrador'
      })
    }
  }else{
    try {
      const userGroupMenu = await db.userGroupMenu.update({
        where:{id},
        data: {status:status}
      });
      res.status(201).json({userGroupMenu});
    } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: 'Hable con el administrador'
      })
    }
  }
  }

export const getUserGroupMenuId = async(req : Request, res : Response) => {
  const {id} = req.params
  
  try {
    const userGroupMenu = await db.userGroupMenu.findUnique({where:{id}})
    res.status(201).json({userGroupMenu})    
  } catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    })
  }
}

