import login from "../pages/loginpage"
import home from "../pages/homePage"
import topBarMenu from "../pages/topBarMenuPage";

const loginPage = new login()
const homePage = new home()
const topBarMenuPage = new topBarMenu()


describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
      
        loginPage.checkpage()

        loginPage.loginWithAnyUser('LumeStack', 'test123')

        homePage.checkLoginArea()

        topBarMenuPage.optionsMenuMine()

        homePage.transactionHistory()

    });
  });
