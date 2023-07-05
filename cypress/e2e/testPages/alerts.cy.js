describe('Alert Examples', () =>{

    beforeEach(() => {
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
      })

    it('Verifies window alert box when button is clicked', () =>{
        cy.get('#alertexamples').click();
        cy.on('window:alert', (t)=>{
            expect(t).to.contains('I am an alert box!');
        })
    })

    it('Verifies window confirm box when button is clicked', () =>{
        cy.get('#confirmexample').click();
        cy.on('window:confirm', (m)=>{
            expect(m).to.contains('I am a confirm alert');
        })
        cy.get("#confirmreturn").should('have.text', 'true')
        cy.get('#confirmexplanation').should('have.text', 'You clicked OK, confirm returned true.')
    })

    it('Verifies confirmation message when window confirm box alert is cancelled', () =>{
        cy.get('#confirmexample').click();
        // cy.on('window:confirm', (m)=>{
        //     expect(m).to.contains('I am a confirm alert');
        // })
        cy.on('window:confirm', () => false); 
        cy.get("#confirmreturn").should('have.text', 'false')
        cy.get('#confirmexplanation').should('have.text', 'You clicked Cancel, confirm returned false.')
    })

})