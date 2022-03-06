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
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./users/router"));
const config_1 = __importDefault(require("./config"));
const mongoose_1 = __importDefault(require("mongoose"));
const model_1 = require("./users/model");
const router_2 = __importDefault(require("./products/router"));
const token_1 = __importDefault(require("./util/token"));
const defaultDatabase_1 = __importDefault(require("./util/defaultDatabase"));
if (!process.env.JWT_SECRET) {
    const err = new Error('No JWT_SECRET in env variable, check instructions: https://github.com/amazingandyyy/mern#prepare-your-secret');
    console.error(err);
}
const app = (0, express_1.default)();
mongoose_1.default.connect(config_1.default.mongoose.uri).catch(err => console.error(err));
mongoose_1.default.Promise = global.Promise;
// TODO: load default values
(0, defaultDatabase_1.default)();
// App Setup
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000'] // Fronted URL goes here
}));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json()); // for parsing application/json
app.use(express_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.get('/ping', (req, res) => res.send('pong'));
app.get('/', (req, res) => {
    res.send("Hello world");
});
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield model_1.UserModel.findOne({ 'email': req.body.email });
    if (user) {
        res.send({
            'token': token_1.default.generateToken(user)
        });
    }
    else {
        res.status(402);
    }
}));
app.get('/signup', (req, res) => {
    res.send("Hello world");
});
app.use('/user', router_1.default);
app.use('/product', router_2.default);
// Server Setup
const port = process.env.PORT || 8000;
http_1.default.createServer(app).listen(port, () => {
    console.log(`\x1b[32m`, `Server listening on: ${port}`, `\x1b[0m`);
});
//# sourceMappingURL=index.js.map