import login from "../pages/loginpage"
import createAccount from "../pages/createAccountPage"
import home from "../pages/homePage"
import topBarMenu from "../pages/topBarMenuPage"

const loginPage = new login()
const createAccountPage = new createAccount()
const homePage = new home()
const topBarMenuPage = new topBarMenu()

describe('Login com sucesso', () => {
    it('Deve fazer login com um usuário válido', () => {

        loginPage.checkpage()

        loginPage.loginWithAnyUser('LumeStack', 'test123')

        //homePage.createBankAccount('NuBank', '123456789', '123456789')

        homePage.checkLoginArea()
    });
});

describe('Tentar fazer login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {

        loginPage.checkpage()

        loginPage.checkLoginArea()

        loginPage.loginWithAnyUserFail('Lumestack2', 'teste321')

        loginPage.loginFail()

        loginPage.checkLoginArea()
    });
});

describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {

        loginPage.checkpage()

        loginPage.checkLoginArea()

        loginPage.createAccount()

        createAccountPage.checkpage()

        createAccountPage.createNewAccount('Arthur', 'Alef', 'LumeStack', 'test123', 'test123')

        loginPage.checkLoginArea()

    });
});

describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {

        loginPage.checkpage()

        loginPage.checkLoginArea()

        loginPage.createAccount()

        createAccountPage.checkpage()

        createAccountPage.createNewAccountFail('Arthur', 'Alef', 'LumeStack', 'test123', 'test321')

        createAccountPage.passwordRequired()

    });
});

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

describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {

        loginPage.checkpage()

        loginPage.loginWithAnyUser('LumeStack', 'test123')

        homePage.checkLoginArea()

        topBarMenuPage.optionsMenuMine()

        homePage.transactionHistory()

    });
});
