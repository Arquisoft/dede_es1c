import {ProductModel} from "../products/productModel";
import {Request, Response} from 'express';
import {User, UserModel} from "./userModel";
import {HydratedDocument, Schema} from "mongoose";


export default {
    profile: (req: Request, res: Response) => {
        res.status(200).json(res.locals.user);
    },

    get: async (req: Request, res: Response) => {
        const user = await UserModel.findOne({email: req.params.name});
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({error: "The user does not exist"});
        }
    },

    getAll: async (req: Request, res: Response) => {
        res.status(200).json(await UserModel.find());

    },

    addProduct: async (req: Request, res: Response) => {
        const product = await ProductModel.findOne({name: req.body.name});
        if (!product) {
            res.status(404).json({error: "The product does not exist"});
        }

        const user: HydratedDocument<User> = res.locals.user;
        user.products.push(product.id);
        await user.save();

        res.status(200).json({status: "OK"});
    },

    deleteProduct: async (req: Request, res: Response) => {
        const product = await ProductModel.findOne({name: req.body.name});
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

    deleteAllProduct: async (req: Request, res: Response) => {

        const user: HydratedDocument<User> = res.locals.user;

        for (let numero2 of user.products) {

            user.products.pop();

        }
        user.products.pop();
        await user.save();
        res.status(200).json({status: "OK"});
    },
}
