export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.sortDropdown = ".product_sort_container";
    this.addToCartButtons = ".inventory_item button";
    this.cartIcon = ".shopping_cart_link";
  }

  async sortLowToHigh() {
    await this.page.selectOption(this.sortDropdown, "lohi");
  }

  async addFirstThreeProducts() {
    const items = await this.page.$$(this.addToCartButtons);
    for (let i = 0; i < 3; i++) {
      await this.page.waitForTimeout(1000);
      await items[i].click();
    }
  }

  async goToCart() {
    await this.page.waitForTimeout(1000);
    await this.page.click(this.cartIcon);
  }
}