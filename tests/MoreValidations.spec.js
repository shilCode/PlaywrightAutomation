const {test} = require('@playwright/test')

test('Popup validations', async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    

    //dialog
    page.on('dialog',dialog=>dialog.accept())
    await page.locator('#confirmbtn').click()
    //hover

    await page.locator('#mousehover').hover()

    await page.pause()
})