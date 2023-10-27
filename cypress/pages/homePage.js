class home {

  selectorsList() {
    const selectors = {
      dialogPaper: ".MuiDialog-paper",
      nextBotton: ".MuiButton-textPrimary",
      bankNameField: "[name='bankName']",
      routingNameField: "[name='routingNumber']",
      accountNumberField: "[name='accountNumber']",
      homepage: ".MuiToolbar-root",
      saveBotton: "[type='submit']",
      doneBotton: "[data-test='user-onboarding-next']",
      searchField: "[name='q']",
      userList: "[data-test='users-list']",
      amountField: "[name='amount']",
      description: "[placeholder='Add a note']",
      payBotton: "[data-test='transaction-create-submit-payment']",
      alerteBarSuccess: "[data-test='alert-bar-success']",
      transactionHistoryField: ".MuiGrid-grid-xs-12",

    }

    return selectors
  }

  checkLoginArea() {
    cy.get(this.selectorsList().homepage).should('be.visible')
  }


  createBankAccount(bankName, routingName, accountNumber) {
    cy.get(this.selectorsList().dialogPaper).then(($element) => {
      if ($element.is(this.selectorsList().dialogPaper)) {
        cy.get(this.selectorsList().nextBotton).click()
        cy.get(this.selectorsList().bankNameField).type(bankName)
        cy.get(this.selectorsList().routingNameField).type(routingName)
        cy.get(this.selectorsList().accountNumberField).type(accountNumber)
        cy.get(this.selectorsList().saveBotton).click()
        cy.get(this.selectorsList().doneBotton).click()
      }

      else {
        cy.get('body').should('be.visible')
      }
    });

  }

  withMoneySearch(userSearch) {
    cy.get(this.selectorsList().searchField).type(userSearch, { force: true })
    cy.get(this.selectorsList().userList).eq(0).click()
  }

  withMoneyPayment(cashValue, addANote) {
    cy.get(this.selectorsList().amountField).type(cashValue)
    cy.get(this.selectorsList().description).type(addANote)
    cy.get(this.selectorsList().payBotton).click()
    cy.get(this.selectorsList().alerteBarSuccess).should('be.visible')
  }

  cashlessPayment(cashValue, addANote) {
    cy.get(this.selectorsList().amountField).type(cashValue)
    cy.get(this.selectorsList().description).type(addANote)
    cy.get(this.selectorsList().payBotton).click()
    cy.get(this.selectorsList().alerteBarSuccess).should('be.visible')
    cy.log('payment made without balance - error found')
  }

  transactionHistory() {
    cy.get(this.selectorsList().transactionHistoryField).eq(2).click({force: true})
  }
}

export default home



