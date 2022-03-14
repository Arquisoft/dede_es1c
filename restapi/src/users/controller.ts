import {Request, Response} from 'express';
import {User, UserModel} from "./model";
import {ProductModel} from "../products/model";
import {HydratedDocument} from "mongoose";

export default {
    profile: (req: Request, res: Response) => {
        res.json(res.locals.user);
    },

    getAll: async (req: Request, res: Response) => {
        res.json(await UserModel.find());
    },

    addProduct: async (req: Request, res: Response) => {
        const product = await ProductModel.findOne({name: req.params.name});
        if (!product) {
            res.status(404).json({error: "The product does not exist"});
        }

        const user: HydratedDocument<User> = res.locals.user;
        user.products.push(product.id);
        await user.save();
        res.send('OK');
    },

    deleteProduct: async (req: Request, res: Response) => {
        const product = await ProductModel.findOne({name: req.params.name});
        if (!product) {
            res.status(404).json({error: "The product does not exist"});
        }

        const user: HydratedDocument<User> = res.locals.user;
        user.products.filter(id => id != product.id);
        await user.save();
    },
}