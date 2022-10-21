require('cypress-xpath')
const baseUrl = "https://qainterview.pythonanywhere.com/";
describe("The nine cases for calculating factorial, without test case 4", function () {
    before(() => {
        cy.visit(baseUrl)
    });
    it("The nine cases for calculating factorial, without test case 4", function () {
        cy.xpath("//button[contains(@id,'getFactorial')]").click();
        cy.xpath("//p[contains(@id,'resultDiv')]").should('have.text', 'Please enter an integer')
        cy.wait(1000)
        cy.xpath("//input[contains(@id,'number')]").type("Test");
        cy.xpath("//button[contains(@id,'getFactorial')]").click();
        cy.xpath("//p[contains(@id,'resultDiv')]").should('have.text', 'Please enter an integer')
        cy.wait(1000)
        cy.xpath("//input[contains(@id,'number')]").clear().type("@");
        cy.xpath("//button[contains(@id,'getFactorial')]").click();
        cy.xpath("//p[contains(@id,'resultDiv')]").should('have.text', 'Please enter an integer')
        cy.wait(1000)
        cy.xpath("//input[contains(@id,'number')]").clear().type("1test@");
        cy.xpath("//button[contains(@id,'getFactorial')]").click();
        cy.xpath("//p[contains(@id,'resultDiv')]").should('have.text', 'Please enter an integer')
        cy.wait(1000)
        cy.xpath("//input[contains(@id,'number')]").clear().type("- 2");
        cy.xpath("//button[contains(@id,'getFactorial')]").click();
        cy.xpath("//p[contains(@id,'resultDiv')]").should('have.text', 'Please enter an integer')
        cy.wait(1000)
        cy.xpath("//input[contains(@id,'number')]").clear().type("- 0");
        cy.xpath("//button[contains(@id,'getFactorial')]").click();
        cy.xpath("//p[contains(@id,'resultDiv')]").should('have.text', 'Please enter an integer')
        cy.wait(1000)
        cy.xpath("//input[contains(@id,'number')]").clear().type("-0");
        cy.xpath("//button[contains(@id,'getFactorial')]").click();
        cy.xpath("//p[contains(@id,'resultDiv')]").should('have.text', 'The factorial of -0 is: 1')
        cy.wait(1000)
        cy.xpath("//input[contains(@id,'number')]").clear().type("0");
        cy.xpath("//button[contains(@id,'getFactorial')]").click();
        cy.xpath("//p[contains(@id,'resultDiv')]").should('have.text', 'The factorial of 0 is: 1')
        cy.wait(1000)
        cy.xpath("//input[contains(@id,'number')]").clear().type("2");
        cy.xpath("//button[contains(@id,'getFactorial')]").click();
        cy.xpath("//p[contains(@id,'resultDiv')]").should('have.text', 'The factorial of 2 is: 2')
    });
});