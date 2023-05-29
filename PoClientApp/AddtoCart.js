class AddtoCart{

    constructor(page){
        this.page=page;
        this.checkOutButton = page.locator('[type="button"]')
        this.productVisible = page.locator("h3:has-text('zara coat 3')")


    }


  async waitforCartList(){
    await this.page.waitForSelector('div li')
  }



}

module.exports = {AddtoCart}