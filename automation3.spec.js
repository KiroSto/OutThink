require('cypress-xpath')
const baseUrl = "https://qainterview.pythonanywhere.com/";
describe("Privacy hyperlink", function () {
    before(() => {
        cy.visit(baseUrl)
    });
    it("Privacy hyperlink", function () {
        cy.wait(1000)
        cy.xpath("//a[@href='/terms'][contains(.,'Privacy')]").click();
        cy.url().should('include', 'terms')
    });
});