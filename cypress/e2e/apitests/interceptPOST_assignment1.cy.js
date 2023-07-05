describe("interceptPOST_assignment1.cy.js" , () => {

    it("validate status code for the Post Comment request" , () =>{

        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.get('.network-post').click()
        cy.intercept('POST', '**/comments').as('postComment')
        cy.wait('@postComment').its('response.statusCode').should('eq', 201)
    });

    it("validate comment visibility on the page" , () =>{

        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.get('.network-post').click()
        cy.intercept('POST', '**/comments').as('postComment')
      
        cy.get('.network-post-comment').contains('POST successful!').should('be.visible')
    })
})