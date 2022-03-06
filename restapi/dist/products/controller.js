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
exports.default = {
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.json(yield model_1.ProductModel.find());
    }),
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield model_1.ProductModel.findOne({ name: req.params.name });
        if (product) {
            res.json(product);
        }
        else {
            res.status(404).json({ error: "The product does not exist" });
        }
    }),
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield model_1.ProductModel.create({ name: req.body.name });
        res.json(product);
    }),
    update: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const product = yield model_1.ProductModel.findById(req.params.id);
        if (req.body.name) {
            product.name = req.body.name;
        }
        yield product.save();
        res.status(200).json({ result: 'OK' });
    }),
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (yield model_1.ProductModel.findByIdAndDelete(req.params.id)) {
            res.status(200).json({ result: 'OK' });
        }
        else {
            res.status(404).json({ error: "The product does not exist" });
        }
    })
};
//# sourceMappingURL=controller.js.map