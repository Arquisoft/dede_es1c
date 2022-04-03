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
const productModel_1 = require("../products/productModel");
const userModel_1 = require("../users/userModel");
function create() {
    return __awaiter(this, void 0, void 0, function* () {
        let juego1 = ["deportes"];
        let juego2 = ["deportes"];
        let juego3 = ["acción", "aventuras", "estrategia"];
        let juego4 = ["acción", "aventuras", "estrategia"];
        let juego5 = ["estrategia", "acción"];
        let juego6 = ["estrategia", "acción"];
        let juego8 = ["estrategia", "acción"];
        let juego9 = ["estrategia", "acción"];
        yield productModel_1.ProductModel.deleteMany({});
        yield productModel_1.ProductModel.create({ photo: ' https://drive.google.com/uc?export=view&id=15YbSwC0XyAWKpxQANq3YbIZBUm5YY--5 ', name: 'Fifa 20', price: '20', stock: '2', description: 'publicados anualmente por Electronic Arts bajo el sello de EA Sports creado en Japón Cuando la saga comenzó a finales de 1993', categories: juego1 });
        yield productModel_1.ProductModel.create({ photo: ' https://drive.google.com/uc?export=view&id=1vLpKO1Vd9HgJ0j1NQsrvyidlxMHZPRA- ', name: 'Fifa 19', price: '30', stock: '67', description: 'publicados anualmente por Electronic Arts bajo el sello de EA Sports creado en Japón Cuando la saga comenzó a finales de 1993', categories: juego2 });
        yield productModel_1.ProductModel.create({ photo: ' https://drive.google.com/uc?export=view&id=1uPsQkxuSttWE4-_uHvOhkanlZLF-RLMb ', name: 'Elden ring', price: '80', stock: '4', description: ' rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment', categories: juego3 });
        yield productModel_1.ProductModel.create({ photo: ' https://drive.google.com/uc?export=view&id=10wG_nWYtlVgLnQFEIybwHD8l3ycTcqIk ', name: 'World of Warcraft', price: '29', stock: '2', description: ' rol multijugador masivo en línea desarrollado por Blizzard Entertainment.', categories: juego4 });
        yield productModel_1.ProductModel.create({ photo: ' https://drive.google.com/uc?export=view&id=1bJdo5tZKUHbIUTM4SLJlGdRQWsfy6s7R ', name: 'League of Leguends', price: '50', stock: '2', description: 'Videojuego del género multijugador de arena de batalla en línea y deporte electrónico el cual fue desarrollado por Riot Games', categories: juego5 });
        yield productModel_1.ProductModel.create({ photo: ' https://drive.google.com/uc?export=view&id=1IZA82snexAD6qpokj5jzYiML4WprAHys ', name: 'God of War', price: '30', stock: '8', description: ' serie de videojuegos hack and slash creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment', categories: juego6 });
        yield productModel_1.ProductModel.create({ photo: ' https://drive.google.com/uc?export=view&id=1X68RR3eLIPUna7H9H2OEmjstE_pdPwmA ', name: 'Battlefield 2042', price: '36', stock: '10', description: ' videojuego de disparos y acción bélica en primera persona', categories: juego8 });
        yield productModel_1.ProductModel.create({ photo: ' https://drive.google.com/uc?export=view&id=17T2Ikaoq47h4Qj-SsfRQoqlnBjRJOQFJ ', name: 'Dying Light', price: '6', stock: '3', description: ' serie de videojuegos de acción', categories: juego9 });
        yield userModel_1.UserModel.deleteMany({});
        yield userModel_1.UserModel.create({ password: '123', email: 'a@gmail.com', role: userModel_1.ROLES.NORMAL });
        yield userModel_1.UserModel.create({ password: '123', email: 'b@gmail.com', role: userModel_1.ROLES.ADMIN });
    });
}
exports.default = create;
//# sourceMappingURL=defaultDatabase.js.map