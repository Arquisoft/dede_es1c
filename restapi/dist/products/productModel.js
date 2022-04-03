"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
// Define the model
const Schema = new mongoose_1.default.Schema({
    photo: {
        type: String,
    },
    name: {
        type: String,
    },
    price: {
        type: String,
    },
    stock: {
        type: String,
    },
    description: {
        type: String,
    },
    categories: [String]


});
// Export the model
exports.ProductModel = mongoose_1.default.model('Product', Schema);
//# sourceMappingURL=productModel.js.map
