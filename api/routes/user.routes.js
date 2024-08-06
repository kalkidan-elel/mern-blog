import express from 'express';
import { test } from '../controller/user.controller.js';

const routes = express.Router();

routes.get('/test', test)

export default routes