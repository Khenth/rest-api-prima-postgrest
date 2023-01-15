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
exports.validateFarm = void 0;
const connection_1 = __importDefault(require("../db/connection"));
const validateFarm = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let id = req.header('c-farm');
    if (!id) {
        return res.status(500).json({
            msg: 'Se Una finca Validad'
        });
    }
    const farm = yield connection_1.default.farm.findUnique({ where: { id } });
    if (!farm) {
        return res.status(401).json({
            msg: 'Finca no existe'
        });
    }
    //si el finca no esta activo
    if (!farm.status) {
        return res.status(401).json({
            msg: 'Finca inActiva'
        });
    }
    req.farm = farm;
    next();
});
exports.validateFarm = validateFarm;
//# sourceMappingURL=validar-farm.js.map