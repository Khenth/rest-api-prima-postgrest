"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../../../controllers");
const middleware_1 = require("../../../middleware");
exports.menuRouter = (0, express_1.Router)();
exports.menuRouter.get('/', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.getMenu);
exports.menuRouter.put('/:id', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.putMenu);
exports.menuRouter.post('/', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.postMenu);
exports.menuRouter.delete('/:id', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.deleteMenu);
exports.menuRouter.get('/:id', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.getMenuId);
//# sourceMappingURL=menu.js.map