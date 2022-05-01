import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/payment-good-input.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {
  
    jest.setTimeout(100000)
    beforeAll(async () => {
  
      browser = process.env.GITHUB_ACTIONS
      ? await puppeteer.launch()
      : await puppeteer.launch({ headless: true, slowMo:100}); //false to run tests locally
    page = await browser.newPage();
  
      await page
        .goto("https://secure-oasis-78684.herokuapp.com", {
          waitUntil: "networkidle0",
        })
        .catch(() => {});
    });
    
    test("The user try to pay with good card inputs on the form", ({given,when,then}) => {

        let email:string
        let password:string

        let campoNumero:string;
        let campoNombre:string;
        let campoFecha:string;
        let campoCVC:string;

      given("Good card inputs to fill the form", () => {
          email = "UO270762"
          password = "Solidasw88."

          campoNumero = "1234 1234 1234 1234";
          campoNombre = "Jose Garcia Gutierrez";
          campoFecha = "09/24";
          campoCVC = "648"
      });
  
      when("I click in Pagar", async () => {
        await page.setViewport({ width: 1200, height: 1300 });
        await expect(page).toMatch("Productos");
        //LogIn
        await expect(page).toClick("a[href='/LogIn']");
        await expect(page).toClick("a[href='/inrupt']");
        await expect(page).toClick('button', { text: 'Login' });
        await page.waitForNavigation()
        await expect(page).toFill("input[name='username']", email);
        await expect(page).toFill("input[name='password']", password);
        await expect(page).toClick('button', { text: 'Log In' });
        //Añadir al carro
        await page.waitForNavigation()
        await expect(page).toClick("a[href='/']");
        await expect(page).toClick('button[name="Añadir Carrito"]');
        await expect(page).toClick("a[href='/Carrito']");
        await page.waitForTimeout(3000);
        await expect(page).toClick("a[href='/Pago']");
        //Añadir datos
        await page.setViewport({ width: 1200, height: 1300 });
        await expect(page).toFill("input[id='nombre']", campoNombre);
        await expect(page).toFill("input[id='numero']", campoNumero);
        await expect(page).toFill("input[id='fecha']", campoFecha);
        await expect(page).toFill("input[id='cvc']", campoCVC);
        await expect(page).toClick('button', { text: 'Pagar' });
      });
  
      then("A modal popout appear", async () => {
        await page.waitForTimeout(2000);
        await expect(page).toMatch("Tarjeta valida, haga click para aceptar el pago");
      });
    });
  
  });