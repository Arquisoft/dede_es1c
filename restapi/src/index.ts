import express, {Request, Response} from 'express';
import http from 'http';
import morgan from 'morgan';
import cors from 'cors';
import config from './config'
import mongoose from 'mongoose';

import ProductRouter from "./products/router";
import LoginRouter from "./login/router";
import UserRouter from "./users/router";
import create from "./util/defaultDatabase";

if (!process.env.JWT_SECRET) {
    const err = new Error('No JWT_SECRET in env variable, check instructions: https://github.com/amazingandyyy/mern#prepare-your-secret');
    console.error(err);
}

const app = express();

// TODO: load default values
create();

// App Setup
app.use(cors({
    origin: ['http://localhost:3000'] // Fronted URL goes here
}));
app.use(morgan('dev'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded

app.use('/user', UserRouter)
app.use('/product', ProductRouter)
app.use('/', LoginRouter)

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoose.uri).catch(err => console.error(err)).then(() => {
    // Server Setup
    const port = process.env.PORT || 8000
    http.createServer(app).listen(port, () => {
        console.log(`\x1b[32m`, `Server listening on: ${port}`, `\x1b[0m`)
    });
});


