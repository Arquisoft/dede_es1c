import {Request, Response} from 'express';
import {UserModel} from "./model";

export default {
    profile: (req: Request, res: Response) => {
        // TODO
        res.send("Profile")
    },

    getAll: async (req: Request, res: Response) => {
        res.json(await UserModel.find());
    }
}
