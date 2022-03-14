import {Router} from "express";
import Controller from "./controller";

const LoginRouter = Router()

LoginRouter.post('/login', Controller.login);


export default LoginRouter;
