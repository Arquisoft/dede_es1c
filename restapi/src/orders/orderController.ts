import {Request, Response} from 'express';
import {OrderModel} from "./orderModel";

export default {
    getAll: async (req: Request, res: Response) => {
        res.json(await OrderModel.find());
    },

    get: async (req: Request, res: Response) => {
        const order = await OrderModel.findOne({name: req.params.email});
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
            photo: req.body.url,
            price: req.body.price,
            amount: req.body.amount
        });
        res.status(200).json(order);
    },


}