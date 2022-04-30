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
const orderModel_1 = require("./orderModel");
exports.default = {
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        res.json(yield orderModel_1.OrderModel.find());
    }),
    get: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const order = yield orderModel_1.OrderModel.findOne({ email: req.params.email });
        if (order) {
            res.status(200).json(order);
        }
        else {
            res.status(404).json({ error: "The order does not exist" });
        }
    }),
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const order = yield orderModel_1.OrderModel.create({
            email: req.body.email,
            fecha: req.body.fecha,
            name: req.body.name,
            description: req.body.description,
            photo: req.body.photo,
            price: req.body.price,
            amount: req.body.amount
        });
        res.status(200).json(order);
    }),
};
//# sourceMappingURL=orderController.js.map