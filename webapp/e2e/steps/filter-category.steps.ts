import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/filter-category.feature');

let page: puppeteer.Page;
let browser: puppeteer.Browser;

defineFeature(feature, test => {
  
  jest.setTimeout(100000)
  beforeAll(async () => {

    browser = process.env.GITHUB_ACTIONS
    ? await puppeteer.launch()
    : await puppeteer.launch({ headless: false, slowMo:100}); //false to run tests locally
  page = await browser.newPage();

    await page
      .goto("http://localhost:3000", {
        waitUntil: "networkidle0",
      })
      .catch(() => {});
  });
  
  test("Usuario no logeado filtra productos", ({given,when,then}) => {

    let nombre:string

    given("Dado un usuario no logeado se filtra por categoria", () => {
       nombre="deportes"
    });

    when("Filtro por categoria", async () => {
      //Logearse
      await page.setViewport({ width: 1200, height: 1300 });
      await expect(page).toMatch("Productos");
      await expect(page).toFill("input[aria-autocomplete='list']", nombre);
   
    });

    then("Se ve solo el producto filtrado por categoria", async () => {
      await expect(page).toMatch("Fifa 20");
    });
  });

});

