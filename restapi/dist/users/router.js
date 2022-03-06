"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const loginRequired_1 = __importDefault(require("../middlewares/loginRequired"));
const UserRouter = (0, express_1.Router)();
UserRouter.use((0, loginRequired_1.default)(0));
UserRouter.post('/profile', controller_1.default.profile);
exports.default = UserRouter;
//# sourceMappingURL=router.js.map