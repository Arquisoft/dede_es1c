import {Router} from "express";
import UserController from "./userController";
import loginRequired from "../middlewares/loginRequired";
import {ROLES} from "./userModel";

const UserRouter = Router()

UserRouter.use(loginRequired(ROLES.NORMAL))

UserRouter.get('/profile', UserController.profile);
UserRouter.get('/', UserController.getAll);
UserRouter.get('/products', UserController.getAllSelectProducts);
UserRouter.post('/product/:name', UserController.addProduct);
UserRouter.delete('/product/:name', UserController.deleteProduct);

export default UserRouter;
