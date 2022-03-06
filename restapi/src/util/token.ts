import jwt from 'jwt-simple';
import config from '../config';
import mongoose from "mongoose";
import {User} from "../users/model";

export default {
    generateToken(user: User) {
        const timeStamp = new Date().getTime();
        const payload = {
            sub: user.id,
            iat: timeStamp
        }
        return jwt.encode(payload, config.jwt_secret);
    },
    verifyToken(token: string, cb: mongoose.Callback) {
        const decode = jwt.decode(token, config.jwt_secret)
        if (!decode) return cb(new Error('Token is not verified.'), null);
        cb(null, decode);
    }
}