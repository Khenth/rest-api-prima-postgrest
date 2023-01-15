import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import db from "../db/connection";


    export interface IPayload {
        uid: string;
        iat: number;
    } 

export const validarJWT = async (req : Request, res: Response , next : NextFunction)=>{

    const token = req.header('x-token');
    if(!token){
        return res.status(400).json(
            {msg: 'No hay token'}
        )
    }

    try {
       const {uid} = jwt.verify(token, process.env.SECRETTORPRIVATEKEY || 'Est03sMyPub11ckeySuNd47') as IPayload ;
       const user = await db.user.findUnique({where:{id:uid}});
       if(!user){
        return res.status(401).json({
            msg: 'usuario no existe'
        })}

       //si el usuario no esta activo

       if (!user.status){
          return res.status(401).json({
              msg: 'token no valido - usuario in-activo'
          })
       }

       req.uid = user.id;
       req.user = user;

        next();
    
    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'token no valido'
        })
        
    }


}

