"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./model");
const model_2 = require("../products/model");
exports.default = {
    profile: (req, res) => {
        res.json(res.locals.user);
    },
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.json(yield model_1.UserModel.find());
    }),
    addProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield model_2.ProductModel.findOne({ name: req.params.name });
        if (!product) {
            res.status(404).json({ error: "The product does not exist" });
        }
        const user = res.locals.user;
        user.products.push(product.id);
        yield user.save();
        res.send('OK');
    }),
    deleteProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield model_2.ProductModel.findOne({ name: req.params.name });
        if (!product) {
            res.status(404).json({ error: "The product does not exist" });
        }
        const user = res.locals.user;
        user.products.filter(id => id != product.id);
        yield user.save();
    }),
};
//# sourceMappingURL=controller.js.map