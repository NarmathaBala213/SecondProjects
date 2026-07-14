import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();

  //console.log("✅ Hook working, page created");
  console.log("Hook executed: Browser and page initialized");
});

After(async function () {
  await this.browser.close();
});