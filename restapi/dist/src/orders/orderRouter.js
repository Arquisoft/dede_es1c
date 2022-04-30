"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = __importDefault(require("./orderController"));
const OrderRouter = (0, express_1.Router)();
OrderRouter.get('/', orderController_1.default.getAll);
OrderRouter.get('/:email', orderController_1.default.get);
OrderRouter.post('/', orderController_1.default.create);
exports.default = OrderRouter;
//# sourceMappingURL=orderRouter.js.map