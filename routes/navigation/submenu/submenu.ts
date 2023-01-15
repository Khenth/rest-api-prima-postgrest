import {Router} from 'express';
import {getSubMenu, putSubMenu, postSubMenu, deleteSubMenu, getSubMenuId} from '../../../controllers';
import { validarJWT, validarCampos} from '../../../middleware';

export const subMenuRouter = Router();

subMenuRouter.get('/',[validarJWT, validarCampos], getSubMenu );
subMenuRouter.put('/:id',[validarJWT, validarCampos],putSubMenu);
subMenuRouter.post('/',[validarJWT, validarCampos],postSubMenu);
subMenuRouter.delete('/:id',[validarJWT, validarCampos], deleteSubMenu);
subMenuRouter.get('/:id',[validarJWT, validarCampos], getSubMenuId );
