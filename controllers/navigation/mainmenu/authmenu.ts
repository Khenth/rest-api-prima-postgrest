import { Request, Response } from 'express'
import db from '../../../db/connection'




 
export const getMainMenu = async (req : Request, res : Response) => {
      try {
        const mainMenus = await db.mainMenu.findMany({
          where: {status: true}
        })
      res.json(
          {
            mainMenus,
          }
      ) 
      } catch (error) {
        console.log(error);
            res.status(500).json({
                msg: 'Hable con el administrador'
            }) 
      }
  }

export const putMainMenu = async (req : Request, res : Response) => {
  const {id} = req.params
  const data = req.body;
  data.mainmenu = data.mainmenu.toUpperCase();
  try {
    const mainMenu = await db.mainMenu.update({
      where:{id},
      data: data
    });
  
    res.status(201).json(
        {
                      mainMenu
        }
    )
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    })
  }
  
  }

export const postMainMenu = async (req : Request, res : Response) => {
    const data = req.body;
    data.mainmenu = data.mainmenu.toUpperCase();
    try {
      const mainMenu = await db.mainMenu.create({data});
      res.status(201).json(
          {
                        mainMenu
          }
      )
    } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: 'Hable con el administrador'
      })
    }
  }

export const deleteMainMenu = async(req : Request, res : Response) => {
  const {id} = req.params
  const {status,...data} = req.body;
  if (status == null){
    try {
      const mainMenu = await db.mainMenu.update({
        where:{id},
        data: {status: false}
      });
      res.status(201).json({mainMenu});
    } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: 'Hable con el administrador'
      })
    }
  }else{
    try {
      const mainMenu = await db.mainMenu.update({
        where:{id},
        data: {status:status}
      });
      res.status(201).json({mainMenu});
    } catch (error) {
      console.log(error);
      res.status(500).json({
          msg: 'Hable con el administrador'
      })
    }
  }
  }

export const getMainMenuId = async(req : Request, res : Response) => {
  const {id} = req.params
  
  try {
    const mainMenu = await db.mainMenu.findUnique({where:{id}})
  
    res.status(201).json(
        {
                      mainMenu
        }
    )
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
        msg: 'Hable con el administrador'
    })
  }
}

