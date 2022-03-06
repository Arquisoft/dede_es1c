import {Request, Response} from 'express';
import {ProductModel} from "./model";

export default {
    getAll: async (req: Request, res: Response) => {
        res.json(await ProductModel.find());
    },

    get: async (req: Request, res: Response) => {
        const product = await ProductModel.findOne({name: req.params.name});
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({error: "The product does not exist"});
        }
    },

    create: async (req: Request, res: Response) => {
        const product = await ProductModel.create({photo: req.body.url, name: req.body.name, price: req.body.price, stock: req.body.stock} );
        res.json(product);
    },

    update: async (req: Request, res: Response) => {
        const product = await ProductModel.findById(req.params.id);
        if (req.body.name) {
            product.name = req.body.name;
        }
        await product.save();
        res.status(200).json({result: 'OK'});
    },

    delete: async (req: Request, res: Response) => {
        if (await ProductModel.findByIdAndDelete(req.params.id)) {
            res.status(200).json({result: 'OK'});
        } else {
            res.status(404).json({error: "The product does not exist"});
        }
    }
}
