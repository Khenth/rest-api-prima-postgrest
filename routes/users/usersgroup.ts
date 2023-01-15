import {Router} from 'express';
import { check } from 'express-validator';
import {getUserGroup, putUserGroup, postUserGroup, deleteUserGroup, getUserGroupId} from '../../controllers/';
// import { esRolValido, existeMail, existeId } from '../helpers/db_validators';
// import { validarJWT } = require('../middleware/validar-jwt');
// import { isAdminRol, tienRol } = require('../middleware/validar-roles');
// import { validarCampos } = require('../middleware/validate-campos');
import { validarJWT,validarCampos  } from '../../middleware/';



export const UserGrouprouter = Router();

UserGrouprouter.get('/', getUserGroup );

UserGrouprouter.put('/:id',putUserGroup);


UserGrouprouter.post('/', [
    check('name', 'Nombre Obligatorio').not().isEmpty(),
    validarCampos
],postUserGroup);

UserGrouprouter.delete('/:id', deleteUserGroup);

UserGrouprouter.get('/:id', getUserGroupId );






