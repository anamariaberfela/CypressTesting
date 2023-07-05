describe('Radio Button', () =>{

    it('Marks each radio button', () => {
        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
        cy.get("form.radio-buttons>input[name='color']").should('be.visible').and('not.be.checked')
        cy.get("form.radio-buttons>input[value='green']").should('be.visible').check().should('be.checked')
        cy.get("form.radio-buttons>input[value='blue']").should('be.visible').check().should('be.checked')
        cy.get("form.radio-buttons>input[value='green']").should('not.be.checked')

        cy.get("form.radio-buttons>input[value='yellow']").should('be.visible').check().should('be.checked')
        cy.get("form.radio-buttons>input[value='blue']").should('not.be.checked')
        
        cy.get("form.radio-buttons>input[value='orange']").should('be.visible').check().should('be.checked')
        cy.get("form.radio-buttons>input[value='yellow']").should('not.be.checked')

        cy.get("form.radio-buttons>input[value='purple']").should('be.visible').check().should('be.checked')
        cy.get("form.radio-buttons>input[value='orange']").should('not.be.checked')
    })

    it('Verifies state of radio buttons', () => {
        cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html") 
        cy.get("form.radio-buttons>input[value='lettuce']").should('be.visible').and('not.be.checked')
        cy.get("form.radio-buttons>input[value='cabbage']").should('be.disabled')
        cy.get("form.radio-buttons>input[value='pumpkin']").should('be.visible').and('be.checked')

        cy.get("form.radio-buttons>input[value='lettuce']").check().should('be.checked')
        cy.get("form.radio-buttons>input[value='pumpkin']").should('not.be.checked')
        cy.get("form.radio-buttons>input[value='cabbage']").should('be.disabled')
    })
})