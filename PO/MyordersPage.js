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

    async findMyorder(productId){
        for (let i = 0; i < await this.orderTable.count(); ++i) {
            const orderIDRow = await this.orderTable.nth(i).locator('th').textContent()
    
            if (productId.includes(orderIDRow)) {
                await this.orderTable.nth(i).locator('button').first().click()
                break;
            }
        }
    }

    async orderSummary(productID){
        const orderSummary = await page.locator('[class="col-text -main"]').textContent()
        await expect(productID.includes(orderSummary)).toBeTruthy()
    }



}

module.exports = {MyordersPage,CheckoutPage}