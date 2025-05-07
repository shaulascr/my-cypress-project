class loginPage{
    ///bisa bikin beberapa method
    visit(){
        cy.visit("/");
    }
    fillUsername(username){
        cy.get("#user-name").clear().type(username);
    }
    fillPassword(password){
        cy.get("#password").clear().type(password);
    }
    clickLogin() {
        cy.get('[data-test="login-button"]').click();
    }

    loginUser(userData){
        this.visit();
        this.fillUsername(userData.username);
        this.fillPassword(userData.password);
        this.clickLogin();
    }

    verifyLoginSuccess() {
        cy.url().should("include", "/inventory.html");
        cy.get(".app_logo").should("have.text", "Swag Labs");
    }

    verifyLoginFailed(){
        cy.url().should("include", "/");
        cy.get('[data-test="error"]')
        .should("be.visible")
        .and("contain", "Epic sadface: Sorry, this user has been locked out.");
    }
    verifyLoginInvalid(){
        cy.url().should("include", "/");
        //jgn pake yang button
        // cy.get('[data-test="error-button"]')
        cy.get('[data-test="error"]')
        .should("be.visible")
        .and("contain", "Epic sadface: Username and password do not match any user in this service");
    }
}

export default new loginPage()