"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("../routes/");
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../db/connection"));
const morgan_1 = __importDefault(require("morgan"));
class Server {
    constructor() {
        this.apiPaths = {
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
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        //metodos iniciales
        this.dbConnection();
        this.middleWares();
        this.routers();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.$connect();
                console.log('DataBase Online');
            }
            catch (error) {
                console.log(error);
                throw new Error('Error en conexion con db');
            }
        });
    }
    middleWares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //Leer Body
        this.app.use(express_1.default.json());
        // Ver las peticiones en consola
        this.app.use((0, morgan_1.default)('dev'));
        //Carpeta Publica
        this.app.use(express_1.default.static('public'));
    }
    routers() {
        //routes users
        this.app.use(this.apiPaths.userPath, routes_1.UserRouter);
        this.app.use(this.apiPaths.userGroupPath, routes_1.UserGrouprouter);
        this.app.use(this.apiPaths.authPath, routes_1.AuthRouter);
        //routes menu
        this.app.use(this.apiPaths.mainMenuPath, routes_1.mainMenuRouter);
        this.app.use(this.apiPaths.menuPath, routes_1.menuRouter);
        this.app.use(this.apiPaths.subMenuPath, routes_1.subMenuRouter);
        //routes user group menu
        this.app.use(this.apiPaths.userGroupMenuPath, routes_1.userGroupMenuRouter);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map