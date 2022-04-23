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
const orderModel_1 = require("../orders/orderModel");
function create() {
    return __awaiter(this, void 0, void 0, function* () {
        let juego1 = ["deportes"];
        let juego2 = ["deportes"];
        let juego3 = ["acción", "aventuras", "estrategia"];
        let juego4 = ["acción", "estrategia"];
        let juego5 = ["estrategia", "acción"];
        let juego6 = ["estrategia", "acción"];
        let juego8 = ["estrategia", "acción"];
        let juego9 = ["estrategia", "acción"];
        yield productModel_1.ProductModel.deleteMany({});
        yield productModel_1.ProductModel.create({
            photo: 'https://drive.google.com/uc?export=view&id=17-q7wnweGzvXgl2NDx77sAnN2bvxpCDv',
            name: 'Fifa 20',
            price: '20',
            stock: '2',
            description: 'publicados anualmente por Electronic Arts bajo el sello de EA Sports creado en Japón Cuando la saga comenzó a finales de 1993',
            categories: juego1
        });
        yield productModel_1.ProductModel.create({
            photo: 'https://drive.google.com/uc?export=view&id=1TgfqeGI_DClH9GRSrLS29cvAuvgpBxJ3',
            name: 'Fifa 19',
            price: '30',
            stock: '67',
            description: 'publicados anualmente por Electronic Arts bajo el sello de EA Sports creado en Japón Cuando la saga comenzó a finales de 1993',
            categories: juego2
        });
        yield productModel_1.ProductModel.create({
            photo: 'https://drive.google.com/uc?export=view&id=14M-3I8AHvy2e5kju1uhSAPR_BuBvPGHs',
            name: 'Elden ring',
            price: '80',
            stock: '4',
            description: ' rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment',
            categories: juego3
        });
        yield productModel_1.ProductModel.create({
            photo: 'https://drive.google.com/uc?export=view&id=1ZJwE7fE-NoqkvCwrm0XgWdsP5P6t8xWw',
            name: 'World of Warcraft',
            price: '29',
            stock: '2',
            description: ' rol multijugador masivo en línea desarrollado por Blizzard Entertainment.',
            categories: juego4
        });
        yield productModel_1.ProductModel.create({
            photo: 'https://drive.google.com/uc?export=view&id=16i_-Op9_aurvgDR49AOBzhp85J-GBnjE',
            name: 'League of Leguends',
            price: '50',
            stock: '2',
            description: 'Videojuego del género multijugador de arena de batalla en línea y deporte electrónico el cual fue desarrollado por Riot Games',
            categories: juego5
        });
        yield productModel_1.ProductModel.create({
            photo: 'https://drive.google.com/uc?export=view&id=1dJ56UG_vcqbsKz8WFQ18WAsW7oEfCGz6',
            name: 'God of War',
            price: '30',
            stock: '8',
            description: ' serie de videojuegos hack and slash creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment',
            categories: juego6
        });
        yield productModel_1.ProductModel.create({
            photo: 'https://drive.google.com/uc?export=view&id=1RwYHUq0MTPV7RQCCkX1LKqpbyptVOrad',
            name: 'Battlefield 2042',
            price: '36',
            stock: '10',
            description: ' videojuego de disparos y acción bélica en primera persona',
            categories: juego8
        });
        yield productModel_1.ProductModel.create({
            photo: 'https://drive.google.com/uc?export=view&id=1aUIkNF0ZMJV0CAynt-TE_bFw-ySFcMXx',
            name: 'Dying Light',
            price: '6',
            stock: '3',
            description: ' serie de videojuegos de acción',
            categories: juego9
        });
        yield userModel_1.UserModel.deleteMany({});
        yield userModel_1.UserModel.create({ password: '123', email: 'a@gmail.com', role: userModel_1.ROLES.NORMAL });
        yield userModel_1.UserModel.create({ password: '123', email: 'b@gmail.com', role: userModel_1.ROLES.ADMIN });
        yield orderModel_1.OrderModel.deleteMany({});
        yield orderModel_1.OrderModel.create({
            email: 'a@gmail.com', fecha: "19/04/2022", name: "Dying Light", description: "serie de videojuegos de acción",
            photo: 'https://drive.google.com/uc?export=view&id=1aUIkNF0ZMJV0CAynt-TE_bFw-ySFcMXx', price: '6',
            amount: 3
        });
        yield orderModel_1.OrderModel.create({
            email: 'b@gmail.com', fecha: "19/04/2022", name: "Dying Light", description: "serie de videojuegos de acción",
            photo: 'https://drive.google.com/uc?export=view&id=1aUIkNF0ZMJV0CAynt-TE_bFw-ySFcMXx', price: '6',
            amount: 3
        });
    });
}
exports.default = create;
//# sourceMappingURL=defaultDatabase.js.map