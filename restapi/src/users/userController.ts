import {ProductModel} from "../products/productModel";
import {Request, Response} from 'express';
import {User, UserModel} from "./userModel";
import {HydratedDocument, Schema} from "mongoose";

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

        res.status(200).json({status: "OK"});
    },

    deleteProduct: async (req: Request, res: Response) => {
        const product = await ProductModel.findOne({name: req.params.name});
        if (!product) {
            res.status(404).json({error: "The product does not exist"});
        }

        const user: HydratedDocument<User> = res.locals.user;
        user.products.filter(id => id != product.id);

        let pos = user.products.indexOf(product.id)
        user.products.splice(pos, 1)
        await user.save();
        res.status(200).json({status: "OK"});
    },
}
