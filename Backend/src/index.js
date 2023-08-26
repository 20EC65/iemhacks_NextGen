import express from "express";
import bodyParser from "body-parser";
const app = express();

import {PORT} from './config/serverConfig.js';
import connect from './config/DBconfig.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const setUpAndStartServer = async () => {
    app.listen(PORT, () => {
        console.log(`Server Started on ${PORT}`);
    });
    connect();
}

setUpAndStartServer();