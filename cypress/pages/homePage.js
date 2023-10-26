class home {

    selectorsList() {
        const selectors = {
            dialogPaper: ".MuiDialog-paper",
            nextBotton: ".MuiButton-textPrimary",
            bankNameField: "[name='bankName']",
            routingNameField: "[name='routingNumber']",
            accountNumberField: "[name='accountNumber']",
            saveBotton: "[type='submit']",
            doneBotton: "[data-test='user-onboarding-next']"

        }

        return selectors
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
}

export default home



