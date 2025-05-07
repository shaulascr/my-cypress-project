require('cypress-xpath');
import loginPage from "../../pages/loginPage";
import inventoryPage from "../../pages/inventoryPage";
import cartPage from "../../pages/cartPage";
describe('e2e test saucedemo', function(){
    this.beforeEach(()=> {
        cy.fixture('loginData').as('data');
        cy.fixture('productData').as('products');
    })
    it('login success with valid data 1', function(){
        //login dgn valid data
        loginPage.visit()
        //call username & password first
        loginPage.fillUsername(this.data.validUser.username);
        loginPage.fillPassword(this.data.validUser.password);
        loginPage.clickLogin()
        loginPage.verifyLoginSuccess()
        
    });
    it('login success with valid data 2', function(){
        //login dgn valid data
        loginPage.loginUser(this.data.validUser);
        loginPage.verifyLoginSuccess();
        
    });
    it('lagin failed locked out user', function(){
        loginPage.loginUser(this.data.lockedOutUser)
        loginPage.verifyLoginFailed()
    });
    it('login failed locked invalid user', function(){
        loginPage.loginUser(this.data.lockedOutUser)
        // loginPage.verifyLoginFailed()
    });
    it('add to cart', function(){
        //login dgn valid data
        //not using fillUsername and fillPassword
        loginPage.loginUser(this.data.validUser);

        //tambahkan verifikasi expected
        inventoryPage.verifyInventoryPage();

        //add 2 product
        inventoryPage.addProductToCart(this.products.productNames);

        inventoryPage.verifyCartItemCount(this.products.productNames.length);
    });
    it('check cart', function(){
        loginPage.loginUser(this.data.validUser);
        inventoryPage.verifyInventoryPage();
        //add 2 product
        inventoryPage.addProductToCart(this.products.productNames);

        inventoryPage.clickCart();
        cartPage.verifycartPage();
    });
    
});