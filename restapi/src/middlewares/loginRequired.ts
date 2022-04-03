import token from '../util/token';
import {ROLES, User, UserModel} from '../users/model';
import {NextFunction, Request, Response} from 'express';
import mongoose, {HydratedDocument} from "mongoose";


export default function loginRequired(minLevel: number = ROLES.NORMAL) {
    return async (req: Request, res: Response, next: NextFunction) => {
        if (!req.header('Authorization')) {
            return res.status(401).send({message: 'Please make sure your request has an Authorization header.'});
        }

        // Validate jwt
        const try_token = req.header('Authorization').split(' ')[1];
        const payload = token.verifyToken(try_token);
        const user = await UserModel.findById(payload.sub).select('+password')
        if (!user) {
            return res.status(404).send({
                error: 'middleware User not found!!!'
            });
        }

        if (user.role < minLevel) {
            return res.status(401).send({error: 'Invalid role'});
        }

        res.locals.user = await UserModel.findById(payload.sub);
        next();
    }
}
