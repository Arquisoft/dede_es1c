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
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_prom_bundle_1 = __importDefault(require("express-prom-bundle"));
const userRouter_1 = __importDefault(require("../src/users/userRouter"));
const productRouter_1 = __importDefault(require("../src/products/productRouter"));
const orderRouter_1 = __importDefault(require("../src/orders/orderRouter"));
const loginRouter_1 = __importDefault(require("../src/login/loginRouter"));
const globals_1 = require("@jest/globals");
const path = require("path");
const app = (0, express_1.default)();
const mongoose = require("mongoose");
let token;
(0, globals_1.beforeAll)(() => __awaiter(void 0, void 0, void 0, function* () {
    const metricsMiddleware = (0, express_prom_bundle_1.default)({ includeMethod: true });
    app.use(metricsMiddleware);
    app.use((0, cors_1.default)());
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    app.use('/user', userRouter_1.default);
    app.use('/product', productRouter_1.default);
    app.use('/', loginRouter_1.default);
    app.use('/order', orderRouter_1.default);
    app.use("/uploads", express_1.default.static(path.resolve("uploads")));
    app.set("view engine", "ejs");
    yield mongoose.connect('mongodb+srv://uo278485:1234@cluster0.35zkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    const response = yield (0, supertest_1.default)(app)
        .post('/login').send({
        email: 'b@gmail.com',
        password: '123'
    });
    token = response.body.token;
}));
// CONEXIÓN A LA BD
(0, globals_1.afterAll)(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose.connection.close();
    // Cuidado con lo que se ponga aquí, que puede afectar a la BD
}));
/****USUARIOS ****/
(0, globals_1.describe)("USUARIOS ", () => {
    /**
     * Get usuario que no existe
     */
    (0, globals_1.it)("Get usuario que no existe", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app)
            .get("/user/noExiste@gmail.com")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response.statusCode).toBe(404);
    }));
    /**
     * Get usuario que existe
     */
    (0, globals_1.it)("Get usuario que existe", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app)
            .get("/user/a@gmail.com")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response.statusCode).toBe(200);
        (0, globals_1.expect)(response.body).toEqual(globals_1.expect.objectContaining({
            email: "a@gmail.com",
            products: [],
            role: 0,
        }));
    }));
    /**
     * Listar usuarios
     */
    (0, globals_1.it)("Listar usuarios", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get("/user").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response.statusCode).toBe(200);
    }));
    /**
     * Obtener usuario registrado
     */
    (0, globals_1.it)("Obtener usuario registrado", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get("/user/profile").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response.statusCode).toBe(200);
        (0, globals_1.expect)(response.body).toEqual(globals_1.expect.objectContaining({
            email: "b@gmail.com",
            role: 10,
        }));
    }));
    /**
     * Usuario añade producto al carrito
     */
    (0, globals_1.it)("Usuario añade producto al carrito", () => __awaiter(void 0, void 0, void 0, function* () {
        const responseDelete = yield (0, supertest_1.default)(app).delete("/user/product/all").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(responseDelete.statusCode).toBe(200);
        const response = yield (0, supertest_1.default)(app).post("/user/product").set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        });
        (0, globals_1.expect)(response.statusCode).toBe(200);
        const response2 = yield (0, supertest_1.default)(app).get("/user/profile").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response2.statusCode).toBe(200);
        (0, globals_1.expect)(response2.body).toEqual(globals_1.expect.objectContaining({
            email: "b@gmail.com",
            products: [response2.body.products[0]],
        }));
    }));
    /**
     * Usuario borra producto al carrito
     */
    (0, globals_1.it)("Usuario borra producto al carrito", () => __awaiter(void 0, void 0, void 0, function* () {
        const responseDelete = yield (0, supertest_1.default)(app).delete("/user/product/all").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(responseDelete.statusCode).toBe(200);
        const response = yield (0, supertest_1.default)(app).post("/user/product").set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        });
        (0, globals_1.expect)(response.statusCode).toBe(200);
        const response2 = yield (0, supertest_1.default)(app).get("/user/profile").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response2.statusCode).toBe(200);
        (0, globals_1.expect)(response2.body).toEqual(globals_1.expect.objectContaining({
            email: "b@gmail.com",
            products: [response2.body.products[0]],
        }));
        const responseDelete2 = yield (0, supertest_1.default)(app).delete("/user/product/").set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        });
        (0, globals_1.expect)(responseDelete2.statusCode).toBe(200);
        const response3 = yield (0, supertest_1.default)(app).get("/user/profile").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response3.statusCode).toBe(200);
        (0, globals_1.expect)(response3.body).toEqual(globals_1.expect.objectContaining({
            email: "b@gmail.com",
            products: [],
        }));
    }));
    /**
     * Usuario borra todos los productos del carrito
     */
    (0, globals_1.it)("Usuario añade producto al carrito", () => __awaiter(void 0, void 0, void 0, function* () {
        const responseDelete = yield (0, supertest_1.default)(app).delete("/user/product/all").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(responseDelete.statusCode).toBe(200);
        const responseAdd = yield (0, supertest_1.default)(app).post("/user/product").set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        });
        (0, globals_1.expect)(responseAdd.statusCode).toBe(200);
        const responseAdd2 = yield (0, supertest_1.default)(app).post("/user/product").set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        });
        (0, globals_1.expect)(responseAdd2.statusCode).toBe(200);
        const responseAdd3 = yield (0, supertest_1.default)(app).post("/user/product").set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        });
        (0, globals_1.expect)(responseAdd3.statusCode).toBe(200);
        const response2 = yield (0, supertest_1.default)(app).get("/user/profile").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response2.statusCode).toBe(200);
        (0, globals_1.expect)(response2.body).toEqual(globals_1.expect.objectContaining({
            email: "b@gmail.com",
            products: [response2.body.products[0], response2.body.products[0], response2.body.products[0]],
        }));
        const responseDelete2 = yield (0, supertest_1.default)(app).delete("/user/product/all").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(responseDelete2.statusCode).toBe(200);
        const responseDeleteAll = yield (0, supertest_1.default)(app).get("/user/profile").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(responseDeleteAll.statusCode).toBe(200);
        (0, globals_1.expect)(responseDeleteAll.body).toEqual(globals_1.expect.objectContaining({
            email: "b@gmail.com",
            products: [],
        }));
    }));
});
/****PRODUCTS ****/
(0, globals_1.describe)("PRODUCTS ", () => {
    /**
     * Get producto que no existe
     */
    (0, globals_1.it)("Get producto que no existe", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app)
            .get("/product/noexiste1")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response.statusCode).toBe(404);
    }));
    /**
     * Get producto que existe
     */
    (0, globals_1.it)("Get producto que existe", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response.statusCode).toBe(200);
        (0, globals_1.expect)(response.body).toEqual(globals_1.expect.objectContaining({
            name: "League of Leguends",
            photo: "https://drive.google.com/uc?export=view&id=1bJdo5tZKUHbIUTM4SLJlGdRQWsfy6s7R",
            price: "50",
            stock: "2",
            description: "Videojuego del género multijugador de arena de batalla en línea y deporte electrónico el cual fue desarrollado por Riot Games.",
            categories: ["estrategia", "acción"]
        }));
    }));
    /**
     * Listar todos los productos
     */
    (0, globals_1.it)("listar todos los productos", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get("/product");
        (0, globals_1.expect)(response.statusCode).toBe(200);
    }));
    /**
     * Crear producto y eliminarlo
     */
    (0, globals_1.it)("Crear un producto correctamente y eliminarlo", () => __awaiter(void 0, void 0, void 0, function* () {
        const responseDelete = yield (0, supertest_1.default)(app).delete("/user/product/all").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(responseDelete.statusCode).toBe(200);
        let juego1 = ["deportes"];
        const response = yield (0, supertest_1.default)(app).post("/product").send({
            photo: "https://drive.google.com/uc?export=view&id=1bJdo5tZKUHbIUTM4SLJlGdRQWsfy6s7R",
            name: "ProductoNuevo1",
            price: "1",
            stock: "1",
            description: 'Description',
            categories: juego1,
        }).set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response.statusCode).toBe(200);
        const response2 = yield (0, supertest_1.default)(app)
            .get("/product/ProductoNuevo1")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response2.statusCode).toBe(200);
        (0, globals_1.expect)(response2.body).toEqual(globals_1.expect.objectContaining({
            name: "ProductoNuevo1",
            price: "1",
            stock: "1",
            description: "Description",
            categories: ["deportes"]
        }));
        const responseAddP = yield (0, supertest_1.default)(app).post("/user/product").set('Authorization', `Bearer ${token}`).send({
            name: 'ProductoNuevo1'
        });
        const response3 = yield (0, supertest_1.default)(app).get("/user/profile").set('Authorization', `Bearer ${token}`);
        const respons4 = yield (0, supertest_1.default)(app).get("/product");
        const responseDelete2 = yield (0, supertest_1.default)(app)
            .delete("/product/" + response3.body.products[0])
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(responseDelete2.statusCode).toBe(200);
        const respons5 = yield (0, supertest_1.default)(app).get("/product");
        const responseGet = yield (0, supertest_1.default)(app)
            .get("/product/ProductoNuevo1")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(responseGet.statusCode).toBe(404);
    }));
    /**
     * Actualizar stock del producto
     */
    (0, globals_1.it)("Actualizar stock de producto", () => __awaiter(void 0, void 0, void 0, function* () {
        const responseDelete = yield (0, supertest_1.default)(app).delete("/user/product/all").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(responseDelete.statusCode).toBe(200);
        const responseAdd = yield (0, supertest_1.default)(app).post("/user/product").set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        });
        const response2 = yield (0, supertest_1.default)(app).get("/user/profile").set('Authorization', `Bearer ${token}`);
        const responseUpdate = yield (0, supertest_1.default)(app)
            .put("/product/stock/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
            stock: "4",
        });
        (0, globals_1.expect)(responseUpdate.statusCode).toBe(200);
        const response = yield (0, supertest_1.default)(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response.statusCode).toBe(200);
        (0, globals_1.expect)(response.body).toEqual(globals_1.expect.objectContaining({
            name: "League of Leguends",
            stock: "4"
        }));
        const responseUpdate2 = yield (0, supertest_1.default)(app)
            .put("/product/stock/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
            stock: "2",
        });
        (0, globals_1.expect)(responseUpdate2.statusCode).toBe(200);
        const respons2 = yield (0, supertest_1.default)(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(respons2.statusCode).toBe(200);
        (0, globals_1.expect)(respons2.body).toEqual(globals_1.expect.objectContaining({
            name: "League of Leguends",
            stock: "2"
        }));
    }));
    /**
     * Actualizar price del producto
     */
    (0, globals_1.it)("Actualizar price de producto", () => __awaiter(void 0, void 0, void 0, function* () {
        const responseDelete = yield (0, supertest_1.default)(app).delete("/user/product/all").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(responseDelete.statusCode).toBe(200);
        const responseAdd = yield (0, supertest_1.default)(app).post("/user/product").set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        });
        const response2 = yield (0, supertest_1.default)(app).get("/user/profile").set('Authorization', `Bearer ${token}`);
        const responseUpdate = yield (0, supertest_1.default)(app)
            .put("/product/price/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
            price: "20",
        });
        (0, globals_1.expect)(responseUpdate.statusCode).toBe(200);
        const response = yield (0, supertest_1.default)(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response.statusCode).toBe(200);
        (0, globals_1.expect)(response.body).toEqual(globals_1.expect.objectContaining({
            name: "League of Leguends",
            price: "20"
        }));
        const responseUpdate2 = yield (0, supertest_1.default)(app)
            .put("/product/price/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
            price: "50",
        });
        (0, globals_1.expect)(responseUpdate2.statusCode).toBe(200);
        const respons2 = yield (0, supertest_1.default)(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(respons2.statusCode).toBe(200);
        (0, globals_1.expect)(respons2.body).toEqual(globals_1.expect.objectContaining({
            name: "League of Leguends",
            price: "50"
        }));
    }));
    /**
     * Actualizar description del producto
     */
    (0, globals_1.it)("Actualizar description de producto", () => __awaiter(void 0, void 0, void 0, function* () {
        const responseDelete = yield (0, supertest_1.default)(app).delete("/user/product/all").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(responseDelete.statusCode).toBe(200);
        const responseAdd = yield (0, supertest_1.default)(app).post("/user/product").set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        });
        const response2 = yield (0, supertest_1.default)(app).get("/user/profile").set('Authorization', `Bearer ${token}`);
        const responseUpdate = yield (0, supertest_1.default)(app)
            .put("/product/description/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
            description: "Hola",
        });
        (0, globals_1.expect)(responseUpdate.statusCode).toBe(200);
        const response = yield (0, supertest_1.default)(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response.statusCode).toBe(200);
        (0, globals_1.expect)(response.body).toEqual(globals_1.expect.objectContaining({
            name: "League of Leguends",
            description: "Hola"
        }));
        const responseUpdate2 = yield (0, supertest_1.default)(app)
            .put("/product/description/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
            description: "Videojuego del género multijugador de arena de batalla en línea y deporte electrónico el cual fue desarrollado por Riot Games.",
        });
        (0, globals_1.expect)(responseUpdate2.statusCode).toBe(200);
        const respons2 = yield (0, supertest_1.default)(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(respons2.statusCode).toBe(200);
        (0, globals_1.expect)(respons2.body).toEqual(globals_1.expect.objectContaining({
            name: "League of Leguends",
            description: "Videojuego del género multijugador de arena de batalla en línea y deporte electrónico el cual fue desarrollado por Riot Games."
        }));
    }));
    /**
     * Actualizar foto del producto
     */
    (0, globals_1.it)("Actualizar foto de producto", () => __awaiter(void 0, void 0, void 0, function* () {
        const responseDelete = yield (0, supertest_1.default)(app).delete("/user/product/all").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(responseDelete.statusCode).toBe(200);
        const responseAdd = yield (0, supertest_1.default)(app).post("/user/product").set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        });
        const response2 = yield (0, supertest_1.default)(app).get("/user/profile").set('Authorization', `Bearer ${token}`);
        const responseUpdate = yield (0, supertest_1.default)(app)
            .put("/product/photo/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
            photo: "https://drive.google.com/uc?export=view&id=1ZJwE7fE-NoqkvCwrm0XgWdsP5P6t8xWw",
        });
        (0, globals_1.expect)(responseUpdate.statusCode).toBe(200);
        const response = yield (0, supertest_1.default)(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response.statusCode).toBe(200);
        (0, globals_1.expect)(response.body).toEqual(globals_1.expect.objectContaining({
            name: "League of Leguends",
            photo: "https://drive.google.com/uc?export=view&id=1ZJwE7fE-NoqkvCwrm0XgWdsP5P6t8xWw"
        }));
        const responseUpdate2 = yield (0, supertest_1.default)(app)
            .put("/product/photo/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
            photo: "https://drive.google.com/uc?export=view&id=1bJdo5tZKUHbIUTM4SLJlGdRQWsfy6s7R",
        });
        (0, globals_1.expect)(responseUpdate2.statusCode).toBe(200);
        const respons2 = yield (0, supertest_1.default)(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(respons2.statusCode).toBe(200);
        (0, globals_1.expect)(respons2.body).toEqual(globals_1.expect.objectContaining({
            name: "League of Leguends",
            photo: "https://drive.google.com/uc?export=view&id=1bJdo5tZKUHbIUTM4SLJlGdRQWsfy6s7R"
        }));
    }));
    /**
     * Filter
     */
    (0, globals_1.it)("Filtrar", () => __awaiter(void 0, void 0, void 0, function* () {
        const responseDelete = yield (0, supertest_1.default)(app).delete("/user/product/all").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(responseDelete.statusCode).toBe(200);
        const response = yield (0, supertest_1.default)(app)
            .get("/product/filter/aventuras")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response.statusCode).toBe(200);
        (0, globals_1.expect)(response.body).toEqual(globals_1.expect.arrayContaining([globals_1.expect.objectContaining({ name: "Elden ring" })]));
    }));
    /**
     * Reduce Stock
     */
    (0, globals_1.it)("Reduce en uno el stock", () => __awaiter(void 0, void 0, void 0, function* () {
        const respons2 = yield (0, supertest_1.default)(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(respons2.statusCode).toBe(200);
        (0, globals_1.expect)(respons2.body).toEqual(globals_1.expect.objectContaining({
            name: "League of Leguends",
            stock: "2"
        }));
        //Bajo su stock en uno
        const responseReduce = yield (0, supertest_1.default)(app)
            .get("/product/reduce/League of Leguends")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(responseReduce.statusCode).toBe(200);
        const respons3 = yield (0, supertest_1.default)(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(respons3.statusCode).toBe(200);
        //Compruebo su stock
        (0, globals_1.expect)(respons3.body).toEqual(globals_1.expect.objectContaining({
            name: "League of Leguends",
            stock: "1"
        }));
        const responseDelete = yield (0, supertest_1.default)(app).delete("/user/product/all").set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(responseDelete.statusCode).toBe(200);
        const responseAdd = yield (0, supertest_1.default)(app).post("/user/product").set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        });
        const response2 = yield (0, supertest_1.default)(app).get("/user/profile").set('Authorization', `Bearer ${token}`);
        const responseUpdate = yield (0, supertest_1.default)(app)
            .put("/product/stock/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
            stock: "2",
        });
    }));
});
/****Orders****/
(0, globals_1.describe)("ORDERS ", () => {
    /**
     * Get order que no existe
     */
    (0, globals_1.it)("Get Order que no existe", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app)
            .get("/order/noexiste@email.com")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response.statusCode).toBe(404);
    }));
    /**
     * Order que existe
     */
    (0, globals_1.it)("Get Order que existe", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app)
            .get("/order/a@gmail.com")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response.statusCode).toBe(200);
        (0, globals_1.expect)(response.body).toEqual(globals_1.expect.objectContaining({
            email: 'a@gmail.com',
            fecha: "19/04/2022",
            name: "Dying Light",
            description: "serie de videojuegos de acción",
            photo: 'https://drive.google.com/uc?export=view&id=1aUIkNF0ZMJV0CAynt-TE_bFw-ySFcMXx',
            price: '6',
            amount: 3
        }));
    }));
    /**
     * Listar todos las ordenes
     */
    (0, globals_1.it)("listar todas las ordenes", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).get("/order");
        (0, globals_1.expect)(response.statusCode).toBe(200);
    }));
    /**
     * Crear order y lo elimina
     */
    (0, globals_1.it)("Crear un order", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).post("/order").send({
            email: 'c@gmail.com', fecha: "19/04/2022", name: 'Battlefield 2042',
            description: 'videojuego de disparos y acción bélica en primera persona',
            photo: 'https://drive.google.com/uc?export=view&id=1RwYHUq0MTPV7RQCCkX1LKqpbyptVOrad',
            price: '6',
            amount: 3
        }).set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response.statusCode).toBe(200);
        const response2 = yield (0, supertest_1.default)(app)
            .get("/order/c@gmail.com")
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(response2.statusCode).toBe(200);
        (0, globals_1.expect)(response2.body).toEqual(globals_1.expect.objectContaining({
            email: 'c@gmail.com', fecha: "19/04/2022", name: 'Battlefield 2042',
            description: 'videojuego de disparos y acción bélica en primera persona',
            photo: 'https://drive.google.com/uc?export=view&id=1RwYHUq0MTPV7RQCCkX1LKqpbyptVOrad',
            price: '6',
            amount: 3
        }));
        //Elimina
        const responseDelete = yield (0, supertest_1.default)(app)
            .delete("/order/" + response2.body._id.toString())
            .set('Authorization', `Bearer ${token}`);
        (0, globals_1.expect)(responseDelete.statusCode).toBe(200);
    }));
});
//# sourceMappingURL=api.test.js.map