import { defineFeature, loadFeature } from 'jest-cucumber';
import puppeteer from "puppeteer";

const feature = loadFeature('./features/login-bad-pod.feature');

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
  
  test("The user log in with bad pod", ({given,when,then}) => {
    let email:string
    let password:string

    given("A user with a pod without name,adress and email", () => {
      email = "IvanPOD"
      password = "Solidasw88."
    });

    when("I click in Log Iniciar Sesion con inrupt", async () => {
      await page.setViewport({ width: 1200, height: 1300 });
      await expect(page).toMatch("Productos");
      await expect(page).toClick("a[href='/LogIn']");
      await expect(page).toClick("a[href='/inrupt']");
      await expect(page).toClick('button', { text: 'Login' });
      await page.waitForNavigation()
      await expect(page).toFill("input[name='username']", email);
      await expect(page).toFill("input[name='password']", password);
      await expect(page).toClick('button', { text: 'Log In' });
    });

    then("I should be redirected to my profile with error messages", async () => {
      await page.waitForNavigation()
      await page.waitForTimeout(80000);
     
      await expect(page).toMatch("Esta aplicacion requiere de un POD con un nombre en el");

      await expect(page).toMatch("Esta aplicacion requiere de un POD con un email en el (ubicado en notas)");

      await expect(page).toMatch("Esta aplicacion requiere de un POD con una direccion en el");
    });
  });

});