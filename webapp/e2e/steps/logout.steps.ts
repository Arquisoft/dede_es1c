import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/logout.feature');

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
  
  test("The user log in and then Log out", ({given,when,then}) => {
    let email:string
    let password:string

    given("A user log in in the app", () => {
      email = "UO270762"
      password = "Solidasw88."
    });

    when("I click in sign out", async () => {
      await page.setViewport({ width: 1200, height: 1300 });
      await expect(page).toMatch("Productos");
      await expect(page).toClick("a[href='/LogIn']");
      await expect(page).toClick("a[href='/inrupt']");
      await expect(page).toClick('button', { text: 'Login' });
      await page.waitForNavigation()
      await expect(page).toFill("input[name='username']", email);
      await expect(page).toFill("input[name='password']", password);
      await expect(page).toClick('button', { text: 'Log In' });
      await page.waitForNavigation()
      await page.waitForTimeout(2000);

    });

    then("The login button must appear again", async () => {
      await page.waitForTimeout(2000);
      await expect(page).toClick("button[id='User']");
      await expect(page).toClick("a[id='signout']");
      await page.waitForNavigation();
      await expect(page).toMatch("Login");
    });
  });

});

