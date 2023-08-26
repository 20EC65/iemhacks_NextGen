import express from "express";
const router = express.Router();

import bloodRoute from './v1/index.js';

router.use('/v1', bloodRoute);

export default router;