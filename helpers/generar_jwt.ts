import jwt from 'jsonwebtoken';
import db from '../db/connection';

export interface IPayload {
    uid: string;
    iat: number;
} 


export const generarJWT = (uid:string='')=>{
    return new Promise((resolve, reject)=>{

        const payload = {uid};

        jwt.sign(payload, process.env.SECRETTORPRIVATEKEY  ,{expiresIn: process.env.VALIT_JWT},(err, token)=>{
                if(err){
                    console.log(err)
                    reject('No se pudo generar jwt');
                }else{
                    resolve(token);
                }
        })
    })



}

export const comprobarJWT = async(token = '')=>{
        try {
            if(token.length < 10){
                return null;
            }
                
            const {uid} = jwt.verify(token, process.env.SECRETTORPRIVATEKEY) as IPayload
            const user = await db.user.findUnique({
                where:{id:uid}
            })
            if(user){
                if(user.status){
                    return user;
                }else{
                    return null;
                }
            }else{
                return null;
            }

        } catch (error) {
                return null;
        }
}

