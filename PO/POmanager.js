const { LoginPage } = require('../PO/LoginPage')
const { DashBoard } = require('../PO/DashboardPage')
const { AddtoCart } = require('../PO/AddtoCart')
const { CheckoutPage } = require('../PO/CheckoutPage')
const { MyordersPage } = require('../PO/MyordersPage')

class POmanager{
    constructor(page){
        this.page = page;
        this.loginPage = new LoginPage(this.page)
        this.dashBoard = new DashBoard(this.page)
        this.addtoCart = new AddtoCart(this.page)
        this.checkoutPage = new CheckoutPage(this.page)
        this.myordersPage = new MyordersPage(this.page)

    }
    getLoginPage(){
        return this.loginPage;
    }
    getdashBoardPage(){
        return this.dashBoard;
    }
    getaddtoCart(){
        return this.addtoCart;
    }
    getcheckoutPage(){
        return this.checkoutPage;
    }
    getmyordersPage(){
        return this.myordersPage;
    }
}

module.exports = {POmanager}