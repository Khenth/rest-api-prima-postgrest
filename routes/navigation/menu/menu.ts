import {Router}  from 'express';
import {getMenu, putMenu, postMenu, deleteMenu, getMenuId} from '../../../controllers';
import { validarJWT,validarCampos  } from '../../../middleware';



export const menuRouter = Router();

menuRouter.get('/', [validarJWT, validarCampos] , getMenu );
menuRouter.put('/:id', [validarJWT, validarCampos],putMenu);
menuRouter.post('/', [validarJWT, validarCampos],postMenu);
menuRouter.delete('/:id', [validarJWT, validarCampos], deleteMenu);
menuRouter.get('/:id', [validarJWT, validarCampos], getMenuId );






