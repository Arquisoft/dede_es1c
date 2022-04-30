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
        .goto("http://localhost:3000/Pago", {
          waitUntil: "networkidle0",
        })
        .catch(() => {});
    });
    
    test("The user try to pay with good card inputs on the form", ({given,when,then}) => {
  
        let campoNumero:string;
        let campoNombre:string;
        let campoFecha:string;
        let campoCVC:string;

      given("Good card inputs to fill the form", () => {
          campoNumero = "1234 1234 1234 1234";
          campoNombre = "Jose Garcia Gutierrez";
          campoFecha = "09/24";
          campoCVC = "648"
      });
  
      when("I click in Pagar", async () => {
        await page.setViewport({ width: 1200, height: 1300 });
        await expect(page).toFill("textfield[name='nombre']", campoNombre);
        await expect(page).toFill("textfield[name='numero']", campoNumero);
        await expect(page).toFill("textfield[name='fecha']", campoFecha);
        await expect(page).toFill("textfield[name='cvc']", campoCVC);
        await expect(page).toClick('button', { text: 'Pagar' });
        await page.waitForNavigation();
      });
  
      then("A modal popout appear", async () => {
        await page.waitForNavigation()
        await page.waitForTimeout(2000);
        await expect(page).toMatch("Tarjeta valida, haga click para aceptar el pago");
      });
    });
  
  });