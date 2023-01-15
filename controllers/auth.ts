import bcryptjs from "bcryptjs";
import { Request, Response} from "express";
import { generarJWT, googleVerify } from "../helpers/";
import db from '../db/connection'



export const login = async (req: Request , res: Response )=>{
    const{ email, password} = req.body;
    // console.log(email, password)
    try {
        // verificar correo   
       const user = await db.user.findUnique({
        where : {email}
       })
        if(!user){
            return res.status(400).json({
                msg: "usuario / password no son correctos"
            })
        }
        // verificar estado de usuario
        if(!user.status){
            return res.status(400).json({
                msg: "usuario no existe"
            })
        }
        // verificar password
        const validPass = bcryptjs.compareSync(password, user.password);
        // console.log(validPass)
        if(!validPass){
            return res.status(400).json({
                msg: "Password incorrecto"
            })
        }
        // generar JWT
        const token = await generarJWT(user.id)
        res.json({
           user,
           token,
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg:'Comunicarlo al administrador'
        })
    }

    

}

 export   const googleSingIn = async(req: Request, res: Response)=>{

        const {id_token} = req.body;

        try {
            const {nombre, img, correo} = await googleVerify(id_token); 
            console.log(nombre, img, correo)
            //console.log(googleUser);
            let user = await db.user.findUnique({
                where:{email : correo}
            });
            if (!user){
                //crearlo
               const data = {
                   name: nombre,
                   username: nombre,
                   email: correo,
                   password: ':p',
                //    idusergroup: '',
                   img,
                   google: true
                   
               }
               user = await db.user.create({data})
              
            }

            //si usuario esta desactivado en db

            if(!user.status){
                return res.status(401).json({
                    msg : 'Usuario denegado'
                })
            }

             // generar JWT
            const token = await generarJWT(user.id)

            res.json({
               user,
               token
            });
        } catch (error) {
            console.log(error)
            res.status(400).json({
                msg: 'El token no se pudo verificar'
            })
            
        }


    }

export const renovarToken=async (req : Request, res: Response)=>{
        const {uid, user} = req;

        const token = await generarJWT(uid)

        res.json(
            {
                user,
                token
            }
        )}


export const navigateUser = async (req : Request, res: Response)=>{
        const {uid, user} = req;
        console.log(user?.usergroupId)
      let  authMenu = await db.userGroupMenu.findMany({
        where: {usergroupId : user?.usergroupId},
        select:{
            // id : true,
            submenu:{ 
                select:{
                    menu:{
                        select:{
                            mainmenu:{select :{
                                id:true,
                                mainmenu : true,
                                route: true,
                                icon: true
                            }}}
                        }
                    }
                }
            },
        
       
        
        })


        res.json(
            {   
                authMenu
            }
        )}
