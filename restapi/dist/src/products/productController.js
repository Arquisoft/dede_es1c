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
const productModel_1 = require("./productModel");
exports.default = {
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.json(yield productModel_1.ProductModel.find());
    }),
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield productModel_1.ProductModel.findOne({ name: req.params.name });
        if (product) {
            res.json(product);
        }
        else {
            res.status(404).json({ error: "The product does not exist" });
        }
    }),
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield productModel_1.ProductModel.create({ photo: req.body.url, name: req.body.name, price: req.body.price, stock: req.body.stock, description: req.body.description, categories: req.body.categories });
        res.json(product);
        res.status(200).json({ result: 'OK' });
    }),
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield productModel_1.ProductModel.findById(req.params.id);
        if (req.body.name) {
            product.name = req.body.name;
        }
        yield product.save();
        res.status(200).json({ result: 'OK' });
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (yield productModel_1.ProductModel.findByIdAndDelete(req.params.id)) {
            res.status(200).json({ result: 'OK' });
        }
        else {
            res.status(404).json({ error: "The product does not exist" });
        }
    }),
    filter: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        let productos = yield productModel_1.ProductModel.find();
        let array = [];
        for (let numero of productos) {
            for (let numero2 of numero.categories) {
                if (numero2 == req.params.category) {
                    array.push(numero);
                }
            }
        }
        res.json(array);
    }),
    updateStock: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield productModel_1.ProductModel.findById(req.params.id);
        if (req.body.stock) {
            product.stock = req.body.stock;
        }
        yield product.save();
        res.status(200).json({ result: 'OK' });
    }),
    updatePrice: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield productModel_1.ProductModel.findById(req.params.id);
        if (req.body.price) {
            product.price = req.body.price;
        }
        yield product.save();
        res.status(200).json({ result: 'OK' });
    }),
    updateDescription: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield productModel_1.ProductModel.findById(req.params.id);
        if (req.body.description) {
            product.description = req.body.description;
        }
        yield product.save();
        res.status(200).json({ result: 'OK' });
    }),
    updatePhoto: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield productModel_1.ProductModel.findById(req.params.id);
        if (req.body.photo) {
            product.photo = req.body.photo;
        }
        yield product.save();
        res.status(200).json({ result: 'OK' });
    }),
};
//# sourceMappingURL=productController.js.map