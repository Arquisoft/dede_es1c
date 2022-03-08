"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const UserRouter = (0, express_1.Router)();
//UserRouter.use(loginRequired(0))
UserRouter.post('/profile', controller_1.default.profile);
UserRouter.get('/', controller_1.default.getAll);
exports.default = UserRouter;
//# sourceMappingURL=router.js.map