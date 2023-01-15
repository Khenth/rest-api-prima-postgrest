import {Router} from 'express';
import { getUsers, getUserbyId, postUser, putUsers, deleteUsers } from '../../controllers/users/users';



export const UserRouter = Router();

UserRouter.get('/',     getUsers);
UserRouter.get('/:id',  getUserbyId);
UserRouter.post('/',    postUser);
UserRouter.put('/:id',  putUsers);
UserRouter.delete('/:id',  deleteUsers);

