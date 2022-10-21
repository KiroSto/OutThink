require('cypress-xpath')
const baseUrl = "https://qainterview.pythonanywhere.com/";
describe("Terms and Conditions hyperlink", function () {
    before(() => {
        cy.visit(baseUrl)
    });
    it("Terms and Conditions hyperlink", function () {
        cy.wait(1000)
        cy.xpath("//a[@href='/privacy'][contains(.,'Terms and Conditions')]").click();
        cy.url().should('include', 'privacy')
    });
});