const {test} = require('@playwright/test')

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
    await page.locator('#login').click()

    const addidas =  await page.locator('.card-body b').nth(0).textContent()
    
    console.log(addidas)

})

