class cartPage{
    verifycartPage(){
        cy.url().should("include", "/cart.html");
        cy.get('[data-test="title"]').should("have.text", "Your Cart");
    }
}

export default new cartPage();