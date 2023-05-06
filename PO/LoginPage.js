class LoginPage{
    constructor(page){
        this.page=page;
        this.register = page.locator('.text-reset')
        this.userName = page.locator('#firstName')
        this.lastName = page.locator('#lastName')
        this.userEmail = page.locator('#userEmail')
        this.userMobile = page.locator('#userMobile')
        this.dropDown = page.locator('.custom-select')
        this.radio = page.locator('[type="radio"]')
        this.password = page.locator('#userPassword')
        this.confirmPassword = page.locator('#confirmPassword')
        this.checkBox = page.locator('[type="checkbox"]')
        this.logInButton = page.locator('#login')
       

    }
   async goTo(){
        await this.page.goto('https://rahulshettyacademy.com/client/')
    }

    async validLogin(){
        await this.goTo()
        await this.userEmail.fill('2850542@gmail.com')
        await this.password.fill('Password121!')
        await this.logInButton.click()
        await this.page.waitForLoadState('networkidle');
    }

    async waitforDashboardPageLoad(){
        await Promise.all([
            this.page.waitForSelector('.card-body b'),
            this.page.locator('#login').click()
       ])
    }

    async printProductsinConsole(){
        const titles = await this.page.locator('.card-body b').allTextContents();
        console.log(titles)
    }

   
}

module.exports = {LoginPage}