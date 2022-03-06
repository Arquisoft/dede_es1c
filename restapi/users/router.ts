import {Router} from "express";
import Controller from "./controller";
import loginRequired from "../middlewares/loginRequired";

const UserRouter = Router()

UserRouter.use(loginRequired(0))

UserRouter.post('/profile', Controller.profile);

export default UserRouter;