const { test, expect } = require('@playwright/test')
const {POmanager} = require('../PO/POmanager')

test('Register and Login', async ({ page }) => {
    const poManager = new POmanager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo()
    await loginPage.register.click()
    await loginPage.userName.fill('Mohat')
    await loginPage.lastName.fill('shil')
    await loginPage.userEmail.fill('2850542@gmail.com')
    await loginPage.userMobile.fill('1234567891')
    await loginPage.dropDown.selectOption('Engineer')
    await loginPage.radio.nth(0).check()
    await loginPage.password.fill("Password121!")
    await loginPage.confirmPassword.fill('Password121!')
    await loginPage.checkBox.check()
    await loginPage.logInButton.click()
    await loginPage.register.click()
    await loginPage.userEmail.fill('2850542@gmail.com')
    await loginPage.password.fill('Password121!')
    await loginPage.waitforDashboardPageLoad()
    await loginPage.printProductsinConsole()



})


test('E2E flow', async ({ page }) => {

    const productName = 'zara coat 3'
    const poManager = new POmanager(page);
    const loginPage = poManager.getLoginPage();
    const dashboard = poManager.getdashBoardPage();
    const addtoCart = poManager.getaddtoCart();
    const checkoutPage = poManager.getcheckoutPage();
    const myordersPage = poManager.getmyordersPage();

    await loginPage.validLogin()
    await dashboard.findProduct(productName)
    await dashboard.navigateToCart.click()
    await addtoCart.waitforCartList()
    const bool = await addtoCart.productVisible.isVisible()
    expect(bool).toBeTruthy()
    await addtoCart.checkOutButton.last().click()
    await checkoutPage.cvvCode.first().fill('1111')
    await checkoutPage.fillName.last().fill('mohat')
    await checkoutPage.coupon.type('coupon1111')
    await checkoutPage.country.type('ind', { delay: 100 })
    await checkoutPage.countrySelect.nth(1).click()
    await checkoutPage.submitButton.click()
    await checkoutPage.navigatetoMyOrders()
    const productID = await checkoutPage.productId.nth(2).textContent()
    console.log(productID)
    await myordersPage.myOrders.first().click()
    await myordersPage.alltheOrders.waitFor()
    await myordersPage.findMyorder(productID)
    expect(myordersPage.orderSummary).toBeTruthy()

})
