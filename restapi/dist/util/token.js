"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const config_1 = __importDefault(require("../config"));
exports.default = {
    generateToken(user) {
        const timeStamp = new Date().getTime();
        const payload = {
            sub: user.id,
            iat: timeStamp
        };
        return jwt_simple_1.default.encode(payload, config_1.default.jwt_secret);
    },
    verifyToken(token) {
        const decode = jwt_simple_1.default.decode(token, config_1.default.jwt_secret);
        if (!decode) {
            throw new Error('Token is not verified.');
        }
        return decode;
    }
};
//# sourceMappingURL=token.js.map