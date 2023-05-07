const { test, expect } = require('@playwright/test')

test('E2E test of Doctors appointment', async({page})=>{

    //write basic code - done
    //write assertions
    //implement PO
    await page.goto('https://katalon-demo-cura.herokuapp.com/')

    await page.locator('[id="btn-make-appointment"]').click()

    await page.locator('#txt-username').type('John Doe')
    await page.locator('#txt-password').type('ThisIsNotAPassword')
    await page.locator('[type="submit"]').click()

    const makeAppointmentText = page.locator('[class="col-sm-12 text-center"]')

    await expect(makeAppointmentText).toContainText('Make Appointment')

    await page.locator('[id="combo_facility"]').selectOption('Hongkong CURA Healthcare Center')
    await page.locator('[for="chk_hospotal_readmission"]').check()
    await page.locator('[type="radio"]').nth(1).click()
    await page.locator('#txt_visit_date').click()
    await page.locator('[id="txt_visit_date"]').type('21/02/2025')
    await page.locator('#txt_comment').type('this is a dummy appointment for a specific date')
    await page.locator('[type="submit"]').click()

    await page.locator('[class="fa fa-bars"]').click()
    //going to history page
    await page.locator('[href="history.php#history"]').click()
    

    
  
  
})