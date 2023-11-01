import login from "../pages/loginpage"
import home from "../pages/homePage"
import createAccount from "../pages/createAccountPage"

const loginPage = new login()
const homePage = new home()
const createAccountPage = new createAccount()


describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {

    loginPage.checkpage()

    loginPage.loginWithAnyUser('LumeStack', 'test123')

    createAccountPage.createBankAccount('NuBank', '123456789', '123456789')

    homePage.checkUserArea()
  });
});