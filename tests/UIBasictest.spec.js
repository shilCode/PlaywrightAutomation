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

test('UI controls and child window', async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');

    //lots of assertions and page handling need to be dealt with 

    const userName = page.locator('#username')
    const password = page.locator('#password')
    const terms = page.locator('#terms')

    await userName.fill('rahulshettyacademy ')
    await password.type('learning')
   await page.locator('span.checkmark').last().click()
   await expect(page.locator('.modal-body p')).toContainText('You will be limited to only fewer functionalities of the app. Proceed?')
   await page.locator('#okayBtn').click()
   await page.locator('select.form-control').selectOption('teach')
   await terms.check()
   await  expect(terms).toBeChecked()
   expect(await terms.uncheck()).toBeFalsy()

   const documentLink = await page.locator('[href*="documents-request"]')
   await expect(documentLink).toHaveAttribute("class","blinkingText")
   const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    documentLink.click()
   ])
   await newPage.waitForSelector('div.inner-box')
await expect(await newPage.locator('div.inner-box h1')).toHaveText('Documents request')

// text splitter code here

const text = await newPage.locator(".red").textContent();
const arrayText = text.split("@")
const domain = arrayText[1].split(" ")[0]
console.log(domain);
await page.locator("#username").type(domain);
console.log(await page.locator("#username").textContent());
 



})
