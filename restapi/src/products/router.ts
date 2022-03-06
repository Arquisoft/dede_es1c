import {Router} from "express";
import Controller from "./controller";
import loginRequired from "../middlewares/loginRequired";
import {ROLES} from "../users/model";

const ProductRouter = Router()

ProductRouter.get('/', Controller.getAll);
ProductRouter.get('/:name', Controller.get);
ProductRouter.post('/', loginRequired(ROLES.ADMIN), Controller.create);
ProductRouter.put('/:id', loginRequired(ROLES.ADMIN), Controller.update);
ProductRouter.delete('/:id', loginRequired(ROLES.ADMIN), Controller.delete);

export default ProductRouter;
