import {Request, Response} from 'express';
import {ProductModel} from "./productModel";

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
        const product = await ProductModel.create({photo: req.body.url, name: req.body.name, price: req.body.price, stock: req.body.stock, description: req.body.description, categories: req.body.categories});
        res.json(product);
        res.status(200).json({result: 'OK'});
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
    },

    filter: async (req: Request, res: Response) => {
        let productos = await ProductModel.find();
        let array =[];
        for (let numero of productos) {
            for (let numero2 of numero.categories) {
                if(numero2 == req.params.category) {
                    array.push(numero);
                }
            }
        }
        res.json( array);

    },

    updateStock: async (req: Request, res: Response) => {
        const product = await ProductModel.findById(req.params.id);
        if (req.body.stock) {
            product.stock = req.body.stock;
        }
        await product.save();
        res.status(200).json({result: 'OK'});
    },

    updatePrice: async (req: Request, res: Response) => {
        const product = await ProductModel.findById(req.params.id);
        if (req.body.price) {
            product.price = req.body.price;
        }
        await product.save();
        res.status(200).json({result: 'OK'});
    },

    updateDescription: async (req: Request, res: Response) => {
        const product = await ProductModel.findById(req.params.id);
        if (req.body.description) {
            product.description = req.body.description;
        }
        await product.save();
        res.status(200).json({result: 'OK'});
    },
}
