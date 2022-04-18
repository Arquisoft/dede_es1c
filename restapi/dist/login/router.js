"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const LoginRouter = (0, express_1.Router)();
LoginRouter.post('/login', controller_1.default.login);
exports.default = LoginRouter;
//# sourceMappingURL=router.js.map