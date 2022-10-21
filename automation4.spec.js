require('cypress-xpath')
const baseUrl = "https://qainterview.pythonanywhere.com/";
describe("Qxf2 Sevices hyperlink", function () {
    before(() => {
        cy.visit(baseUrl)
    });
    it("Qxf2 Sevices hyperlink", function () {
        cy.wait(1000)
        cy.xpath("//a[contains(.,'Qxf2 Services')]").click();
        cy.url().should('include', 'https://qxf2.com/')
    });
});