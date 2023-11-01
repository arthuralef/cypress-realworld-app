import login from "../pages/loginpage"

const loginPage = new login()

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {

    loginPage.checkpage()

    loginPage.checkLoginArea()

    loginPage.loginWithAnyUserFail('Lumestack2', 'teste321')

    loginPage.loginFail()

    loginPage.checkLoginArea()
  });
});