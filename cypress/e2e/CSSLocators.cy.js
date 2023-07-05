
describe('CSSLocators', () => {

    it("css locators", () => {
        cy.visit("http://automationpractice.pl/index.php")
        cy.get("#search_query_top").type("T-Shirts") 
        cy.get(".button-search").click()
        cy.get(".lighter").contains("T-Shirts")
        
    })
})