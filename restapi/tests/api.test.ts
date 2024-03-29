import request, {Response} from "supertest";
import express, {Application, RequestHandler} from "express";
import cors from "cors";
import bp from "body-parser";
import promBundle from "express-prom-bundle";
import apiUser from "../src/users/userRouter";
import apiProduct from "../src/products/productRouter";
import apiOrder from "../src/orders/orderRouter";
import apiLogin from "../src/login/loginRouter";
import {beforeAll, afterAll, describe, it, expect} from "@jest/globals";


const path = require("path");

const app: Application = express();

const mongoose = require("mongoose");

let token;


beforeAll(async () => {

    const metricsMiddleware: RequestHandler = promBundle({includeMethod: true});
    app.use(metricsMiddleware);

    app.use(cors());
    app.use(bp.json());

    app.use(bp.urlencoded({extended: false}));

    app.use('/user', apiUser)
    app.use('/product', apiProduct)
    app.use('/', apiLogin)

    app.use('/order', apiOrder)

    app.use("/uploads", express.static(path.resolve("uploads")));
    app.set("view engine", "ejs");

    await mongoose.connect('mongodb+srv://uo278485:1234@cluster0.35zkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    const response = await request(app)
        .post('/login').send({
            email: 'b@gmail.com',
            password: '123'
        })
    token = response.body.token;
});


// CONEXIÓN A LA BD

afterAll(async () => {
    await mongoose.connection.close();
    // Cuidado con lo que se ponga aquí, que puede afectar a la BD

});


/****USUARIOS ****/

describe("USUARIOS ", () => {

    /**
     * Get usuario que no existe
     */
    it("Get usuario que no existe", async () => {
        const response: Response = await request(app)
            .get("/user/noExiste@gmail.com")
            .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(404);
    });

    /**
     * Get usuario que existe
     */
    it("Get usuario que existe", async () => {

        const response: Response = await request(app)
            .get("/user/a@gmail.com")
            .set('Authorization', `Bearer ${token}`);

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual(
            expect.objectContaining({
                email: "a@gmail.com",
                products: [],
                role: 0,

            })
        );
    });

    /**
     * Listar usuarios
     */
    it("Listar usuarios", async () => {
        const response: Response = await request(app).get(
            "/user"
        ).set('Authorization', `Bearer ${token}`)
        expect(response.statusCode).toBe(200);

    });

    /**
     * Obtener usuario registrado
     */
    it("Obtener usuario registrado", async () => {
        const response: Response = await request(app).get(
            "/user/profile"
        ).set('Authorization', `Bearer ${token}`)
        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual(
            expect.objectContaining({
                email: "b@gmail.com",
                role: 10,
            })
        );

    });

    /**
     * Usuario añade producto al carrito
     */
    it("Usuario añade producto al carrito", async () => {

        const responseDelete: Response = await request(app).delete(
            "/user/product/all"
        ).set('Authorization', `Bearer ${token}`)
        expect(responseDelete.statusCode).toBe(200);


        const response: Response = await request(app).post(
            "/user/product"
        ).set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        })
        expect(response.statusCode).toBe(200);


        const response2: Response = await request(app).get(
            "/user/profile"
        ).set('Authorization', `Bearer ${token}`)

        expect(response2.statusCode).toBe(200);

        expect(response2.body).toEqual(
            expect.objectContaining({
                email: "b@gmail.com",
                products: [response2.body.products[0]],
            })
        );

    });

    /**
     * Usuario borra producto al carrito
     */
    it("Usuario borra producto al carrito", async () => {

        const responseDelete: Response = await request(app).delete(
            "/user/product/all"
        ).set('Authorization', `Bearer ${token}`)
        expect(responseDelete.statusCode).toBe(200);


        const response: Response = await request(app).post(
            "/user/product"
        ).set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        })
        expect(response.statusCode).toBe(200);


        const response2: Response = await request(app).get(
            "/user/profile"
        ).set('Authorization', `Bearer ${token}`)

        expect(response2.statusCode).toBe(200);

        expect(response2.body).toEqual(
            expect.objectContaining({
                email: "b@gmail.com",
                products: [response2.body.products[0]],
            })
        );

        const responseDelete2: Response = await request(app).delete(
            "/user/product/"
        ).set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        })

        expect(responseDelete2.statusCode).toBe(200);

        const response3: Response = await request(app).get(
            "/user/profile"
        ).set('Authorization', `Bearer ${token}`)

        expect(response3.statusCode).toBe(200);

        expect(response3.body).toEqual(
            expect.objectContaining({
                email: "b@gmail.com",
                products: [],
            })
        );

    });

    /**
     * Usuario borra todos los productos del carrito
     */
    it("Usuario añade producto al carrito", async () => {

        const responseDelete: Response = await request(app).delete(
            "/user/product/all"
        ).set('Authorization', `Bearer ${token}`)

        expect(responseDelete.statusCode).toBe(200);


        const responseAdd: Response = await request(app).post(
            "/user/product"
        ).set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        })
        expect(responseAdd.statusCode).toBe(200);

        const responseAdd2: Response = await request(app).post(
            "/user/product"
        ).set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        })
        expect(responseAdd2.statusCode).toBe(200);

        const responseAdd3: Response = await request(app).post(
            "/user/product"
        ).set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        })
        expect(responseAdd3.statusCode).toBe(200);


        const response2: Response = await request(app).get(
            "/user/profile"
        ).set('Authorization', `Bearer ${token}`)

        expect(response2.statusCode).toBe(200);

        expect(response2.body).toEqual(
            expect.objectContaining({
                email: "b@gmail.com",
                products: [response2.body.products[0], response2.body.products[0], response2.body.products[0]],
            })
        );

        const responseDelete2: Response = await request(app).delete(
            "/user/product/all"
        ).set('Authorization', `Bearer ${token}`)

        expect(responseDelete2.statusCode).toBe(200);

        const responseDeleteAll: Response = await request(app).get(
            "/user/profile"
        ).set('Authorization', `Bearer ${token}`)

        expect(responseDeleteAll.statusCode).toBe(200);

        expect(responseDeleteAll.body).toEqual(
            expect.objectContaining({
                email: "b@gmail.com",
                products: [],
            })
        );

    });


});

