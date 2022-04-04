"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
if (process.env.NODE_ENV != 'production') {
    dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '.env') });
}
const config = {
    jwt_secret: process.env.JWT_SECRET || 'unsafe_jwt_secret',
    mongoose: {
        uri: 'mongodb+srv://uo278485:1234@cluster0.35zkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    },
};
exports.default = config;
//# sourceMappingURL=config.js.map