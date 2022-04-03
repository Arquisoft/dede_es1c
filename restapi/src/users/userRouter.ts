import {Router} from "express";
import UserController from "./userController";
import loginRequired from "../middlewares/loginRequired";
import {ROLES} from "./userModel";

const UserRouter = Router()

UserRouter.get('/profile',loginRequired(ROLES.NORMAL), UserController.profile);
UserRouter.get('/:name',loginRequired(ROLES.ADMIN), UserController.get);
UserRouter.get('/',loginRequired(ROLES.ADMIN), UserController.getAll);
UserRouter.post('/product/',loginRequired(ROLES.NORMAL), UserController.addProduct);
UserRouter.delete('/product/',loginRequired(ROLES.NORMAL), UserController.deleteProduct);
UserRouter.delete('/product/all',loginRequired(ROLES.NORMAL), UserController.deleteAllProduct);

export default UserRouter;
