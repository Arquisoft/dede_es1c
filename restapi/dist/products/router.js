"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = __importDefault(require("./controller"));
const loginRequired_1 = __importDefault(require("../middlewares/loginRequired"));
const model_1 = require("../users/model");
const ProductRouter = (0, express_1.Router)();
ProductRouter.get('/', controller_1.default.getAll);
ProductRouter.get('/:name', controller_1.default.get);
ProductRouter.post('/', controller_1.default.create);
ProductRouter.put('/:id', (0, loginRequired_1.default)(model_1.ROLES.ADMIN), controller_1.default.update);
ProductRouter.delete('/:id', (0, loginRequired_1.default)(model_1.ROLES.ADMIN), controller_1.default.delete);
exports.default = ProductRouter;
//# sourceMappingURL=router.js.map