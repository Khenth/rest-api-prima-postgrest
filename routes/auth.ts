import {Router} from 'express';
import { check } from 'express-validator';
import {login, googleSingIn, renovarToken, navigateUser,} from '../controllers/';
import { validarCampos, validarJWT  } from '../middleware/';

export const AuthRouter = Router();

AuthRouter.post('/login',[
    check('email', 'correo obligatorio').isEmail(),
    check('password', 'password obligatorio').not().isEmpty(),
    validarCampos
], login);

AuthRouter.post('/google',[
    check('id_token', 'Token google necesario').not().isEmpty(),
    validarCampos
], googleSingIn );

AuthRouter.get('/', validarJWT, renovarToken)


AuthRouter.get('/navigation', validarJWT, navigateUser)

// AuthRouter.get('/login/farm', validarJWT,)


