const { test, expect } = require('@playwright/test');

test('navigate to rahuls page', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); 
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await page.locator("#username").fill('rahulshettyacademy')
    await page.locator("#password").fill('learning')
    await page.locator('[type="submit"]').click()

})

test('invalid login', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); 
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await page.locator("#username").fill('rahulshetty')
    await page.locator("#password").fill('learning')
    await page.locator('[type="submit"]').click()
    await expect(await page.locator('div.alert.alert-danger.col-md-12')).toContainText('Incorrect username/password')

})