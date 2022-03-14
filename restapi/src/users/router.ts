import {Router} from "express";
import Controller from "./controller";
import loginRequired from "../middlewares/loginRequired";
import {ROLES} from "./model";

const UserRouter = Router()

UserRouter.use(loginRequired(ROLES.NORMAL))

UserRouter.get('/profile', Controller.profile);
UserRouter.get('/', Controller.getAll);
UserRouter.post('/product/:name', Controller.addProduct);
UserRouter.delete('/product/:name', Controller.deleteProduct);

export default UserRouter;
