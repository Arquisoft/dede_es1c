import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/register-form.feature');

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
  
  test("The user does not have a solid pod", ({given,when,then}) => {
    given("A user without a pod", () => {
    });

    when("I click on the registrate aqui", async () => {
      await page.setViewport({ width: 1200, height: 1300 });
      await expect(page).toMatch("Productos");
      await expect(page).toClick("a[href='/LogIn']");
      await expect(page).toClick('button', { text: '¿No tienes una cuenta SOLID? Registrate aqui' });
    });

    then("I should be redirected to https://inrupt.net/register", async () => {
      await page.waitForNavigation()
      expect(await page.url()).toBe("https://inrupt.net/register");

    });
  });

});

