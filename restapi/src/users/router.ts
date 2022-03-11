import {Router} from "express";
import Controller from "./controller";
import loginRequired from "../middlewares/loginRequired";
import {ROLES} from "./model";
import ProductRouter from "../products/router";

const UserRouter = Router()

//UserRouter.use(loginRequired(0))

UserRouter.post('/profile', Controller.profile);
UserRouter.get('/', Controller.getAll);
ProductRouter.post('/', Controller.addProduct);
ProductRouter.delete('/:id', Controller.deleteProduct);

export default UserRouter;
