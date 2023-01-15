import express, {Application} from 'express'
import {UserRouter,UserGrouprouter, AuthRouter, mainMenuRouter, menuRouter, subMenuRouter, userGroupMenuRouter} from '../routes/'
import cors from 'cors'
import db from '../db/connection';
import morgan from 'morgan'




class Server {
    private app: Application;
    private port : string;
    private apiPaths={
         //user
         userPath: '/api/user/manager',
         userGroupPath: '/api/user/group',
         //auth
         authPath: '/api/auth',
         //Menu
         mainMenuPath: '/api/navigation/mainmenu',
         menuPath: '/api/navigation/menu',
         subMenuPath: '/api/navigation/submenu',
         //user group menu
         userGroupMenuPath: '/api/navigation',
         // cruds
         speciesPath: '/api/species',
         varietiesPath: '/api/varieties',
         farmsPath: '/api/farms',
         zonesPath: '/api/zones',
         lotsPath: '/api/lots',
         // registro de cosecha
         farmCropHarvestPath: '/api/farm/harvest',

         //buscar
         buscarPath: '/api/buscar',
         //Carga de archivos
         uploadsPath: '/api/uploads',

    }
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8080';
        
        //metodos iniciales
        this.dbConnection();
        this.middleWares();
        this.routers();
    }

    async dbConnection(){
        try {
                await db.$connect()
                console.log('DataBase Online')
            } catch (error) {
            console.log(error)
            throw new Error('Error en conexion con db');
            
        }
    }

    middleWares(){
        //CORS
        this.app.use(cors());
        //Leer Body
        this.app.use(express.json());
        // Ver las peticiones en consola
        this.app.use(morgan('dev'));
        //Carpeta Publica
        this.app.use(express.static('public'));
    }

    routers(){
        //routes users
        this.app.use(this.apiPaths.userPath, UserRouter)
        this.app.use(this.apiPaths.userGroupPath, UserGrouprouter)
        this.app.use(this.apiPaths.authPath, AuthRouter)
        //routes menu
        this.app.use(this.apiPaths.mainMenuPath, mainMenuRouter)
        this.app.use(this.apiPaths.menuPath, menuRouter)
        this.app.use(this.apiPaths.subMenuPath, subMenuRouter)
        //routes user group menu
        this.app.use(this.apiPaths.userGroupMenuPath, userGroupMenuRouter)
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor corriendo en puerto '+ this.port)
        })
    }

}

export default Server;