import login from "../pages/loginpage"
import createAccount from "../pages/createAccountPage"
import home from "../pages/homePage"
import menu from "../pages/menuPage"

const loginPage = new login()
const createAccountPage = new createAccount()
const homePage = new home()
const menuPage = new menu()

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {

    loginPage.checkpage()

    loginPage.checkLoginArea()

    loginPage.createAccount()

    createAccountPage.checkpage()

    createAccountPage.createNewAccount('Arthur', 'Alef', 'LumeStack', 'test123', 'test123')

    loginPage.checkLoginArea()

    loginPage.loginWithAnyUser('LumeStack', 'test123')

    createAccountPage.createBankAccount('NuBank', '123456789', '123456789')

    homePage.checkUserArea()

    menuPage.logout()

    loginPage.checkLoginArea()

  });
});