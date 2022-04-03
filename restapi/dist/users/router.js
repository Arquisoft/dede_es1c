"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const loginRequired_1 = __importDefault(require("../middlewares/loginRequired"));
const model_1 = require("./model");
const UserRouter = (0, express_1.Router)();
UserRouter.use((0, loginRequired_1.default)(model_1.ROLES.NORMAL));
UserRouter.get('/profile', controller_1.default.profile);
UserRouter.get('/', controller_1.default.getAll);
UserRouter.post('/product/:name', controller_1.default.addProduct);
UserRouter.delete('/product/:name', controller_1.default.deleteProduct);
exports.default = UserRouter;
//# sourceMappingURL=router.js.map