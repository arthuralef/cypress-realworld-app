import login from "../pages/loginpage"
import home from "../pages/homePage"

const loginPage = new login()
const homePage = new home()


describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
        loginPage.checkpage()

        loginPage.loginWithAnyUser('teste123', 'teste123')

        //homePage.createBankAccount('NuBank', '123456789', '123456789')

        homePage.withMoneySearch("Devon Becker")

        homePage.withMoneyPayment("100.00", "shopping")
    });
});
