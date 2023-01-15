"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subMenuRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../../../controllers");
const middleware_1 = require("../../../middleware");
exports.subMenuRouter = (0, express_1.Router)();
exports.subMenuRouter.get('/', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.getSubMenu);
exports.subMenuRouter.put('/:id', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.putSubMenu);
exports.subMenuRouter.post('/', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.postSubMenu);
exports.subMenuRouter.delete('/:id', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.deleteSubMenu);
exports.subMenuRouter.get('/:id', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.getSubMenuId);
//# sourceMappingURL=submenu.js.map