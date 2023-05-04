const {test, expect} = require('@playwright/test')

test('Register and Login', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('.text-reset').click()
    await page.locator('#firstName').fill('Mohat')
    await page.locator('#lastName').fill('shil')
    await page.locator('#userEmail').fill('2850542@gmail.com')
    await page.locator('#userMobile').fill('1234567891')
    await page.locator('.custom-select').selectOption('Engineer')
    await page.locator('[type="radio"]').nth(0).check()
    await page.locator('#userPassword').fill("Password121!")
    await page.locator('#confirmPassword').fill('Password121!')
    await page.locator('[type="checkbox"]').check()
    await page.locator('#login').click()
    await page.locator('.text-reset').click()
    await page.locator('#userEmail').fill('2850542@gmail.com')
    await page.locator('#userPassword').fill('Password121!')

    //race condition
    await Promise.all([
         page.waitForSelector('.card-body b'),
         page.locator('#login').click()
    ])
    
    
    const titles = await page.locator('.card-body b').allTextContents();
    console.log(titles)

})


test.only('E2E flow', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client/');
    await page.locator('#userEmail').fill('2850542@gmail.com')
    await page.locator('#userPassword').fill('Password121!')
    await page.locator('#login').click()
    const products = await page.locator("div.card-body")
    const productName = 'zara coat 3'
    
     await page.waitForLoadState('networkidle');


    const count = await products.count()
    for(let i=0; i < count; ++i){
        if(await products.nth(i).locator('b').textContent() === productName){
            await products.nth(i).locator('[class="fa fa-shopping-cart"]').click()
            break;
            
        }
    }


    await page.locator('[routerlink="/dashboard/cart"]').click()
    await page.waitForSelector('div li')
    const bool = await page.locator("h3:has-text('zara coat 3')").isVisible()
    expect(bool).toBeTruthy()

    await page.locator('[type="button"]').last().click()

    await page.locator('[class="input txt"]').first().fill('1111')
    await page.locator('[class="input txt"]').last().fill('mohat')
    await page.locator('[name="coupon"]').type('coupon1111')
    
    await page.locator('[placeholder="Select Country"]').type('ind',{delay:100})
  
    await page.locator('[class="ta-item list-group-item ng-star-inserted"]').nth(1).click()

    await page.locator('[class="btnn action__submit ng-star-inserted"]').click()
    await page.waitForSelector('h1')
   

    const productID = await page.locator('[class="ng-star-inserted"]').nth(2).textContent()

    console.log(productID)

    await page.locator('[routerlink*="/myorders"]').first().click()

    await page.locator('tbody').waitFor()

    const orderTable = await page.locator('tbody tr')



for(let i=0; i< await orderTable.count(); ++i){
   const orderIDRow = await orderTable.nth(i).locator('th').textContent()

    if(productID.includes(orderIDRow)){
        await orderTable.nth(i).locator('button').first().click()
        break;
    }
}
 const orderSummary = await page.locator('[class="col-text -main"]').textContent()
 await expect(productID.includes(orderSummary)).toBeTruthy()

})
