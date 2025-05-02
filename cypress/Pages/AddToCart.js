
export class AddToCart {
    AddCartWebLocator = {

        loginButton: '.list-group-item',
        email: '#input-email',
        Lpassword: "#input-password",
        loginButton: "aside[id='column-right'] a:nth-child(1)",
        formLoginButton:'form > .btn'
    }
    openURl() {
        cy.visit(Cypress.env('URL')) // Visit the URL from the environment variable 
    }

    ClickOnloginButton() {
        cy.get(this.AddCartWebLocator.loginButton).click()
    }

    EnterEmail(email) {
        cy.get(this.AddCartWebLocator.email).type(email)
    }

    EnterPassword(pass) {
        cy.get(this.AddCartWebLocator.Lpassword).type(pass)
    }
    clickOnloginFromButton() {
        cy.get(this.AddCartWebLocator.formLoginButton).click()
    }


}