/****PRODUCTS ****/

describe("PRODUCTS ", () => {
    /**
     * Get producto que no existe
     */
    it("Get producto que no existe", async () => {
        const response: Response = await request(app)
            .get("/product/noexiste1")
            .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(404);
    });


    /**
     * Get producto que existe
     */
    it("Get producto que existe", async () => {
        const response: Response = await request(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual(
            expect.objectContaining({
                name: "League of Leguends",
                photo: "https://drive.google.com/uc?export=view&id=1bJdo5tZKUHbIUTM4SLJlGdRQWsfy6s7R",
                price: "50",
                stock: "2",
                description: "Videojuego del género multijugador de arena de batalla en línea y deporte electrónico el cual fue desarrollado por Riot Games.",
                categories: ["estrategia", "acción"]

            })
        );
    });


    /**
     * Listar todos los productos
     */

    it("listar todos los productos", async () => {
        const response: Response = await request(app).get(
            "/product"
        );
        expect(response.statusCode).toBe(200);

    });

    /**
     * Crear producto y eliminarlo
     */

    it("Crear un producto correctamente y eliminarlo", async () => {

        const responseDelete: Response = await request(app).delete(
            "/user/product/all"
        ).set('Authorization', `Bearer ${token}`)

        expect(responseDelete.statusCode).toBe(200);


        let juego1: string[] = ["deportes"];
        const response: Response = await request(app).post("/product").send({
            photo: "https://drive.google.com/uc?export=view&id=1bJdo5tZKUHbIUTM4SLJlGdRQWsfy6s7R",
            name: "ProductoNuevo1",
            price: "1",
            stock: "1",
            description: 'Description',
            categories: juego1,
        }).set('Authorization', `Bearer ${token}`);

        expect(response.statusCode).toBe(200);

        const response2: Response = await request(app)
            .get("/product/ProductoNuevo1")
            .set('Authorization', `Bearer ${token}`)

        expect(response2.statusCode).toBe(200);

        expect(response2.body).toEqual(
            expect.objectContaining({
                name: "ProductoNuevo1",
                price: "1",
                stock: "1",
                description: "Description",
                categories: ["deportes"]

            })
        );

        const responseAddP: Response = await request(app).post(
            "/user/product"
        ).set('Authorization', `Bearer ${token}`).send({
            name: 'ProductoNuevo1'
        })

        const response3: Response = await request(app).get(
            "/user/profile"
        ).set('Authorization', `Bearer ${token}`)

        const respons4: Response = await request(app).get(
            "/product"
        );

        const responseDelete2: Response = await request(app)
            .delete("/product/" + response3.body.products[0])
            .set('Authorization', `Bearer ${token}`);

        expect(responseDelete2.statusCode).toBe(200);

        const respons5: Response = await request(app).get(
            "/product"
        );

        const responseGet: Response = await request(app)
            .get("/product/ProductoNuevo1")
            .set('Authorization', `Bearer ${token}`)

        expect(responseGet.statusCode).toBe(404);
    });


    /**
     * Actualizar stock del producto
     */
    it("Actualizar stock de producto", async () => {
        const responseDelete: Response = await request(app).delete(
            "/user/product/all"
        ).set('Authorization', `Bearer ${token}`)

        expect(responseDelete.statusCode).toBe(200);

        const responseAdd: Response = await request(app).post(
            "/user/product"
        ).set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        })

        const response2: Response = await request(app).get(
            "/user/profile"
        ).set('Authorization', `Bearer ${token}`)


        const responseUpdate: Response = await request(app)
            .put("/product/stock/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
                stock: "4",
            });

        expect(responseUpdate.statusCode).toBe(200);

        const response: Response = await request(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual(
            expect.objectContaining({
                name: "League of Leguends",
                stock: "4"
            })
        );

        const responseUpdate2: Response = await request(app)
            .put("/product/stock/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
                stock: "2",
            });

        expect(responseUpdate2.statusCode).toBe(200);

        const respons2: Response = await request(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`)

        expect(respons2.statusCode).toBe(200);

        expect(respons2.body).toEqual(
            expect.objectContaining({
                name: "League of Leguends",
                stock: "2"
            })
        );
    });

    /**
     * Actualizar price del producto
     */
    it("Actualizar price de producto", async () => {
        const responseDelete: Response = await request(app).delete(
            "/user/product/all"
        ).set('Authorization', `Bearer ${token}`)

        expect(responseDelete.statusCode).toBe(200);

        const responseAdd: Response = await request(app).post(
            "/user/product"
        ).set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        })

        const response2: Response = await request(app).get(
            "/user/profile"
        ).set('Authorization', `Bearer ${token}`)


        const responseUpdate: Response = await request(app)
            .put("/product/price/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
                price: "20",
            });

        expect(responseUpdate.statusCode).toBe(200);

        const response: Response = await request(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual(
            expect.objectContaining({
                name: "League of Leguends",
                price: "20"
            })
        );

        const responseUpdate2: Response = await request(app)
            .put("/product/price/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
                price: "50",
            });

        expect(responseUpdate2.statusCode).toBe(200);

        const respons2: Response = await request(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`)

        expect(respons2.statusCode).toBe(200);

        expect(respons2.body).toEqual(
            expect.objectContaining({
                name: "League of Leguends",
                price: "50"
            })
        );
    });

    /**
     * Actualizar description del producto
     */
    it("Actualizar description de producto", async () => {
        const responseDelete: Response = await request(app).delete(
            "/user/product/all"
        ).set('Authorization', `Bearer ${token}`)

        expect(responseDelete.statusCode).toBe(200);

        const responseAdd: Response = await request(app).post(
            "/user/product"
        ).set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        })

        const response2: Response = await request(app).get(
            "/user/profile"
        ).set('Authorization', `Bearer ${token}`)


        const responseUpdate: Response = await request(app)
            .put("/product/description/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
                description: "Hola",
            });

        expect(responseUpdate.statusCode).toBe(200);

        const response: Response = await request(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual(
            expect.objectContaining({
                name: "League of Leguends",
                description: "Hola"
            })
        );

        const responseUpdate2: Response = await request(app)
            .put("/product/description/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
                description: "Videojuego del género multijugador de arena de batalla en línea y deporte electrónico el cual fue desarrollado por Riot Games.",
            });

        expect(responseUpdate2.statusCode).toBe(200);

        const respons2: Response = await request(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`)

        expect(respons2.statusCode).toBe(200);

        expect(respons2.body).toEqual(
            expect.objectContaining({
                name: "League of Leguends",
                description: "Videojuego del género multijugador de arena de batalla en línea y deporte electrónico el cual fue desarrollado por Riot Games."
            })
        );
    });

    /**
     * Actualizar foto del producto
     */
    it("Actualizar foto de producto", async () => {
        const responseDelete: Response = await request(app).delete(
            "/user/product/all"
        ).set('Authorization', `Bearer ${token}`)

        expect(responseDelete.statusCode).toBe(200);

        const responseAdd: Response = await request(app).post(
            "/user/product"
        ).set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        })

        const response2: Response = await request(app).get(
            "/user/profile"
        ).set('Authorization', `Bearer ${token}`)


        const responseUpdate: Response = await request(app)
            .put("/product/photo/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
                photo: "https://drive.google.com/uc?export=view&id=1ZJwE7fE-NoqkvCwrm0XgWdsP5P6t8xWw",
            });

        expect(responseUpdate.statusCode).toBe(200);

        const response: Response = await request(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual(
            expect.objectContaining({
                name: "League of Leguends",
                photo: "https://drive.google.com/uc?export=view&id=1ZJwE7fE-NoqkvCwrm0XgWdsP5P6t8xWw"
            })
        );

        const responseUpdate2: Response = await request(app)
            .put("/product/photo/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
                photo: "https://drive.google.com/uc?export=view&id=1bJdo5tZKUHbIUTM4SLJlGdRQWsfy6s7R",
            });

        expect(responseUpdate2.statusCode).toBe(200);

        const respons2: Response = await request(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`)

        expect(respons2.statusCode).toBe(200);

        expect(respons2.body).toEqual(
            expect.objectContaining({
                name: "League of Leguends",
                photo: "https://drive.google.com/uc?export=view&id=1bJdo5tZKUHbIUTM4SLJlGdRQWsfy6s7R"
            })
        );
    });

    /**
     * Filter
     */
    it("Filtrar", async () => {
        const responseDelete: Response = await request(app).delete(
            "/user/product/all"
        ).set('Authorization', `Bearer ${token}`)

        expect(responseDelete.statusCode).toBe(200);

        const response: Response = await request(app)
            .get("/product/filter/aventuras")
            .set('Authorization', `Bearer ${token}`);

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(
            expect.arrayContaining(
                [expect.objectContaining({name: "Elden ring"})]
            )
        );
    });

    /**
     * Reduce Stock
     */
    it("Reduce en uno el stock", async () => {



        const respons2: Response = await request(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`)

        expect(respons2.statusCode).toBe(200);

        expect(respons2.body).toEqual(
            expect.objectContaining({
                name: "League of Leguends",
                stock: "2"
            })
        );

        //Bajo su stock en uno
        const responseReduce: Response = await request(app)
            .get("/product/reduce/League of Leguends")
            .set('Authorization', `Bearer ${token}`)

        expect(responseReduce.statusCode).toBe(200);

        const respons3: Response = await request(app)
            .get("/product/League of Leguends")
            .set('Authorization', `Bearer ${token}`)

        expect(respons3.statusCode).toBe(200);

        //Compruebo su stock
        expect(respons3.body).toEqual(
            expect.objectContaining({
                name: "League of Leguends",
                stock: "1"
            })
        );

        const responseDelete: Response = await request(app).delete(
            "/user/product/all"
        ).set('Authorization', `Bearer ${token}`)

        expect(responseDelete.statusCode).toBe(200);

        const responseAdd: Response = await request(app).post(
            "/user/product"
        ).set('Authorization', `Bearer ${token}`).send({
            name: 'League of Leguends'
        })

        const response2: Response = await request(app).get(
            "/user/profile"
        ).set('Authorization', `Bearer ${token}`)


        const responseUpdate: Response = await request(app)
            .put("/product/stock/" + response2.body.products[0])
            .set('Authorization', `Bearer ${token}`)
            .send({
                stock: "2",
            });


    })
})


/****Orders****/

describe("ORDERS ", () => {

    /**
     * Get order que no existe
     */
    it("Get Order que no existe", async () => {
        const response: Response = await request(app)
            .get("/order/noexiste123@email.com")
            .set('Authorization', `Bearer ${token}`)
        expect(response.statusCode).toBe(200);
    });

    /**
     * Order que existe
     */
    it("Get Order que existe", async () => {
        const response: Response = await request(app)
            .get("/order/a@gmail.com")
            .set('Authorization', `Bearer ${token}`)

        expect(response.statusCode).toBe(200);

        expect(response.body).toEqual(
            expect.arrayContaining(
                [expect.objectContaining({email: 'a@gmail.com',
                    fecha: "19/04/2022",
                    name: "Dying Light",
                    description: "serie de videojuegos de acción",
                    photo: 'https://drive.google.com/uc?export=view&id=1aUIkNF0ZMJV0CAynt-TE_bFw-ySFcMXx',
                    price: '6',
                    amount: 3})]
            )
        );

    });

    /**
     * Listar todos las ordenes
     */

    it("listar todas las ordenes", async () => {
        const response: Response = await request(app).get("/order");
        expect(response.statusCode).toBe(200);

    });


    /**
     * Crear order y lo elimina
     */

    it("Crear un order", async () => {

        const response: Response = await request(app).post("/order").send({
            email: 'c@gmail.com', fecha: "19/04/2022", name: 'Battlefield 2042',
            description: 'videojuego de disparos y acción bélica en primera persona',
            photo: 'https://drive.google.com/uc?export=view&id=1RwYHUq0MTPV7RQCCkX1LKqpbyptVOrad',
            price: '6',
            amount: 3
        }).set('Authorization', `Bearer ${token}`);

        expect(response.statusCode).toBe(200);

        const response2: Response = await request(app)
            .get("/order/c@gmail.com")
            .set('Authorization', `Bearer ${token}`)

        expect(response2.statusCode).toBe(200);

        expect(response2.body).toEqual(
            expect.arrayContaining(
                [expect.objectContaining({email: 'c@gmail.com', fecha: "19/04/2022", name: 'Battlefield 2042',
                    description: 'videojuego de disparos y acción bélica en primera persona',
                    photo: 'https://drive.google.com/uc?export=view&id=1RwYHUq0MTPV7RQCCkX1LKqpbyptVOrad',
                    price: '6',
                    amount: 3})]
            )
        );


        //Elimina
        const responseDelete: Response = await request(app)
            .delete("/order/" + response2.body[0]._id.toString())
            .set('Authorization', `Bearer ${token}`);

        expect(responseDelete.statusCode).toBe(200);
    });
})