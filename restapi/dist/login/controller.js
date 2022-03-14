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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../users/model");
const token_1 = __importDefault(require("../util/token"));
exports.default = {
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield model_1.UserModel.findOne({ 'email': req.body.email });
        if (user) {
            res.send({
                'token': token_1.default.generateToken(user)
            });
        }
        else {
            res.status(402);
        }
    }),
};
//# sourceMappingURL=controller.js.map