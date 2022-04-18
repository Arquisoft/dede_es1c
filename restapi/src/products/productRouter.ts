import {Router} from "express";
import ProductController from "./productController";
import loginRequired from "../middlewares/loginRequired";
import {ROLES} from "../users/userModel";

const ProductRouter = Router()

ProductRouter.get('/', ProductController.getAll);
ProductRouter.get('/:name', ProductController.get);
ProductRouter.get('/reduce/:name',loginRequired(ROLES.ADMIN), ProductController.reduceStock);
ProductRouter.post('/',loginRequired(ROLES.ADMIN), ProductController.create);
ProductRouter.put('/:id', loginRequired(ROLES.ADMIN), ProductController.update);
ProductRouter.delete('/:id', loginRequired(ROLES.ADMIN), ProductController.delete);
ProductRouter.get('/filter/:category', ProductController.filter);
ProductRouter.put('/stock/:id', loginRequired(ROLES.ADMIN), ProductController.updateStock);
ProductRouter.put('/price/:id', loginRequired(ROLES.ADMIN), ProductController.updatePrice);
ProductRouter.put('/description/:id', loginRequired(ROLES.ADMIN), ProductController.updateDescription);
ProductRouter.put('/photo/:id', loginRequired(ROLES.ADMIN), ProductController.updatePhoto);
export default ProductRouter;
