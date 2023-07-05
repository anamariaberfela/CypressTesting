describe('Checkboxes', () => {

    beforeEach('CheckBoxes', () => {
        cy.visit('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
      })

    it('Checks/Unchecks 1 checkbox', () =>{
        cy.getInputByValue("option-1").should('be.visible').check().should('be.checked')
        cy.getInputByValue("option-1").uncheck().should('not.be.checked')
    })

    it('Checks/UnchecksOption 2 checkbox', () =>{
        cy.getInputByValue("option-2").first().should('be.visible').check().should('be.checked')
        cy.getInputByValue("option-2").first().uncheck().should('not.be.checked')
    })

    it('Checks/UnchecksOption 3 checkbox', () =>{
        cy.getInputByValue("option-3").should('be.visible').and('be.checked')
        cy.getInputByValue("option-3").uncheck().should('not.be.checked')
        cy.getInputByValue("option-3").check().should('be.checked')
    })

    it('Checks/UnchecksOption 4 checkbox', () =>{
        cy.getInputByValue("option-4").should('be.visible').check().should('be.checked')
        cy.getInputByValue("option-4").uncheck().should('not.be.checked')
    })
})