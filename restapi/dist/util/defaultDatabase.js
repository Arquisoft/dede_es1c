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
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../products/model");
const model_2 = require("../users/model");
function create() {
    return __awaiter(this, void 0, void 0, function* () {
        yield model_1.ProductModel.deleteMany({});
        yield model_1.ProductModel.create({ photo: ' https://www.google.com/search?q=fifa+20&client=firefox-b-d&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjetOqThrL2AhVOh_0HHeKKBPkQ_AUoAnoECCsQBA&biw=1159&bih=1280&dpr=1#imgrc=j9hKBXDlcRjFIM', name: 'Fifa 20', price: '20', stock: '2' });
        yield model_1.ProductModel.create({ photo: ' https://www.google.com/search?q=fifa+19&tbm=isch&ved=2ahUKEwjvqc2UhrL2AhWNDOwKHdrlCbgQ2-cCegQIABAA&oq=fifa+19&gs_lcp=CgNpbWcQAzIICAAQgAQQsQMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAELEDEEM6BAgAEEM6CwgAEIAEELEDEIMBUP8HWL4JYMELaABwAHgAgAFriAGCApIBAzIuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=a_QkYq_INo2ZsAfay6fACw&bih=1280&biw=1159&client=firefox-b-d#imgrc=-EciD4C09JWvaM', name: 'Fifa 19', price: '30', stock: '67' });
        yield model_1.ProductModel.create({ photo: ' https://www.google.com/search?q=elden+ring&tbm=isch&ved=2ahUKEwiY07WchrL2AhUh2OAKHUa8DpoQ2-cCegQIABAA&oq=elden+ring&gs_lcp=CgNpbWcQAzILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgQIABADMgQIABADMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyBAgAEAMyCwgAEIAEELEDEIMBMgQIABADMgQIABADOgcIABCxAxBDOgQIABBDOgUIABCABDoICAAQgAQQsQM6CAgAELEDEIMBOgoIABCxAxCDARBDUPkFWNYMYI0OaABwAHgAgAFgiAG9B5IBAjExmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=fPQkYpilEaGwgwfG-LrQCQ&bih=1280&biw=1159&client=firefox-b-d#imgrc=cjc7GoLP04wZbM', name: 'Elden ring', price: '80', stock: '4' });
        yield model_1.ProductModel.create({ photo: ' https://www.google.com/search?q=world+of+warcraft&tbm=isch&ved=2ahUKEwi868yihrL2AhXO8LsIHQnACngQ2-cCegQIABAA&oq=world+of&gs_lcp=CgNpbWcQARgAMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoKCAAQsQMQgwEQQzoLCAAQgAQQsQMQgwE6BAgAEAM6CAgAELEDEIMBOgQIABBDOgcIABCxAxBDUL0FWMINYOcVaABwAHgAgAFriAGNBpIBAzguMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=ifQkYvyCD87h7_UPiYCrwAc&bih=1280&biw=1159&client=firefox-b-d#imgrc=hTn3thQQPuNZfM', name: 'World of Warcraft', price: '2900', stock: '2' });
        yield model_1.ProductModel.create({ photo: ' https://www.google.com/search?q=league+of+leguends+logo&tbm=isch&ved=2ahUKEwiz75e5hrL2AhWO_bsIHT9QBmYQ2-cCegQIABAA&oq=league+of+leguends+logo&gs_lcp=CgNpbWcQAzIFCAAQgAQyBggAEAoQGDoECAAQQzoECAAQHlCBLlizNGCzNWgAcAB4AIABZ4gBigSSAQM1LjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=uPQkYrOzJY777_UPv6CZsAY&bih=1280&biw=1159&client=firefox-b-d#imgrc=6XTc5saPQUmzVM', name: 'League of Leguends', price: '50', stock: '2' });
        yield model_2.UserModel.deleteMany({});
        yield model_2.UserModel.create({ personal_identification: '1D', name: 'Alvaro', surname: 'Lopez', password: '123', email: 'a@gmail.com', role: 0, phone: '111', country: 'España', province: 'Asturias', city: 'Mieres', zip_code: 33600, street: 'C/Hola', number: 2, floor: 1 });
        yield model_2.UserModel.create({ personal_identification: '1D', name: 'Hector', surname: 'Lopez', password: '123', email: 'b@gmail.com', role: 10, phone: '111', country: 'España', province: 'Asturias', city: 'Mieres', zip_code: 33600, street: 'C/Hola', number: 2, floor: 1 });
    });
}
exports.default = create;
//# sourceMappingURL=defaultDatabase.js.map