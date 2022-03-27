import {Router} from "express";
import ProductController from "./productController";
import loginRequired from "../middlewares/loginRequired";
import {ROLES} from "../users/userModel";

const ProductRouter = Router()

ProductRouter.get('/', ProductController.getAll);
ProductRouter.get('/:name', ProductController.get);
ProductRouter.post('/',loginRequired(ROLES.ADMIN), ProductController.create);
ProductRouter.put('/:id', loginRequired(ROLES.ADMIN), ProductController.update);
ProductRouter.delete('/:id', loginRequired(ROLES.ADMIN), ProductController.delete);

export default ProductRouter;
