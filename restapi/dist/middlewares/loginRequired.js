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
const token_1 = __importDefault(require("../util/token"));
const userModel_1 = require("../users/userModel");
function loginRequired(minLevel = userModel_1.ROLES.NORMAL) {
    return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        if (!req.header('Authorization')) {
            return res.status(401).send({ message: 'Please make sure your request has an Authorization header.' });
        }
        // Validate jwt
        const try_token = req.header('Authorization').split(' ')[1];
        const payload = token_1.default.verifyToken(try_token);
        const user = yield userModel_1.UserModel.findById(payload.sub).select('+password');
        if (!user) {
            return res.status(404).send({
                error: 'middleware User not found!!!'
            });
        }
        if (user.role < minLevel) {
            return res.status(401).send({ error: 'Invalid role' });
        }
        res.locals.user = yield userModel_1.UserModel.findById(payload.sub);
        next();
    });
}
exports.default = loginRequired;
//# sourceMappingURL=loginRequired.js.map