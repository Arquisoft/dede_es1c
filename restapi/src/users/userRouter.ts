import {Router} from "express";
import UserController from "./userController";
import loginRequired from "../middlewares/loginRequired";
import {ROLES} from "./userModel";
import ProductController from "../products/productController";

const UserRouter = Router()

UserRouter.use(loginRequired(ROLES.NORMAL))

UserRouter.get('/profile', UserController.profile);
UserRouter.get('/:name', UserController.get);
UserRouter.get('/', UserController.getAll);
UserRouter.post('/product/:name', UserController.addProduct);
UserRouter.delete('/product/:name', UserController.deleteProduct);

export default UserRouter;
