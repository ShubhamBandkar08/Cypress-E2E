import { registerPage } from '../../Pages/registerPage.js'

const registerObj = new registerPage()
import  regiterData  from '../../fixtures/registerData.json'


describe('test Automation', () => {

    it('register Flow', () => {
        registerObj.openURl()
        registerObj.enterFirstName(regiterData.fName)
        registerObj.enterLastName(regiterData.lName)
        registerObj.enterEmail(regiterData.email)
        registerObj.enterTelephone(regiterData.phone)
        registerObj.enterPassword(regiterData.Epassword)
        registerObj.enterPasswordConfirm(regiterData.EconfirmPass)
        registerObj.clickPolicyCheckbox()
        registerObj.clickContinue()
        cy.wait(2000)


    })




})