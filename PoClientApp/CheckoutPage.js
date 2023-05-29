class CheckoutPage{

    constructor(page){
        this.page = page;
        
        this.cvvCode = page.locator('[class="input txt"]');
        this.fillName = page.locator('[class="input txt"]')
        this.coupon = page.locator('[name="coupon"]')
        this.country = page.locator('[placeholder="Select Country"]')
        this.countrySelect = page.locator('[class="ta-item list-group-item ng-star-inserted"]')
        this.submitButton = page.locator('[class="btnn action__submit ng-star-inserted"]')
        this.productId = page.locator('[class="ng-star-inserted"]')
    }

    async navigatetoMyOrders(){
        await this.page.waitForSelector('h1')
      
    }




}

module.exports = {CheckoutPage}