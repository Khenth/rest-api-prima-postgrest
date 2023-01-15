"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../controllers/");
const middleware_1 = require("../middleware/");
exports.AuthRouter = (0, express_1.Router)();
exports.AuthRouter.post('/login', [
    (0, express_validator_1.check)('email', 'correo obligatorio').isEmail(),
    (0, express_validator_1.check)('password', 'password obligatorio').not().isEmpty(),
    middleware_1.validarCampos
], controllers_1.login);
exports.AuthRouter.post('/google', [
    (0, express_validator_1.check)('id_token', 'Token google necesario').not().isEmpty(),
    middleware_1.validarCampos
], controllers_1.googleSingIn);
exports.AuthRouter.get('/', middleware_1.validarJWT, controllers_1.renovarToken);
exports.AuthRouter.get('/navigation', middleware_1.validarJWT, controllers_1.navigateUser);
// AuthRouter.get('/login/farm', validarJWT,)
//# sourceMappingURL=auth.js.map