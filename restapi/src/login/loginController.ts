import {Request, Response} from 'express';
import {UserModel} from "../users/userModel";
import jwt from "../util/token";

export default {
    login: async (req: Request, res: Response) => {
        const user = await UserModel.findOne({'email': req.body.email})
        if (user) {
            res.json({
                'token': jwt.generateToken(user)
            });
        } else {
            res.status(402).json({error: 'Invalid credentials'});
        }
    },
}
