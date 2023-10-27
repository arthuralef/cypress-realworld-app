import login from "../pages/loginpage"
import home from "../pages/homePage"
import topBarMenu from "../pages/topBarMenuPage"

const loginPage = new login()
const homePage = new home()
const topBarMenuPage = new topBarMenu()


describe('Login com sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {

        loginPage.checkpage()

        loginPage.loginWithAnyUser('LumeStack', 'test123')

        //homePage.createBankAccount('NuBank', '123456789', '123456789')

        homePage.checkLoginArea()

        topBarMenuPage.transactionNew()

        homePage.withMoneySearch("Devon Becker")

        homePage.withMoneyPayment("100.00", "shopping")
    });
});