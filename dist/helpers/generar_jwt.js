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
exports.comprobarJWT = exports.generarJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const connection_1 = __importDefault(require("../db/connection"));
const generarJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jsonwebtoken_1.default.sign(payload, process.env.SECRETTORPRIVATEKEY, { expiresIn: process.env.VALIT_JWT }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar jwt');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generarJWT = generarJWT;
const comprobarJWT = (token = '') => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (token.length < 10) {
            return null;
        }
        const { uid } = jsonwebtoken_1.default.verify(token, process.env.SECRETTORPRIVATEKEY);
        const user = yield connection_1.default.user.findUnique({
            where: { id: uid }
        });
        if (user) {
            if (user.status) {
                return user;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    catch (error) {
        return null;
    }
});
exports.comprobarJWT = comprobarJWT;
//# sourceMappingURL=generar_jwt.js.map