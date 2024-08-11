import express from 'express';
import { deleteUser, getUsers, signout, test, updateUser } from '../controller/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js'

const routes = express.Router();

routes.get('/test', test)
routes.put('/update/:userId', verifyToken, updateUser);
routes.delete('/delete/:userId', verifyToken, deleteUser)
routes.post('/signout', signout)
routes.get('/getusers', verifyToken, getUsers)

export default routes