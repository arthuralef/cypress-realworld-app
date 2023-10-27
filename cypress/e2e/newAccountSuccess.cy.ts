import login from "../pages/loginpage"
import createAccount from "../pages/createAccountPage"

const loginPage = new login()
const createAccountPage = new createAccount()

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