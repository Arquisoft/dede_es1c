import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/payment-bad-input.feature');

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
    
    test("The user try to pay with bad card inputs on the form", ({given,when,then}) => {

        let email:string
        let password:string

        let campoNumeroErroneo:string;
        let campoNombreErroneo: string;
        let campoFechaErroneo: string;
        let campoCVCErroneo: string;

      given("Bad card number", () => {
        email = "UO270762"
        password = "Solidasw88."

        campoNumeroErroneo = "1234";
        campoNombreErroneo= "1234";
        campoFechaErroneo = "00/00";
        campoCVCErroneo= "JEJE";
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
        await expect(page).toFill("input[id='nombre']", campoNombreErroneo);
        await expect(page).toFill("input[id='numero']", campoNumeroErroneo);
        await expect(page).toFill("input[id='fecha']", campoFechaErroneo);
        await expect(page).toFill("input[id='cvc']", campoCVCErroneo);

        await expect(page).toMatch("Nombre invalido");
        await expect(page).toMatch("Numero invalido");
        await expect(page).toMatch("Fecha invalida");
        await expect(page).toMatch("CVC invalido");
        
        await page.setViewport({ width: 1200, height: 1300 });
        await expect(page).toClick('button', { text: 'Pagar' });
      });
  
      then("A modal popout appear", async () => {
        await page.waitForTimeout(2000);
        await expect(page).toMatch("Tarjeta invalida, compruebe los campos");
      });
    });
  
  });