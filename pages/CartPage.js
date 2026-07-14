export class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutBtn = "#checkout";
  }

  async clickCheckout() {
    await this.page.waitForTimeout(1000);
    await this.page.click(this.checkoutBtn);
  }
}