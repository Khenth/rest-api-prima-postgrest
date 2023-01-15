"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainMenuRouter = void 0;
const express_1 = require("express");
const controllers_1 = require("../../../controllers");
const middleware_1 = require("../../../middleware");
exports.mainMenuRouter = (0, express_1.Router)();
exports.mainMenuRouter.get('/', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.getMainMenu);
exports.mainMenuRouter.put('/:id', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.putMainMenu);
exports.mainMenuRouter.post('/', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.postMainMenu);
exports.mainMenuRouter.delete('/:id', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.deleteMainMenu);
exports.mainMenuRouter.get('/:id', [middleware_1.validarJWT, middleware_1.validarCampos], controllers_1.getMainMenuId);
//# sourceMappingURL=mainmenu.js.map