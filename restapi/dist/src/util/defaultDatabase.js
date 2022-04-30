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
        let juego10 = ["estrategia", "aventuras"];
        let juego11 = ["accion", "aventuras"];
        let juego12 = ["deportes"];
        let juego13 = ["acción", "aventuras"];
        let juego14 = ["deportes"];
        let juego15 = ["estrategia", "aventuras"];
        let juego16 = ["estrategia", "aventuras", "accion"];
        let juego17 = ["disparos"];
        let juego18 = ["simulacion"];
        let juego19 = ["simulacion"];
        let juego20 = ["deportes"];
        let juego21 = ["deportes"];
        let juego22 = ["acción", "aventuras"];
        let juego23 = ["acción", "aventuras"];
        let juego24 = ["acción", "aventuras"];
        yield productModel_1.ProductModel.deleteMany({});
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=15YbSwC0XyAWKpxQANq3YbIZBUm5YY--5', name: 'Fifa 20', price: '25', stock: '2', description: 'Publicados anualmente por Electronic Arts bajo el sello de EA Sports creado en Japón Cuando la saga comenzó a finales de 1993.', categories: juego1 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1vLpKO1Vd9HgJ0j1NQsrvyidlxMHZPRA-', name: 'Fifa 19', price: '30', stock: '67', description: 'Publicados anualmente por Electronic Arts bajo el sello de EA Sports creado en Japón Cuando la saga comenzó a finales de 1993.', categories: juego2 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1uPsQkxuSttWE4-_uHvOhkanlZLF-RLMb', name: 'Elden ring', price: '80', stock: '4', description: 'Rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment.', categories: juego3 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=10wG_nWYtlVgLnQFEIybwHD8l3ycTcqIk', name: 'World of Warcraft', price: '29', stock: '2', description: 'Rol multijugador masivo en línea desarrollado por Blizzard Entertainment.', categories: juego4 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1bJdo5tZKUHbIUTM4SLJlGdRQWsfy6s7R', name: 'League of Leguends', price: '50', stock: '2', description: 'Videojuego del género multijugador de arena de batalla en línea y deporte electrónico el cual fue desarrollado por Riot Games.', categories: juego5 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1IZA82snexAD6qpokj5jzYiML4WprAHys', name: 'God of War', price: '30', stock: '8', description: 'Serie de videojuegos hack and slash creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment.', categories: juego6 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1X68RR3eLIPUna7H9H2OEmjstE_pdPwmA', name: 'Battlefield 2042', price: '36', stock: '10', description: ' Videojuego de disparos y acción bélica en primera persona.', categories: juego8 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=17T2Ikaoq47h4Qj-SsfRQoqlnBjRJOQFJ', name: 'Dying Light', price: '26', stock: '3', description: 'Serie de videojuegos de acción.', categories: juego9 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=13HyCiWP3UfPYtulmBz2GOYVLOY3tLmbG', name: 'Age of Empires', price: '60', stock: '99', description: 'Es un juego de estrategia en tiempo real desarrollado por Relic Entertainment.', categories: juego10 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1_8q98NtevJs9KebqNrpD0-aBrph3f89U', name: 'Assassins Creed: Valhalla', price: '30', stock: '99', description: 'Es un videojuego desarrollado por Ubisoft Montreal y publicado por Ubisoft.', categories: juego11 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1ooWq8FWS3Qy3nHSZ28K9Y2Rzd-hfrhwu', name: 'NBA 2K22', price: '25', stock: '99', description: 'NBA 2K22 es un videojuego de simulación de baloncesto de 2021 desarrollado por Visual Concepts.', categories: juego12 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1ehFIESOG396RdbgNv2zMzJoyqycSlULr', name: 'Batman: Arkham Origins', price: '80', stock: '99', description: 'Es un videojuego que fue desarrollado por Warner Bros. Games Montreal y lanzado por Warner Bros.', categories: juego13 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1Hy1_41wnW-qfcc2GPLWKxYAws4pd_ugF', name: 'WWE 2K22', price: '50', stock: '99', description: 'WWE 2K22 es un videojuego de lucha libre profesional que fue desarrollado por Visual Concepts y publicado por 2K Sports.', categories: juego14 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1gGNLHFkDatDTMfy5Tj2h8Y-fWfLuIu-4', name: 'Civilization VI', price: '15', stock: '99', description: 'Es un videojuego de estrategia por turnos perteneciente a la serie Civilization.', categories: juego15 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1CZooRBTJ9vebM4croj-yyje5luXA7Dzi', name: 'Dark Souls II', price: '25', stock: '99', description: 'Es un videojuego de rol de acción que tiene lugar en un mundo abierto, desarrollado para Microsoft Windows.', categories: juego16 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1dfUs7Mm1Byhkqs_FTwKAdnVmcPta3Bv4', name: 'Far Cry 6', price: '30', stock: '99', description: 'Es un videojuego de disparos en primera persona desarrollado por Ubisoft Toronto y publicado por Ubisoft.', categories: juego17 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1PomJe8ghIWTIyDfW4xx0Gsijif64DGBG', name: 'Farming Simulator', price: '50', stock: '99', description: 'Farming Simulator ofrece más profundidad y el mayor grado de libertad para el jugador en la historia de la serie.', categories: juego18 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1CbCduxx05tD__Fh4UDSLnU0PNpr2fTYh', name: 'Microsoft Flight Simulator', price: '80', stock: '99', description: 'Microsoft Flight Simulator es una serie de simuladores de vuelo creada por SubLOGIC en 1979.', categories: juego19 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1HF1P6M7RJRdndh9fVT-IjIINIxuLGOUD', name: 'Forza Horizon 5', price: '60', stock: '99', description: 'Es un videojuego de carreras multijugador en línea desarrollado por Playground Games.', categories: juego20 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1nBxn8syNnVgv0Cy9FxM3IpfaWOOwYKuL', name: 'MotoGP 22', price: '70', stock: '99', description: 'Es un videojuego de carreras multijugador en línea desarrollado por  Milestone.', categories: juego21 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=1xXFcLKH_VM0YQ0anLQBuSgjwQaT54S52', name: 'Watch Dogs 2', price: '40', stock: '99', description: 'Es un videojuego de mundo abierto y acción-aventura desarrollado por Ubisoft Montreal.', categories: juego22 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=16qh59leZdrMul8S2vZboi3zMkTb8uKzM', name: 'Assassins Creed: Odyssey', price: '20', stock: '99', description: 'Es un videojuego desarrollado por Ubisoft Quebec y publicado por Ubisoft.', categories: juego23 });
        yield productModel_1.ProductModel.create({ photo: 'https://drive.google.com/uc?export=view&id=16qh59leZdrMul8S2vZboi3zMkTb8uKzM', name: 'The Elder Scrolls V: Skyrim', price: '10', stock: '99', description: 'Es un ARPG del tipo mundo abierto desarrollado por Bethesda Game Studios.', categories: juego24 });
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