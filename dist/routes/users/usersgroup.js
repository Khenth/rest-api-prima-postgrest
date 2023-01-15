"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGrouprouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const controllers_1 = require("../../controllers/");
// import { esRolValido, existeMail, existeId } from '../helpers/db_validators';
// import { validarJWT } = require('../middleware/validar-jwt');
// import { isAdminRol, tienRol } = require('../middleware/validar-roles');
// import { validarCampos } = require('../middleware/validate-campos');
const middleware_1 = require("../../middleware/");
exports.UserGrouprouter = (0, express_1.Router)();
exports.UserGrouprouter.get('/', controllers_1.getUserGroup);
exports.UserGrouprouter.put('/:id', controllers_1.putUserGroup);
exports.UserGrouprouter.post('/', [
    (0, express_validator_1.check)('name', 'Nombre Obligatorio').not().isEmpty(),
    middleware_1.validarCampos
], controllers_1.postUserGroup);
exports.UserGrouprouter.delete('/:id', controllers_1.deleteUserGroup);
exports.UserGrouprouter.get('/:id', controllers_1.getUserGroupId);
//# sourceMappingURL=usersgroup.js.map