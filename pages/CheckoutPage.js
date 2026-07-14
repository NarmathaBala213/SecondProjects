export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = "#first-name";
    this.lastName = "#last-name";
    this.postalCode = "#postal-code";
    this.continueBtn = "#continue";
    this.finishBtn = "#finish";
    this.backHomeBtn = "#back-to-products";
  }

  async fillDetails() {
    await this.page.fill(this.firstName, "Narmatha");
    await this.page.fill(this.lastName, "Test");
    await this.page.fill(this.postalCode, "600001");
  }

  async continue() {
    await this.page.waitForTimeout(1000);
    await this.page.click(this.continueBtn);
  }

  async finish() {
    await this.page.waitForTimeout(1000);
    await this.page.click(this.finishBtn);
  }

  async backHome() {
    await this.page.waitForTimeout(1000);
    await this.page.click(this.backHomeBtn);
  }
}