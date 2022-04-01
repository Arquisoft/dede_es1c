import request, { Response } from "supertest";
import express, { Application, RequestHandler } from "express";
import cors from "cors";
import bp from "body-parser";
import promBundle from "express-prom-bundle";
import apiUser from "../src/users/userRouter";
import apiProduct from "../src/products/productRouter";
import {beforeAll, afterAll, describe, it, expect} from "@jest/globals";


const path = require("path");

const app: Application = express();

const mongoose = require("mongoose");

let token;


beforeAll(async (done) => {

    const metricsMiddleware: RequestHandler = promBundle({ includeMethod: true });
    app.use(metricsMiddleware);

    app.use(cors());
    app.use(bp.json());

    app.use(bp.urlencoded({ extended: false }));

    app.use(apiUser);
    app.use(apiProduct);
    app.listen(5000);

    app.use("/uploads", express.static(path.resolve("uploads")));
    app.set("view engine", "ejs");

    await mongoose.connect('mongodb+srv://uo278485:1234@cluster0.35zkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

    request(app)
        .post('/login')
        .send({
            email: "b@gmail.com",
            password: "123"
        })
        .end((err, response) => {
            token = response.body.token; // save the token!
            done();
        });
});


// CONEXIÓN A LA BD

afterAll(async () => {
    await mongoose.connection.close();
    // Cuidado con lo que se ponga aquí, que puede afectar a la BD

});


/******* USUARIOS *******/

describe("user ", () => {
    /**
     * Consigo un usuario
     */
    it("Puedo conseguir un usuario", async () => {

        const response: Response = await request(app).get(
            "/user/a@gmail.com"
        ).set('Authorization', `Bearer ${token}`).then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.type).toBe('application/json');
        });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(
            expect.objectContaining({
                name: "User",
                email: "user@uniovi.es",
                role: "0",
                products: [mongoose.ObjectId]
            })
        );
    });

    /**
     * Get usuario que no existe
     */
    it("Get usuario que no existe", async () => {
        const response: Response = await request(app).get(
            "/user/noExiste@gmail.com"
        ).set('Authorization', `Bearer ${token}`).then((response) => {
            expect(response.statusCode).toBe(404);

        });

    });

    /**
     * Listar usuarios
     */
    it("Puedo listar a todos los usuarios", async () => {
        const response: Response = await request(app).get(
            "/user"
        ).set('Authorization', `Bearer ${token}`).then((response) => {
            expect(response.statusCode).toBe(404);

        });
    });


});


