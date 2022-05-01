import {Request, Response} from 'express';
import {OrderModel} from "./orderModel";
import {ProductModel} from "../products/productModel";

export default {
    getAll: async (req: Request, res: Response) => {
        res.json(await OrderModel.find());
    },

    get: async (req: Request, res: Response) => {
        const order = await OrderModel.find({email: req.params.email});
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({error: "The order does not exist"});
        }
    },

    create: async (req: Request, res: Response) => {
        const order = await OrderModel.create({
            email: req.body.email,
            fecha: req.body.fecha,
            name: req.body.name,
            description: req.body.description,
            photo: req.body.photo,
            price: req.body.price,
            amount: req.body.amount
        });
        res.status(200).json(order);
    },

    delete: async (req: Request, res: Response) => {
        if (await OrderModel.findByIdAndDelete(req.params.id)) {
            res.status(200).json({result: 'OK'});
        } else {
            res.status(404).json({error: "The order does not exist"});
        }
    },
}