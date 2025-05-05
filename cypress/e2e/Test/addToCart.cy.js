import { AddToCart } from '../../Pages/AddToCart';

const addcartObj = new AddToCart()
let registerData;
describe('test Automation', {
  viewportHeight: 1080,
  viewportWidth: 1920,
},
  () => {
    beforeEach(() => {
      // Load fixture correctly
      cy.fixture('registerData').then((data) => {
        registerData = data;
      });
    });

    it('addToCart Flow', () => {
      //cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')  
      addcartObj.openURl()
      cy.wait(2000)
      addcartObj.ClickOnloginButton()
      addcartObj.EnterEmail(registerData.email)
      addcartObj.EnterPassword(registerData.Epassword)
      addcartObj.clickOnloginFromButton()
      addcartObj.ClickOnMenu()
      addcartObj.ClickSubMenu()
      addcartObj.addItemToCart()
      addcartObj.opencartPage()
      cy.wait(2000)

    })




  })


