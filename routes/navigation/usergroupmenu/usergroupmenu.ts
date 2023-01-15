import {Router} from 'express';
import {getUserGroupMenu, putUserGroupMenu, postUserGroupMenu, deleteUserGroupMenu, getUserGroupMenuId} from '../../../controllers';
import { validarJWT, validarCampos  } from '../../../middleware'



export const userGroupMenuRouter = Router();

userGroupMenuRouter.get('/',[validarJWT, validarCampos],getUserGroupMenu );
userGroupMenuRouter.put('/:id',[validarJWT, validarCampos],putUserGroupMenu);
userGroupMenuRouter.post('/',[validarJWT, validarCampos],postUserGroupMenu);
userGroupMenuRouter.delete('/:id',[validarJWT, validarCampos], deleteUserGroupMenu);
userGroupMenuRouter.get('/:id',[validarJWT, validarCampos], getUserGroupMenuId );
