describe('Ninjatests', () => {

  it('Verify the home page items', () => {
    cy.visit("http://tutorialsninja.com/demo/index.php?route=common/home")
    cy.url().should('include', '/home')
    cy.get("#logo>h1").contains('Your Store').should('be.visible')
    cy.get("#search").should('be.visible')
})
})
