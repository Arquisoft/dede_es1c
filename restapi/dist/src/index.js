"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config"));
const mongoose_1 = __importDefault(require("mongoose"));
const productRouter_1 = __importDefault(require("./products/productRouter"));
const orderRouter_1 = __importDefault(require("./orders/orderRouter"));
const loginRouter_1 = __importDefault(require("./login/loginRouter"));
const userRouter_1 = __importDefault(require("./users/userRouter"));
const defaultDatabase_1 = __importDefault(require("./util/defaultDatabase"));
const path_1 = __importDefault(require("path"));
if (!process.env.JWT_SECRET) {
    const err = new Error('No JWT_SECRET in env variable, check instructions: https://github.com/amazingandyyy/mern#prepare-your-secret');
    console.error(err);
}
const app = (0, express_1.default)();
// App Setup
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000'] // Fronted URL goes here
}));
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json()); // for parsing application/json
app.use(express_1.default.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/api/user', userRouter_1.default);
app.use('/api/product', productRouter_1.default);
app.use('/api/order', orderRouter_1.default);
app.use('/api', loginRouter_1.default);
// ... other app.use middleware
app.use(express_1.default.static(path_1.default.join(__dirname, "..", "..", "..", "webapp", "build")));
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(config_1.default.mongoose.uri)
    .catch(err => console.error(err))
    .then(() => (0, defaultDatabase_1.default)())
    .then(() => {
    // Server Setup
    const port = process.env.PORT || 8000;
    http_1.default.createServer(app).listen(port, () => {
        console.log(`\x1b[32m`, `Server listening on: ${port}`, `\x1b[0m`);
    });
});
//# sourceMappingURL=index.js.map