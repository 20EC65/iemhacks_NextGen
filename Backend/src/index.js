import express from "express";
import bodyParser from "body-parser";
import passport from 'passport';
const app = express();

import {PORT} from './config/serverConfig.js';
import connect from './config/DBconfig.js';
import {passportAuth} from './config/jwtConfig.js';
import v1ApiRoutes from './routes/index.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
passportAuth(passport);

app.use('/api', v1ApiRoutes);

const setUpAndStartServer = async () => {
    app.listen(PORT, () => {
        console.log(`Server Started on ${PORT}`);
    });
    connect();
}

setUpAndStartServer();