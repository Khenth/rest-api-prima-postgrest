import { Request, Response } from 'express'
import db from '../../../db/connection'

 
export const getMenu = async (req : Request, res : Response) => {
      try {
        const Menus = await db.menu.findMany({
          where: {status: true}
        })
      res.json(
          {
            Menus,
          }
      ) 
      } catch (error) {
        console.log(error);
            res.status(500).json({
                msg: 'Hable con el administrador'
            }) 
      }
  }

export const putMenu = async (req : Request, res : Response) => {
  const {id} = req.params
  const data = req.body;
  data.menu = data.menu.toUpperCase();
  try {
    const Menu = await db.menu.update({
      where:{id},
      data: data
    });
  
    res.status(201).json(
        {
                      Menu
        }
    )
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    })
  }
  
  }

export const postMenu = async (req : Request, res : Response) => {
    const data = req.body;
    data.menu = data.menu.toUpperCase();
    try {
      const Menu = await db.menu.create({data});
      res.status(201).json(
          {
                        Menu
          }
      )
    } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: 'Hable con el administrador'
      })
    }
  }

export const deleteMenu = async(req : Request, res : Response) => {
  const {id} = req.params
  const {status,...data} = req.body;
  if (status == null){
    try {
      const Menu = await db.menu.update({
        where:{id},
        data: {status: false}
      });
      res.status(201).json({Menu});
    } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: 'Hable con el administrador'
      })
    }
  }else{
    try {
      const Menu = await db.menu.update({
        where:{id},
        data: {status:status}
      });
      res.status(201).json({Menu});
    } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: 'Hable con el administrador'
      })
    }
  }
  }

export const getMenuId = async(req : Request, res : Response) => {
  const {id} = req.params
  
  try {
    const Menu = await db.menu.findUnique({where:{id}})
  
    res.status(201).json(
        {
                      Menu
        }
    )
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    })
  }
}

