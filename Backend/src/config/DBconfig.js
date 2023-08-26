import mongoose from 'mongoose';
import {URL} from './serverConfig.js';
export default connect = async () => {
    await mongoose.connect(URL);
    console.log("Connected to DB Successfully...");
}