const { test, expect } = require('@playwright/test');

test('navigate to page', async({page})=>{

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

test('first child or nth child', async({page})=>{

    const userName = page.locator("#username")
    const password = page.locator("#password")
    const signIn = page.locator('[type="submit"]')
    const cardTitle = page.locator('.card-body a')


    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); 
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
    await userName.fill('rahulshettyacademy')
    await password.fill('learning')
    await signIn.click()

    //using nth and first last child
    console.log(await cardTitle.nth(0).textContent())
    console.log(await cardTitle.last().textContent())

    
    expect(await cardTitle.nth(0).textContent()).toContain('iphone X')
    expect(await cardTitle.last().textContent()).toContain('Blackberry')

    // grabbing all titles from array
    //use of allTextContents 
    const allTitles = await cardTitle.allTextContents();
    console.log(allTitles)

})