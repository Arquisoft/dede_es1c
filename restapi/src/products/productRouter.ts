import {Router} from "express";
import ProductController from "./productController";
import loginRequired from "../middlewares/loginRequired";
import {ROLES} from "../users/userModel";

const ProductRouter = Router()

ProductRouter.get('/', ProductController.getAll);
ProductRouter.get('/:name', ProductController.get);
ProductRouter.get('/reduce/:name', ProductController.reduceStock);
ProductRouter.post('/', ProductController.create);
ProductRouter.put('/:id', ProductController.update);
ProductRouter.delete('/:id', ProductController.delete);
ProductRouter.get('/filter/:category', ProductController.filter);
ProductRouter.put('/stock/:id', ProductController.updateStock);
ProductRouter.put('/price/:id', ProductController.updatePrice);
ProductRouter.put('/description/:id', ProductController.updateDescription);
ProductRouter.put('/photo/:id', ProductController.updatePhoto);
export default ProductRouter;
