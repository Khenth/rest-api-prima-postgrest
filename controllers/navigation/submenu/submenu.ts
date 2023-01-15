import { Request, Response } from 'express'
import db from '../../../db/connection'

export const getSubMenu = async (req : Request, res : Response) => {
      try {
        const subMenus = await db.subMenu.findMany({
          where: {status: true}
        })
      res.json(
          {
            subMenus,
          }
      ) 
      } catch (error) {
        console.log(error);
            res.status(500).json({
                msg: 'Hable con el administrador'
            }) 
      }
  }

export const putSubMenu = async (req : Request, res : Response) => {
  const {id} = req.params
  const data = req.body;
  data.title = data.title.toUpperCase();
  try {
    const subMenu = await db.subMenu.update({
      where:{id},
      data: data
    });
  
    res.status(201).json(
        {
                      subMenu
        }
    )
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    })
  }
  
  }

export const postSubMenu = async (req : Request, res : Response) => {
    const data = req.body;
    data.title = data.title.toUpperCase();
    try {
      const subMenu = await db.subMenu.create({data});
      res.status(201).json(
          {
                        subMenu
          }
      )
    } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: 'Hable con el administrador'
      })
    }
  }

export const deleteSubMenu = async(req : Request, res : Response) => {
  const {id} = req.params
  const {status,...data} = req.body;
  if (status == null){
    try {
      const subMenu = await db.subMenu.update({
        where:{id},
        data: {status: false}
      });
      res.status(201).json({subMenu});
    } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: 'Hable con el administrador'
      })
    }
  }else{
    try {
      const subMenu = await db.subMenu.update({
        where:{id},
        data: {status:status}
      });
      res.status(201).json({subMenu});
    } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: 'Hable con el administrador'
      })
    }
  }
  }

export const getSubMenuId = async(req : Request, res : Response) => {
  const {id} = req.params
  
  try {
    const subMenu = await db.subMenu.findUnique({where:{id}})
  
    res.status(201).json(
        {
                      subMenu
        }
    )
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    })
  }
}

