import token from '../util/token';
import {ROLES, User, UserModel} from '../users/model';
import {NextFunction, Request, Response} from 'express';
import mongoose from "mongoose";


export default function loginRequired(minLevel: number = ROLES.NORMAL) {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!req.header('Authorization')) {
            return res.status(401).send({message: 'Please make sure your request has an Authorization header.'});
        }

        // Validate jwt
        const try_token = req.header('Authorization').split(' ')[0];
        token.verifyToken(try_token, (err, payload) => {
            if (err) {
                return res.status(401).send(err);
            }
            UserModel.findById(payload.sub)
                .exec((err: mongoose.CallbackError, user: User) => {
                    if (err || !user) {
                        return res.status(404).send(err || {
                            error: 'middleware User not found!!!'
                        });
                    }
                    delete user.password;

                    if (user.role < minLevel) {
                        return res.status(401).send({error: 'Invalid role'});
                    }
                    res.locals.user = user;
                    next();
                });
        });
    }
}
