"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("./productController"));
const ProductRouter = (0, express_1.Router)();
ProductRouter.get('/', productController_1.default.getAll);
ProductRouter.get('/:name', productController_1.default.get);
ProductRouter.get('/reduce/:name', productController_1.default.reduceStock);
ProductRouter.post('/', productController_1.default.create);
ProductRouter.put('/:id', productController_1.default.update);
ProductRouter.delete('/:id', productController_1.default.delete);
ProductRouter.get('/filter/:category', productController_1.default.filter);
ProductRouter.put('/stock/:id', productController_1.default.updateStock);
ProductRouter.put('/price/:id', productController_1.default.updatePrice);
ProductRouter.put('/description/:id', productController_1.default.updateDescription);
ProductRouter.put('/photo/:id', productController_1.default.updatePhoto);
exports.default = ProductRouter;
//# sourceMappingURL=productRouter.js.map