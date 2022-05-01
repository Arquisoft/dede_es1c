import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/show-game.feature');

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
        .goto("https://secure-oasis-78684.herokuapp.com/", {
          waitUntil: "networkidle0",
        })
        .catch(() => {});
    });
    
    test("In homeView access to the details of the game", ({given,when,then}) => {
  
        let nombreJuego: string;

      given("Acces to homeView", () => {
          nombreJuego = "God of War";
      });
  
      when("I click in certain game card", async () => {
        await page.setViewport({ width: 1200, height: 1300 });
        await page
        .goto("https://secure-oasis-78684.herokuapp.com/Producto/God%20of%20War", {
          waitUntil: "networkidle0",
        })
        .catch(() => {});

      });
  
      then("See the game details", async () => {
        await page.waitForTimeout(2000);
        await expect(page).toMatch("God of War");
        await expect(page).toMatch("Serie de videojuegos hack and slash creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment.");
        await expect(page).toMatch("30€");
      });
    });
  
  });