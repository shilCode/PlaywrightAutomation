class DashBoard{
    constructor(page){
        this.page = page;
        this.products = page.locator('div.card-body');
        this.productsText = page.locator('.card-body b');
        this.navigateToCart = page.locator('[routerlink="/dashboard/cart"]');
     

        
    }
    
    async findProduct(productName){
       
        const count = await this.products.count()
        for (let i = 0; i < count; ++i) {
            if (await this.products.locator('b').nth(i).textContent() === productName) {
                await this.products.nth(i).locator('.fa-shopping-cart').click()
                break;
    
            }
        }
     
        
    }

   




   
}

module.exports = {DashBoard}