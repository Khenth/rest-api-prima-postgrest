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
exports.existingId = exports.existingEmail = void 0;
const connection_1 = __importDefault(require("../db/connection"));
// const esRolValido =  async(rol = '')=>{
//     const existingRol = await Role.findOne({rol});
//     if(!existingRol){
//         throw new Error(`El rol ${rol} no existe`)
//     }
// }
const existingEmail = (email = '') => __awaiter(void 0, void 0, void 0, function* () {
    const existingEmail = yield connection_1.default.user.findUnique({
        where: { email: email }
    });
    if (existingEmail) {
        throw new Error(`Correo existente`);
    }
});
exports.existingEmail = existingEmail;
const existingId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existingId = yield connection_1.default.user.findUnique({ where: { id } });
    if (!existingId) {
        throw new Error(`Id ${id} no existe`);
    }
});
exports.existingId = existingId;
// const existeSpecie = async(id) =>{
//     const existeSpecie = await Specie.findById(id);
//     if(!existeSpecie){
//         throw new Error(`Id Specie ${id} no existe`)
//     }
// }
// const existeFarmCropHarvest = async(id) =>{
//     const existeFarmCropHarvest = await FarmCropHarvest.findById(id);
//     if(!existeFarmCropHarvest){
//         throw new Error(`Id FarmCropHarvest ${id} no existe`)
//     }
// }
// const existeVariety = async(id)=>{
//     const existeVariety = await Variety.findById(id);
//     if(!existeVariety){
//         throw new Error(`Id Varietyo ${id} no existe`)
//     }
// }
// const validatedCollections = (collection = '', collections = [])=>{
//     const include = collections.includes(collection);
//     if(!include){
//         throw new Error(`La coleccion ${collection} no es permitida, ${collections} `)
//     }
//     return true;
// }
//# sourceMappingURL=db_validators.js.map