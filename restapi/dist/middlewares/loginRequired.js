"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_1 = __importDefault(require("../util/token"));
const model_1 = require("../users/model");
function loginRequired(minLevel = model_1.ROLES.NORMAL) {
    return (req, res, next) => {
        if (!req.header('Authorization')) {
            return res.status(401).send({ message: 'Please make sure your request has an Authorization header.' });
        }
        // Validate jwt
        const try_token = req.header('Authorization').split(' ')[0];
        token_1.default.verifyToken(try_token, (err, payload) => {
            if (err) {
                return res.status(401).send(err);
            }
            model_1.UserModel.findById(payload.sub)
                .exec((err, user) => {
                if (err || !user) {
                    return res.status(404).send(err || {
                        error: 'middleware User not found!!!'
                    });
                }
                delete user.password;
                if (user.role < minLevel) {
                    return res.status(401).send({ error: 'Invalid role' });
                }
                res.locals.user = user;
                next();
            });
        });
    };
}
exports.default = loginRequired;
//# sourceMappingURL=loginRequired.js.map