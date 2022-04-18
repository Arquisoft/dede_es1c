"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("./userController"));
const loginRequired_1 = __importDefault(require("../middlewares/loginRequired"));
const userModel_1 = require("./userModel");
const UserRouter = (0, express_1.Router)();
UserRouter.use((0, loginRequired_1.default)(userModel_1.ROLES.NORMAL));
UserRouter.get('/profile', userController_1.default.profile);
UserRouter.get('/', userController_1.default.getAll);
UserRouter.post('/product/:name', userController_1.default.addProduct);
UserRouter.delete('/product/:name', userController_1.default.deleteProduct);
exports.default = UserRouter;
//# sourceMappingURL=userRouter.js.map