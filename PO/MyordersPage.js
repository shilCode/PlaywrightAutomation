const {CheckoutPage} = require('./CheckoutPage')



class MyordersPage{
    constructor(page, checkoutPage){
        this.page = page;
        this.checkoutPage = checkoutPage;
        this.myOrders = page.locator('[routerlink*="/myorders"]');
        this.alltheOrders = page.locator('tbody')
        this.orderTable = page.locator('tbody tr')
        this.orderSummary = page.locator('[class="col-text -main"]')
        
    }

    async findMyorder(){
        for (let i = 0; i < await this.orderTable.count(); ++i) {
            const orderIDRow = await this.orderTable.nth(i).locator('th').textContent()
    
            if (this.checkoutPage.productId.includes(orderIDRow)) {
                await this.orderTable.nth(i).locator('button').first().click()
                break;
            }
        }
    }
}

module.exports = {MyordersPage,CheckoutPage}