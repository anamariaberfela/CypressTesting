describe('Cypress Tags - Only', ()=>{
  
    it('Cypress Test Case 1', () => {
        cy.log('I"m in Test Case 1');
    })

    it('Cypress Test Case 2', () => {
        cy.log('I"m in Test Case 2');
    })

    it.only('Cypress Test Case 3', () => {
        cy.log('I"m only in Test Case 3');
    })
    
})