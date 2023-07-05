const{baseUrl, envTag} = Cypress.config()

describe('Conditional Testing', () => {

    it('Assertion for QA AND PROD Environment', () =>{

        cy.visit("");
        cy.url().should('eq', baseUrl)

        switch(true){

            case envTag ==="cypressQA":
                //cy.get('h1').contains('Kitchen Sink').should('be.visible')
                cy.get('.navbar').should('contain', 'Cypress API').and('contain','GitHub')
                break;

            case envTag ==="cypressPROD" : {
                //cy.get('h1').contains('Test. Automate. Accelerate.').should('be.visible')
                cy.get('nav[data-cy="main"]').should('contain'," Log In ").and('contain',' Install ')
                break;
            }
        }
    });
   
    it('Should run this test only on Cypress QA environment', () =>{
        cy.onlyOn( envTag == ("cypressQA"));
        cy.log('Running test on QA environment');

        cy.visit('');

        cy.url().should('eq', baseUrl);

        cy.get('.navbar').contains('Utilities').click();

        cy.url().should('contain', '/utilities');
        cy.get('h1').contains('Utilities').should('be.visible');
        })

})