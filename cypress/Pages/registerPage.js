
 export class registerPage {
weblocator={

firstName: '#input-firstname',
lastName:'#input-lastname',
email:'#input-email',
telephone:'#input-telephone',
password:"#input-password",
passwordConfirm:"#input-confirm",
policyCheckbox:"[type='checkbox']",
continued:"[value='Continue']",


}

openURl(){

    cy.visit(Cypress.env('URL')) // Visit the URL from the environment variable

}

enterFirstName(firstN){
    cy.get(this.weblocator.firstName).type(firstN)   
}

enterLastName(lastName){
    cy.get(this.weblocator.lastName).type(lastName)   
}

enterEmail(email){
    cy.get(this.weblocator.email).type(email)       
}


enterTelephone(telephone){
    cy.get(this.weblocator.telephone).type(telephone)   
}


enterPassword(password){
    cy.get(this.weblocator.password).type(password)   
}

enterPasswordConfirm(passwordConfirm){
    cy.get(this.weblocator.passwordConfirm).type(passwordConfirm)       
}


clickPolicyCheckbox(){
    cy.get(this.weblocator.policyCheckbox).check()   
}

clickContinue(){
    cy.get(this.weblocator.continued).click()    
}













}