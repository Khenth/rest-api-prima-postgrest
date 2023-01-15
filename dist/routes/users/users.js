"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const users_1 = require("../../controllers/users/users");
exports.UserRouter = (0, express_1.Router)();
exports.UserRouter.get('/', users_1.getUsers);
exports.UserRouter.get('/:id', users_1.getUserbyId);
exports.UserRouter.post('/', users_1.postUser);
exports.UserRouter.put('/:id', users_1.putUsers);
exports.UserRouter.delete('/:id', users_1.deleteUsers);
//# sourceMappingURL=users.js.map