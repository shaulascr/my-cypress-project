context("nyoba UI testing", async function () {
    describe("e2e testing", async function () {
        it("bisa masuk ke web", async function () {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            cy.xpath("//input[@placeholder='Username']").type("Admin");
            let password = cy.xpath("//input[@placeholder='Password']");
            password.type("admin123");
            
        });
    });
});