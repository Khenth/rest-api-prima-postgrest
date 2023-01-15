import {Router} from 'express';
import {getMainMenu, putMainMenu, postMainMenu, deleteMainMenu, getMainMenuId} from '../../../controllers';
import { validarJWT, validarCampos  } from '../../../middleware'



export const mainMenuRouter = Router();

mainMenuRouter.get('/',[validarJWT, validarCampos],getMainMenu );
mainMenuRouter.put('/:id',[validarJWT, validarCampos],putMainMenu);
mainMenuRouter.post('/',[validarJWT, validarCampos],postMainMenu);
mainMenuRouter.delete('/:id',[validarJWT, validarCampos], deleteMainMenu);
mainMenuRouter.get('/:id',[validarJWT, validarCampos], getMainMenuId );
