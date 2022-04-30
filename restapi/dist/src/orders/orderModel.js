"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Define the model
const Schema = new mongoose_1.default.Schema({
    email: {
        type: String,
    },
    fecha: {
        type: String,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    photo: {
        type: String,
    },
    price: {
        type: String,
    },
    amount: {
        type: Number,
    }
});
// Export the model
exports.OrderModel = mongoose_1.default.model('Order', Schema);
//# sourceMappingURL=orderModel.js.map