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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsers = exports.putUsers = exports.postUser = exports.getUserbyId = exports.getUsers = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const connection_1 = __importDefault(require("../../db/connection"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield connection_1.default.user.findMany();
    res.json(users);
});
exports.getUsers = getUsers;
const getUserbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield connection_1.default.user.findUnique({
        where: { id }
    });
    if (!user) {
        res.status(404).json({
            msg: `No existe usuario ${id}`
        });
    }
    else {
        res.json(user);
    }
});
exports.getUserbyId = getUserbyId;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { status } = _a, data = __rest(_a, ["status"]);
    const salt = bcryptjs_1.default.genSaltSync();
    data.password = bcryptjs_1.default.hashSync(data.password, salt);
    try {
        const user = yield connection_1.default.user.create({
            data: data,
        });
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'No se puede Crear Usuario'
        });
    }
});
exports.postUser = postUser;
const putUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const id = req.params.id;
    try {
        const user = yield connection_1.default.user.update({
            where: { id },
            data: body
        });
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'No se puede Actualizar Usuario'
        });
    }
});
exports.putUsers = putUsers;
const deleteUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _b = req.body, { status } = _b, data = __rest(_b, ["status"]);
    //borrar fisicamente
    // const user = await User.findByIdAndDelete(id);
    if (status == null) {
        try {
            const user = yield connection_1.default.user.update({
                where: { id },
                data: { status: false }
            });
            res.status(201).json({ user });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Hable con el administrador'
            });
        }
    }
    else {
        try {
            const user = yield connection_1.default.user.update({
                where: { id },
                data: { status: status }
            });
            res.status(201).json({ user });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Hable con el administrador'
            });
        }
    }
});
exports.deleteUsers = deleteUsers;
//# sourceMappingURL=users.js.map