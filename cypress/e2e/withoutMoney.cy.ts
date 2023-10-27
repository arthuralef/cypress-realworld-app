import login from "../pages/loginpage"
import home from "../pages/homePage"
import topBarMenu from "../pages/topBarMenuPage";

const loginPage = new login()
const homePage = new home()
const topBarMenuPage = new topBarMenu()


describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
        loginPage.checkpage()

        loginPage.loginWithAnyUser('teste123', 'teste123')

        //homePage.createBankAccount('NuBank', '123456789', '123456789')

        homePage.checkLoginArea()

        topBarMenuPage.transactionNew()

        homePage.withMoneySearch("Devon Becker")

        homePage.cashlessPayment("100.00", "shopping")
    });
});
