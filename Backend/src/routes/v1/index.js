import express from "express";
const router = express.Router();

import {createUser,login, getReports} from '../../controller/userController.js';
import {createReport} from '../../controller/bloodController.js';
import {authenticate} from '../../middleware/authentication.js';

router.post('/reports', authenticate,createReport);
router.post('/signup', createUser);
router.post('/login', login);
router.get('/reports',authenticate,getReports);

export default router;