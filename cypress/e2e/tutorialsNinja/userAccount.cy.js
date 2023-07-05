import {email, password} from '../../fixtures/tutorialsNinjaUser.json'

describe("userAccount - Custom Command", () => {

    beforeEach('User should successfully login starting from homepage', () => {
        cy.loginAdmin(email,password);
        cy.visit("https://tutorialsninja.com/demo/index.php?route=account/account")
    })

    it('Logged in user should have access to Account Information page', () =>{
      cy.get("#content > ul:nth-child(2) > li:nth-child(1) > a").click()
    })

    it('Logged in user should have access to edit its information', () =>{
        cy.get("#content > ul:nth-child(2) > li:nth-child(1) > a").click()
        cy.visit("https://tutorialsninja.com/demo/index.php?route=account/edit")
  
        cy.getInputByName("firstname").clear().type("I changed my firstname")
        cy.getInputByName("lastname").clear().type("I changed my lastname")
        cy.getInputByName("telephone").clear().type("0755258152")
        cy.get("input[value='Continue']").click()
        cy.get("div.alert-success").should("be.visible")
    })

    it('Logged in user should have access to Subscribe Information', () => {
        cy.get("#content > ul:nth-child(8) > li > a").click()
        cy.url().should('include', '/newsletter');
    })

    it('Logged in user should have access to Account page and can Logout', () => {
        cy.get("#cart-total").should('be.visible')
        cy.get('.list-group-item:last-child').click()
        cy.get('.btn-primary').click({ multiple: true })
        cy.url().should('include', '/home');
    })
   
})