class createAccount {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            passwordRequiredField: "#confirmPassword-helper-text",
            signUpBottonField: "[type='submit']",
            dashboardGrid: ".makeStyles-paper-16",
        }

        return selectors
    }

    checkpage() {
        cy.location('pathname').should('equal', '/signup')
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }

    createNewAccount(firstname, lastname, username, password, confirmPassword) {
        cy.get(this.selectorsList().firstNameField).type(firstname)
        cy.get(this.selectorsList().lastNameField).type(lastname)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
        cy.get(this.selectorsList().signUpBottonField).click()
    }

    createNewAccountFail(firstname, lastname, username, password, confirmPassword) {
        cy.get(this.selectorsList().firstNameField).type(firstname)
        cy.get(this.selectorsList().lastNameField).type(lastname)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
    }

    passwordRequired() {
        cy.get(this.selectorsList().passwordRequiredField).should('be.visible')
    }

}

export default createAccount