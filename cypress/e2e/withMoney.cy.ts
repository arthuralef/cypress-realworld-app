import login from "../pages/loginpage"
import home from "../pages/homePage"
import topBarMenu from "../pages/topBarMenuPage"
import createAccount from "../pages/createAccountPage"

const loginPage = new login()
const homePage = new home()
const topBarMenuPage = new topBarMenu()
const createAccountPage = new createAccount()


describe('Login com sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {

        loginPage.checkpage()

        loginPage.loginWithAnyUser('LumeStack', 'test123')

        createAccountPage.createBankAccount('NuBank', '123456789', '123456789')

        homePage.checkUserArea()

        topBarMenuPage.transactionNew()

        homePage.withMoneySearch("Devon Becker")

        homePage.withMoneyPayment("100.00", "shopping")
    });
});