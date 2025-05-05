
export class AddToCart {
    AddCartWebLocator = {

        loginButton: '.list-group-item',
        email: '#input-email',
        Lpassword: "#input-password",
        loginButton: "aside[id='column-right'] a:nth-child(1)",
        formLoginButton:'form > .btn',
        menuClick:'.nav > :nth-child(1) > .dropdown-toggle',
        submMenuClick:'.open > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > a',
        AddToCartButton:"[onclick=\"cart.add('41', '1');\"] > .fa",
        openCartPage:'#cart-total',
        viewCart:"[href='https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart'] > strong"
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
    ClickOnMenu(){
        cy.get(this.AddCartWebLocator.menuClick).click()
      //  cy.get(this.AddCartWebLocator.submMenuClick).click()
    }   

     
   ClickSubMenu(){
        cy.get(this.AddCartWebLocator.submMenuClick).click()
    }  
    
    addItemToCart(){  
        cy.get(this.AddCartWebLocator.AddToCartButton).click()

     }
     opencartPage(){
        cy.get(this.AddCartWebLocator.openCartPage).click()
        cy.get(this.AddCartWebLocator.viewCart).click()
     }
    }