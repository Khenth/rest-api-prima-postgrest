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
exports.getUserGroupId = exports.deleteUserGroup = exports.postUserGroup = exports.putUserGroup = exports.getUserGroup = void 0;
const connection_1 = __importDefault(require("../../../db/connection"));
const getUserGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userGroupMenus = yield connection_1.default.userGroupMenu.findMany({
            where: { status: true }
        });
        res.json({ userGroupMenus });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Hable con el administrador' });
    }
});
exports.getUserGroup = getUserGroup;
const putUserGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    try {
        const userGroupMenu = yield connection_1.default.userGroupMenu.update({
            where: { id },
            data: data
        });
        res.status(201).json({
            userGroupMenu
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putUserGroup = putUserGroup;
const postUserGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const userGroupMenu = yield connection_1.default.userGroupMenu.create({ data });
        res.status(201).json({ userGroupMenu });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postUserGroup = postUserGroup;
const deleteUserGroup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { status } = _a, data = __rest(_a, ["status"]);
    if (status == null) {
        try {
            const userGroupMenu = yield connection_1.default.userGroupMenu.update({
                where: { id },
                data: { status: false }
            });
            res.status(201).json({ userGroupMenu });
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
            const userGroupMenu = yield connection_1.default.userGroupMenu.update({
                where: { id },
                data: { status: status }
            });
            res.status(201).json({ userGroupMenu });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                msg: 'Hable con el administrador'
            });
        }
    }
});
exports.deleteUserGroup = deleteUserGroup;
const getUserGroupId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const userGroupMenu = yield connection_1.default.userGroupMenu.findUnique({ where: { id } });
        res.status(201).json({ userGroupMenu });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.getUserGroupId = getUserGroupId;
//# sourceMappingURL=usergroupmenu.js.map