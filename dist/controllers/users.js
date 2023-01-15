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
exports.deleteUsers = exports.putUsers = exports.postUser = exports.getUserbyId = exports.getUsers = void 0;
const connection_1 = __importDefault(require("../db/connection"));
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
    const { body } = req;
    if (body.img == null) {
        body.img = "";
    }
    try {
        const user = yield connection_1.default.user.create({ data: body });
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postUser = postUser;
const putUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const id = req.params.id;
    if (body.img == null) {
        body.img = "";
    }
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
            msg: 'Hable con el administrador'
        });
    }
});
exports.putUsers = putUsers;
const deleteUsers = (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        msg: 'delete Users'
    });
};
exports.deleteUsers = deleteUsers;
//# sourceMappingURL=users.js.map