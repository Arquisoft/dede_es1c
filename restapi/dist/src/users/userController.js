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
const productModel_1 = require("../products/productModel");
const userModel_1 = require("./userModel");
exports.default = {
    profile: (req, res) => {
        res.status(200).json(res.locals.user);
    },
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield userModel_1.UserModel.findOne({ email: req.params.name });
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(404).json({ error: "The user does not exist" });
        }
    }),
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.status(200).json(yield userModel_1.UserModel.find());
    }),
    addProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield productModel_1.ProductModel.findOne({ name: req.body.name });
        if (!product) {
            res.status(404).json({ error: "The product does not exist" });
        }
        const user = res.locals.user;
        user.products.push(product.id);
        yield user.save();
        res.status(200).json({ status: "OK" });
    }),
    deleteProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield productModel_1.ProductModel.findOne({ name: req.body.name });
        if (!product) {
            res.status(404).json({ error: "The product does not exist" });
        }
        const user = res.locals.user;
        user.products.filter(id => id != product.id);
        let pos = user.products.indexOf(product.id);
        user.products.splice(pos, 1);
        yield user.save();
        res.status(200).json({ status: "OK" });
    }),
    deleteAllProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = res.locals.user;
        for (let numero2 of user.products) {
            user.products.pop();
        }
        user.products.pop();
        yield user.save();
        res.status(200).json({ status: "OK" });
    }),
};
//# sourceMappingURL=userController.js.map