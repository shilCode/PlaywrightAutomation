const { test, expect } = require('@playwright/test')

const { LoginPage } = require('../PO/LoginPage')
const { DashBoard } = require('../PO/DashboardPage')
const { AddtoCart } = require('../PO/AddtoCart')
const { CheckoutPage } = require('../PO/CheckoutPage')
const { MyordersPage } = require('../PO/MyordersPage')

test.only('Register and Login', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const dashboard = new DashBoard(page);
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

    //race condition
    await Promise.all([
        dashboard.waitForProducts,
        loginPage.logInButton.click()
    ])


    const titles = await dashboard.products.allTextContents();
    console.log(titles)

})


test('E2E flow', async ({ page }) => {

    const productName = 'zara coat 3'
    const loginPage = new LoginPage(page);
    const dashboard = new DashBoard(page);
    const addtoCart = new AddtoCart(page);
    const checkoutPage = new CheckoutPage(page);
    const myordersPage = new MyordersPage(page,checkoutPage);

    await loginPage.validLogin()
    await dashboard.findProduct(productName)
    await dashboard.navigateToCart.click()
    await addtoCart.waitforCartList()
    const bool = await addtoCart.productVisible.isVisible()
    expect(bool).toBeTruthy()
    await addtoCart.checkOutButton.last().click()
    await page.pause()
    await checkoutPage.cvvCode.first().fill('1111')
    await checkoutPage.fillName.last().fill('mohat')
    await checkoutPage.coupon.type('coupon1111')
    await checkoutPage.country.type('ind', { delay: 100 })
    await checkoutPage.countrySelect.nth(1).click()
    await checkoutPage.submitButton.click()
    await checkoutPage.navigatetoMyOrders()

    const productID = await checkoutPage.productId.nth(2).textContent()
    //print product ID
    console.log(productID)


    await myordersPage.myOrders.first().click()
    await myordersPage.alltheOrders.waitFor()

    

    await myordersPage.findMyorder()
    await myordersPage.orderSummary.textContent()
    expect(productID.includes(orderSummary)).toBeTruthy()

})
