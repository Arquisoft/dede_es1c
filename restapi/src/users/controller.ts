import {Request, Response} from 'express';
import {UserModel} from "./model";
import {ProductModel} from "../products/model";

export default {
    profile: (req: Request, res: Response) => {
        // TODO
        res.send("Profile")
    },

    getAll: async (req: Request, res: Response) => {
        res.json(await UserModel.find());
    },

    addProduct: async (req: Request, res: Response) => {
        const product = await ProductModel.findOne({name: req.params.name});

    },

    deleteProduct: async (req: Request, res: Response) => {
        if (await ProductModel.findByIdAndDelete(req.params.id)) {
            res.status(200).json({result: 'OK'});
        } else {
            res.status(404).json({error: "The product does not exist"});
        }
    },

}
