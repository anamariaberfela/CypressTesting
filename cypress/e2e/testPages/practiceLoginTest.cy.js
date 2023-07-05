describe('Fixtures', () =>{

    it('FixturesPracticeTest', () => {
   
        cy.fixture("practicetest").then((data)=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')

        data.forEach((userdata) => {
                  
            cy.get("input[name='username']").type(userdata.username);
            cy.get("input[name='password']").type(userdata.password);
            cy.get("button#submit").click();

            if(userdata.username=='student' && userdata.password=='Password123')
            {
                cy.url().should('contain','practicetestautomation.com/logged-in-successfully/')
                cy.get('.post-title').should('have.text', userdata.expected)
                cy.get('.has-text-align-center').should('have.text', userdata.expected2)
                
                cy.get('.wp-block-button').should('be.visible')
                cy.get('.wp-block-button').click()
            }
            else{
                cy.get('#error').should('be.visible')
                cy.get('#error').should('have.text', userdata.expected)
            }
             })

         })
    })
})