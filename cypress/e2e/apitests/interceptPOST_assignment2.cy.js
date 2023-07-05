describe("interceptPOST_assignment2.cy.js" , () => {

    it("Makes assertions on the response body" , () =>{

        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.intercept({
            method:'POST', 
            url:'**/comments'})
            .as('postComment')
        cy.get('.network-post').click()
        cy.wait('@postComment').its('response.statusCode').should('eq', 201)
        
        cy.get('@postComment').then((res) => {
            const bodyResponse = res.response.body;

            expect(bodyResponse).to.have.property('id', 501)
            expect(bodyResponse).to.have.property('name', 'Using POST in cy.intercept()')
            expect(bodyResponse).to.have.property('email',"hello@cypress.io")
            expect(bodyResponse).to.have.property('body', "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE")
        })
    })

    it("Makes assertions on the response body - stubbed response" , () =>{

        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.intercept('POST', '**/comments', {fixture: 'POSTcomment.json'}).as('postComment')
        cy.get('.network-post').click()

        cy.get('.network-post-comment').contains('POST successful!').should('be.visible')

        cy.get('@postComment').then((res) => {
            const bodyResponse = res.response.body;
            expect(bodyResponse).to.have.property('id', 2)
            expect(bodyResponse).to.have.property('name', 'Using POST stubbed')
            expect(bodyResponse).to.have.property('email',"examplestubb@cypress.io")
            expect(bodyResponse).to.have.property('body', "Makes assertions on the response body - stubbed response")
        })
    })
})