describe('Cypress Tags - Skip', ()=>{
  
    it('Cypress Test Case 1', () => {
        cy.log('I"m in Test Case 1');
    })

    it('Cypress Test Case 2', () => {
        cy.log('I"m in Test Case 2');
    })

    it('Cypress Test Case 3', () => {
        cy.log('I"m only in Test Case 2');
    })

    it.skip('Cypress Test Case 4', () => {
        cy.log('I"m in skip Test Case 4');
    })
    
})