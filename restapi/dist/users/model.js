"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.ROLES = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
var ROLES;
(function (ROLES) {
    ROLES[ROLES["NORMAL"] = 0] = "NORMAL";
    ROLES[ROLES["ADMIN"] = 10] = "ADMIN";
})(ROLES = exports.ROLES || (exports.ROLES = {}));
// Define the model
const Schema = new mongoose_1.default.Schema({
    personal_identification: {
        type: String,
    },
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    password: String,
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    role: {
        type: Number,
        default: ROLES.NORMAL
    },
    phone: {
        type: Number
    },
    country: String,
    province: String,
    city: String,
    zip_code: Number,
    street: String,
    number: Number,
    floor: Number,
    floor_number: String
});
Schema.pre('save', function (next) {
    // get access to user model, then we can use user.email, user.password
    const user = this;
    bcryptjs_1.default.genSalt(10, function (err, salt) {
        if (err) {
            return next(err);
        }
        bcryptjs_1.default.hash(user.password, salt, function (err, hash) {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});
// Make use of methods for comparedPassword
Schema.methods.comparedPassword = function (candidatePassword, cb) {
    bcryptjs_1.default.compare(candidatePassword, this.password, function (err, good) {
        if (err) {
            return cb(err, null);
        }
        cb(null, good);
    });
};
// Export the model
exports.UserModel = mongoose_1.default.model('User', Schema);
//# sourceMappingURL=model.js.map