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
        .goto("http://localhost:3000/Pago", {
          waitUntil: "networkidle0",
        })
        .catch(() => {});
    });
    
    test("The user try to pay with bad card inputs on the form", ({given,when,then}) => {
  
        let campoNumeroErroneo:string;

      given("Bad card number", () => {
          campoNumeroErroneo = "1234"
      });
  
      when("I click in Pagar", async () => {
        await page.setViewport({ width: 1200, height: 1300 });
        await expect(page).toClick('button', { text: 'Pagar' });
      });
  
      then("A modal popout appear", async () => {
        await page.waitForTimeout(2000);
        await expect(page).toMatch("Tarjeta invalida, compruebe los campos");
      });
    });
  
  });