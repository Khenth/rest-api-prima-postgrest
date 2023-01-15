"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userGroupMenuRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../../../controllers");
const middleware_1 = require("../../../middleware");
exports.userGroupMenuRouter = (0, express_1.Router)();
exports.userGroupMenuRouter.get('/', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.getUserGroupMenu);
exports.userGroupMenuRouter.put('/:id', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.putUserGroupMenu);
exports.userGroupMenuRouter.post('/', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.postUserGroupMenu);
exports.userGroupMenuRouter.delete('/:id', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.deleteUserGroupMenu);
exports.userGroupMenuRouter.get('/:id', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.getUserGroupMenuId);
//# sourceMappingURL=authmenu.js.map