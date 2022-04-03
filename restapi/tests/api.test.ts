import request, {Response} from "supertest";
import express, {Application, RequestHandler} from "express";
import cors from "cors";
import bp from "body-parser";
import promBundle from "express-prom-bundle";
import apiUser from "../src/users/userRouter";
import apiProduct from "../src/products/productRouter";
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

    app.listen(5000);

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

    /**
     * Get producto que existe
     */

    /**
     * Listar todos los productos
     */

    /**
     * Crear producto
     */

    /**
     * Eliminar producto
     */

    /**
     * Actualizar stock del producto
     */
});


