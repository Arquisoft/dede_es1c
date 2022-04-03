import {Router} from "express";
import Controller from "./loginController";

const LoginRouter = Router()

LoginRouter.post('/login', Controller.login);


export default LoginRouter;
