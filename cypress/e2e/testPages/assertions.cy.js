describe( 'Assertions', () => {
    it('Should assert element attributes', () =>{
        cy.visit('https://testpages.herokuapp.com/styled/attributes-test.html')

        cy.get('p#domattributes').should('have.attr', 'custom-attrib', 'attrib in source at load')
        .and('have.attr', 'title', 'a paragraph to test attributes on')
        .and('have.attr', 'original-title', 'This used to be the title')

        cy.get('button.styled-click-button').should('be.enabled')

        cy.get('p#jsattributes').should('have.attr', 'nextid', 1);
        cy.get('button.styled-click-button').click()

        cy.get('p#jsattributes').should('have.attr', 'custom-1', 'value-1')
        .and('have.attr', 'nextid', 2);

        cy.get('button.styled-click-button').click()
        cy.get('p#jsattributes').should('have.attr', 'custom-1', 'value-1')
        .and('have.attr', 'custom-2', 'value-2')
        .and('have.attr', 'nextid', 3)
})

})
