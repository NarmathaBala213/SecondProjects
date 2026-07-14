import { Given, When, Then } from "@cucumber/cucumber";
import { LoginPage } from '../../pages/LoginPage.js';
import { InventoryPage } from '../../pages/InventoryPage.js';
import { CartPage } from '../../pages/CartPage.js';
import { CheckoutPage } from '../../pages/CheckoutPage.js';
import { MenuPage } from '../../pages/MenuPage.js';

Given("user launches browser", async function () {
  // handled in hooks
});

Given("user navigates to SauceDemo", async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

When("user logs in with valid credentials", async function () {
  await this.loginPage.login();
});

When("user sorts products low to high", async function () {
  this.inventoryPage = new InventoryPage(this.page);
  await this.inventoryPage.sortLowToHigh();
});

When("user adds first three products to cart", async function () {
  await this.inventoryPage.addFirstThreeProducts();
});

When("user goes to cart", async function () {
  await this.inventoryPage.goToCart();
});

When("user clicks checkout", async function () {
  this.cartPage = new CartPage(this.page);
  await this.cartPage.clickCheckout();
});

When("user fills checkout details", async function () {
  this.checkoutPage = new CheckoutPage(this.page);
  await this.checkoutPage.fillDetails();
  await this.checkoutPage.continue();
});

When("user completes the purchase", async function () {
  await this.checkoutPage.finish();
  await this.checkoutPage.backHome();

  this.menuPage = new MenuPage(this.page);
  await this.menuPage.logout();
});

Then("user logs out", async function () {
  // already done
});