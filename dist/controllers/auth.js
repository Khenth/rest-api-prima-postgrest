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
exports.navigateUser = exports.renovarToken = exports.googleSingIn = exports.login = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const helpers_1 = require("../helpers/");
const connection_1 = __importDefault(require("../db/connection"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // console.log(email, password)
    try {
        // verificar correo   
        const user = yield connection_1.default.user.findUnique({
            where: { email }
        });
        if (!user) {
            return res.status(400).json({
                msg: "usuario / password no son correctos"
            });
        }
        // verificar estado de usuario
        if (!user.status) {
            return res.status(400).json({
                msg: "usuario no existe"
            });
        }
        // verificar password
        const validPass = bcryptjs_1.default.compareSync(password, user.password);
        // console.log(validPass)
        if (!validPass) {
            return res.status(400).json({
                msg: "Password incorrecto"
            });
        }
        // generar JWT
        const token = yield (0, helpers_1.generarJWT)(user.id);
        res.json({
            user,
            token,
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Comunicarlo al administrador'
        });
    }
});
exports.login = login;
const googleSingIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_token } = req.body;
    try {
        const { nombre, img, correo } = yield (0, helpers_1.googleVerify)(id_token);
        console.log(nombre, img, correo);
        //console.log(googleUser);
        let user = yield connection_1.default.user.findUnique({
            where: { email: correo }
        });
        if (!user) {
            //crearlo
            const data = {
                name: nombre,
                username: nombre,
                email: correo,
                password: ':p',
                //    idusergroup: '',
                img,
                google: true
            };
            user = yield connection_1.default.user.create({ data });
        }
        //si usuario esta desactivado en db
        if (!user.status) {
            return res.status(401).json({
                msg: 'Usuario denegado'
            });
        }
        // generar JWT
        const token = yield (0, helpers_1.generarJWT)(user.id);
        res.json({
            user,
            token
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({
            msg: 'El token no se pudo verificar'
        });
    }
});
exports.googleSingIn = googleSingIn;
const renovarToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid, user } = req;
    const token = yield (0, helpers_1.generarJWT)(uid);
    res.json({
        user,
        token
    });
});
exports.renovarToken = renovarToken;
const navigateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid, user } = req;
    console.log(user === null || user === void 0 ? void 0 : user.usergroupId);
    let authMenu = yield connection_1.default.userGroupMenu.findMany({
        where: { usergroupId: user === null || user === void 0 ? void 0 : user.usergroupId },
        select: {
            // id : true,
            submenu: {
                select: {
                    menu: {
                        select: {
                            mainmenu: { select: {
                                    id: true,
                                    mainmenu: true,
                                    route: true,
                                    icon: true
                                } }
                        }
                    }
                }
            }
        },
    });
    res.json({
        authMenu
    });
});
exports.navigateUser = navigateUser;
//# sourceMappingURL=auth.js.map