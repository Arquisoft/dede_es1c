"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = __importDefault(require("./loginController"));
const LoginRouter = (0, express_1.Router)();
LoginRouter.post('/login', loginController_1.default.login);
exports.default = LoginRouter;
//# sourceMappingURL=loginRouter.js.map