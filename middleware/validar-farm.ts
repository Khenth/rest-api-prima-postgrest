import { NextFunction, Request, Response } from "express";
import db from "../db/connection"


 
export const validateFarm = async (req: Request, res: Response, next : NextFunction )=>{
    let id = req.header('c-farm'); 
    if(!id){
        return res.status(500).json({
            msg: 'Se Una finca Validad'
        })}
    
    const farm = await db.farm.findUnique({where: {id}})
        
       if(!farm){
        return res.status(401).json({
            msg: 'Finca no existe'
        })}
       //si el finca no esta activo
       if (!farm.status){
          return res.status(401).json({
              msg: 'Finca inActiva'
          })
       }
       
       req.farm = farm;

    next();
}

