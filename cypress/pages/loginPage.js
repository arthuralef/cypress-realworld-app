class login {

    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passawordField: "[name='password']",
            checkBox: "[name='password']",
            signInBotton: "[type='submit']",
            newAccountBotton: "[href='/signup']",
            loginFailAlert: "[role='alert']",

        }

        return selectors
    }

    checkpage() {
        cy.visit('/signin')
    }

    checkLoginArea() {
        cy.get(this.selectorsList().signInBotton).should('be.visible')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passawordField).type(password)
        cy.get(this.selectorsList().checkBox).click()
        cy.get(this.selectorsList().signInBotton).click()
    }

    loginWithAnyUserFail(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passawordField).type(password)
        cy.get(this.selectorsList().checkBox).click()
        cy.get(this.selectorsList().signInBotton).click()
    }

    createAccount() {
        cy.get(this.selectorsList().newAccountBotton).click()
    }

    loginFail() {
        cy.get(this.selectorsList().loginFailAlert).should('be.visible')
    }


}

export default login