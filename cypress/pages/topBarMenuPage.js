class topBarMenu {

    selectorsList() {
        const selectors = {
            transactionNewBotton: "[href='/transaction/new']",
            optionsMenuBotton: "[role='tab']",

        }
        return selectors
    }

    transactionNew() {
        cy.get(this.selectorsList().transactionNewBotton).eq(0).click()
    }

    optionsMenuEveryone() {
        cy.get(this.selectorsList().optionsMenuBotton).eq(0).click()
    }

    optionsMenuFriends() {
        cy.get(this.selectorsList().optionsMenuBotton).eq(1).click()
    }

    optionsMenuMine() {
        cy.get(this.selectorsList().optionsMenuBotton).eq(2).click()
    }


}

export default topBarMenu